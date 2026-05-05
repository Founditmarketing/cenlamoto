/**
 * Local development API server.
 * Mirrors the Vercel serverless functions in api/ so that
 * `npm run dev` works with the Vite proxy pointing to :3001.
 *
 * Run via: npx tsx server.ts
 */
import 'dotenv/config';
import express from 'express';
import { google } from 'googleapis';

const app = express();
app.use(express.json());

// ── CORS for local dev ────────────────────────────────────────────────────────
app.use((_req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// ── GET /api/inventory ────────────────────────────────────────────────────────
app.get('/api/inventory', async (_req, res) => {
  try {
    const { GOOGLE_SHEET_ID, GOOGLE_CLIENT_EMAIL, GOOGLE_PRIVATE_KEY } = process.env;

    if (!GOOGLE_CLIENT_EMAIL || !GOOGLE_PRIVATE_KEY) {
      throw new Error('Missing GOOGLE_CLIENT_EMAIL or GOOGLE_PRIVATE_KEY in .env');
    }
    if (!GOOGLE_SHEET_ID) {
      throw new Error('Missing GOOGLE_SHEET_ID in .env');
    }

    // Vercel escapes \n in env vars — restore real newlines
    const privateKey = GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n');

    const auth = new google.auth.GoogleAuth({
      credentials: { client_email: GOOGLE_CLIENT_EMAIL, private_key: privateKey },
      scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: GOOGLE_SHEET_ID,
      range: 'Sheet1',
    });

    const rows = response.data.values;
    if (!rows || rows.length < 2) {
      res.json([]);
      return;
    }

    const [headers, ...dataRows] = rows;
    const inventory = dataRows
      .filter((row) => row.some((cell: string) => cell?.toString().trim() !== ''))
      .map((row) => {
        const item: Record<string, string> = {};
        headers.forEach((header: string, i: number) => {
          item[header.trim()] = (row[i] ?? '').toString().trim();
        });
        return item;
      });

    res.json(inventory);
  } catch (err: any) {
    console.error('[inventory] Error:', err.message);
    res.status(500).json({ error: 'Failed to fetch inventory', details: err.message });
  }
});

// ── POST /api/chat ────────────────────────────────────────────────────────────
// Minimal stub — the real chat handler runs on Vercel Edge.
// Uncomment and flesh out if you need chat locally too.
// app.post('/api/chat', async (req, res) => { ... });

// ── Start ─────────────────────────────────────────────────────────────────────
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`\n✅  Local API server running at http://localhost:${PORT}`);
  console.log('   GET  /api/inventory → Google Sheets\n');
});
