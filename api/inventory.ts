import { google } from 'googleapis';

// Vercel: disable caching so live inventory always reflects the latest sheet data.
export const config = {
  runtime: 'nodejs20.x',
};

const SPREADSHEET_ID = process.env.GOOGLE_SHEET_ID;
// Fetch everything from the first tab
const RANGE = 'Sheet1';

export default async function handler(req: Request): Promise<Response> {
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Cache-Control': 'no-store, max-age=0',
  };

  if (req.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: corsHeaders });
  }

  if (req.method !== 'GET') {
    return new Response('Method Not Allowed', { status: 405, headers: corsHeaders });
  }

  try {
    if (!process.env.GOOGLE_CLIENT_EMAIL || !process.env.GOOGLE_PRIVATE_KEY) {
      throw new Error('Missing GOOGLE_CLIENT_EMAIL or GOOGLE_PRIVATE_KEY environment variables.');
    }
    if (!SPREADSHEET_ID) {
      throw new Error('Missing GOOGLE_SHEET_ID environment variable.');
    }

    // CRITICAL: Vercel escapes \n in env vars — restore real newlines before use.
    const privateKey = process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n');

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: privateKey,
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: RANGE,
    });

    const rows = response.data.values;

    if (!rows || rows.length < 2) {
      return new Response(JSON.stringify([]), {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Row 0 = headers, rows 1+ = data
    const [headers, ...dataRows] = rows;

    const inventory = dataRows
      // Filter out completely empty rows
      .filter((row) => row.some((cell: string) => cell?.toString().trim() !== ''))
      .map((row) => {
        const item: Record<string, string> = {};
        headers.forEach((header: string, i: number) => {
          item[header.trim()] = (row[i] ?? '').toString().trim();
        });
        return item;
      });

    return new Response(JSON.stringify(inventory), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error: any) {
    console.error('[inventory] Google Sheets Error:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to fetch inventory', details: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
}
