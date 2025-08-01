import { google } from 'googleapis';

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];

export async function getSheetsClient() {
const raw = process.env.GOOGLE_CREDENTIALS;
const credentials = JSON.parse(raw.replace(/\\n/g, '\n'));

  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: SCOPES,
  });

  const authClient = await auth.getClient();
  return google.sheets({ version: 'v4', auth: authClient });
}

export async function addLançamento(sheetId, valores) {
  const sheets = await getSheetsClient();

  const resource = {
    values: [valores],
  };

  await sheets.spreadsheets.values.append({
    spreadsheetId: sheetId,
    range: 'Lançamentos!A2',
    valueInputOption: 'USER_ENTERED',
    resource,
  });

  console.log('✅ Lançamento enviado:', valores);
}
