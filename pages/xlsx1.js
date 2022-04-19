import React, { useState, ChangeEvent } from "react";
import DataGrid, { TextEditor } from "react-data-grid";
import { read, utils, WorkSheet, writeFile } from "xlsx";


function getRowsCols(
  data,
  sheetName
) {
  const rows = utils.sheet_to_json(data[sheetName], {header:1});
  let columns = [];

  for (let row of rows) {
    const keys = Object.keys(row);

    if (keys.length > columns.length) {
      columns = keys.map((key) => {
        return { key, name: utils.encode_col(+key), editor: TextEditor };
      });
    }
  }

  return { rows, columns };
}

export default function App() {
  const [rows, setRows] = useState();
  const [columns, setColumns] = useState();
  const [workBook, setWorkBook] = useState();
  const [sheets, setSheets] = useState();
  const [current, setCurrent] = useState();

  const exportTypes = ["xlsx", "xlsb", "csv", "html"];

  function selectSheet(name, reset = true) {
    if(reset) workBook[current] = utils.json_to_sheet(rows, {
      header: columns.map((col) => col.key),
      skipHeader: true
    });

    const { rows: new_rows, columns: new_columns } = getRowsCols(workBook, name);

    setRows(new_rows);
    setColumns(new_columns);
    setCurrent(name);
  }

  async function handleFile(ev){
    const file = await ev.target.files?.[0]?.arrayBuffer();
    const data = read(file);

    setWorkBook(data.Sheets);
    setSheets(data.SheetNames);
  }

  function saveFile(ext){
    const wb = utils.book_new();

    sheets.forEach((n) => {
      utils.book_append_sheet(wb, workBook[n], n);
    });

    writeFile(wb, "sheet." + ext);
  }

  return (
    <>
      <input type="file" onChange={handleFile} />
      <div className="flex-cont">
        {sheets.map((sheet) => (
          <button key={sheet} onClick={(e) => selectSheet(sheet)}>
            {sheet}
          </button>
        ))}
      </div>
      <div className="flex-cont">
        <b>Current Sheet: {current}</b>
      </div>
      <DataGrid columns={columns} rows={rows} onRowsChange={setRows} />
      <div className="flex-cont">
        {exportTypes.map((ext) => (
          <button key={ext} onClick={() => saveFile(ext)}>
            export [.{ext}]
          </button>
        ))}
      </div>
    </>
  );
}
