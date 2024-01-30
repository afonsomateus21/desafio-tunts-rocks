export const calculateNoteToApprove = (sum) => {
  return Math.ceil(100 - (sum / 3));
}

export const getRows = async (auth, googleSheets) => {
  const rows = await googleSheets.spreadsheets.values.get({
    auth,
    spreadsheetId: `${process.env.SPREADSHEET_ID}`,
    range: "engenharia_de_software"
  })

  return rows.data.values;
}

export const createRows = async (auth, googleSheets, rowIndexToUpdate, situation, noteToApprove) => {
  return await googleSheets.spreadsheets.values.update({
    auth,
    spreadsheetId: `${process.env.SPREADSHEET_ID}`,
    range: `engenharia_de_software!G${rowIndexToUpdate}:H${rowIndexToUpdate}`,
    valueInputOption: "USER_ENTERED",
    resource: {
      values: [
        [situation, noteToApprove]
      ]
    }
  })
}