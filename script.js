//@ts-check

function addTable() {
  let body = document.querySelector("body");
  let tableWidth = document.getElementById("table-width");
  let tableHeight = document.getElementById("table-height");
  let width = tableWidth.value;
  let height = tableHeight.value;
  let numRows = document.getElementById("rows");
  let numColumns = document.getElementById("columns");
  let rows = numRows.value;
  let columns = numColumns.value;
  let tr = "";
  let td = "";
  let table = document.createElement("table");

  table.setAttribute("border", "2px");
  table.setAttribute("width", width);
  table.setAttribute("height", height);

  for (let i = 0; i < rows; i++) {
    tr = document.createElement("tr");
    for (let j = 0; j < columns; j++) {
      td = document.createElement("td");
      text = document.createTextNode((i + 1) + "." + (j + 1));
      td.appendChild(text);
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }

  return body.appendChild(table);
}