document.getElementById('start-btn').addEventListener('click', startVisualization);

function startVisualization() {
  const str1 = document.getElementById('string1').value;
  const str2 = document.getElementById('string2').value;
  if (str1.length === 0 || str2.length === 0) {
    alert('Please enter both strings.');
    return;
  }

  const m = str1.length;
  const n = str2.length;

  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
  let maxLength = 0;
  let endIdx = 0;

  const tableContainer = document.getElementById('table-container');
  tableContainer.innerHTML = '';

  const table = document.createElement('table');

  for (let i = 0; i <= m; i++) {
    const row = document.createElement('tr');
    for (let j = 0; j <= n; j++) {
      const cell = document.createElement('td');
      cell.id = `cell-${i}-${j}`;
      cell.textContent = dp[i][j];
      row.appendChild(cell);
    }
    table.appendChild(row);
  }
  tableContainer.appendChild(table);

  let i = 1, j = 1;
  function fillTable() {
    if (i > m) {
      displayResult(str1, maxLength, endIdx);
      return;
    }

    if (j > n) {
      i++;
      j = 1;
      return fillTable();
    }

    const cell = document.getElementById(`cell-${i}-${j}`);
    if (str1[i - 1] === str2[j - 1]) {
      dp[i][j] = dp[i - 1][j - 1] + 1;
      cell.classList.add('highlight');
      if (dp[i][j] > maxLength) {
        maxLength = dp[i][j];
        endIdx = i - 1;
      }
    } else {
      dp[i][j] = 0;
      cell.classList.add('mismatch');
    }
    cell.textContent = dp[i][j];

    j++;
    setTimeout(fillTable, 100);
  }

  fillTable();
}

function displayResult(str1, maxLength, endIdx) {
  const resultContainer = document.getElementById('result-container');
  resultContainer.innerHTML = `
    <p>Longest Common Substring Length: ${maxLength}</p>
    <p>Longest Common Substring: ${str1.slice(endIdx - maxLength + 1, endIdx + 1)}</p>
  `;
}
