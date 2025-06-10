import { google } from 'googleapis';

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];

export async function getSheetsClient() {
  const auth = new google.auth.GoogleAuth({
    keyFile: 'credentials.json',  // esse é o arquivo baixado
    scopes: SCOPES
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
    range: 'Lançamentos!A2',  // vai adicionar sempre na próxima linha
    valueInputOption: 'USER_ENTERED',
    resource,
  });

  console.log('✅ Lançamento enviado:', valores);
}
