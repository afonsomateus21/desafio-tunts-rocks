import { google } from "googleapis";
import { calculateNoteToApprove, createRows, getRows } from "../utils/helpers.js";

const createSituation = async (req, res) => {
  try {
    const auth = new google.auth.GoogleAuth({
      keyFile: `${process.env.KEY_FILE}`,
      scopes: `${process.env.SCOPES}`,
    });

    const client = await auth.getClient();

    const googleSheets = google.sheets({ version: "v4", auth: client });

    let rows = await getRows(auth, googleSheets);
    for (let i=3; i < rows.length; ++i) {
      let situation = "Aprovado";
      let sum = 0;
      let noteToApprove = 0;

      for (let j=3; rows[i][j] !== undefined; ++j) {
        sum += Number(rows[i][j]);
      }

      if (Number(rows[i][2]) > 15) situation = "Reprovado por Falta"
      else if ((sum / 3) >= 50 && (sum / 3) < 70) {
        situation = "Exame Final";
        noteToApprove = calculateNoteToApprove(sum);
      }
      else if ((sum / 3) < 50) situation = "Reprovado";

      const rowIndexToUpdate = i + 1;

      await createRows(auth, googleSheets, rowIndexToUpdate, situation, noteToApprove);
    }

    res.status(201).send({
      "response": "Row created with success"
    });

  } catch (error) {
    console.error(error);
    res.status(500).send();
  }
}

export { createSituation }
