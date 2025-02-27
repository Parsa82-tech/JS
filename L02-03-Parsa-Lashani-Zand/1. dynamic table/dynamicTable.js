document.getElementById("create_Table").addEventListener("click", createTable);
function createTable() {
    const rows = document.getElementById('rows').value;
    const cols = document.getElementById('cols').value;

    const table = document.createElement('table');
    for (let i = 0; i < rows; i++) {
      const row = document.createElement('tr');
      for (let j = 0; j < cols; j++) {
        const cell = document.createElement('td');
        cell.textContent = `rows ${i+1}, columns ${j+1}`;
        row.appendChild(cell);
      }
      table.appendChild(row);
    }
    
    const container = document.getElementById('tableContainer');
    container.innerHTML = '';
    container.appendChild(table);
  }