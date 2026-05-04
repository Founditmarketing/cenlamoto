# cenlamoto — National Tire & Auto Hub
Vite + React + TypeScript website for Central Louisiana's premier automotive service hub.

## Stack
- **Frontend**: React 19, TypeScript, Tailwind CSS v4, Framer Motion
- **API**: Vercel Serverless Functions (Node.js runtime)
- **Inventory**: Live Google Sheets integration via googleapis
- **AI Chat**: Gemini 2.5 Flash

## Environment Variables
See `.env.example` for all required variables including:
- `GOOGLE_SHEET_ID` — Spreadsheet ID for live inventory
- `GOOGLE_CLIENT_EMAIL` — Service account email
- `GOOGLE_PRIVATE_KEY` — Service account private key (Vercel handles newline escaping)

## Routes
| Path | Description |
|------|-------------|
| `/inventory` | Live inventory list from Google Sheets |
| `/equipment/:id` | Individual item detail page |

