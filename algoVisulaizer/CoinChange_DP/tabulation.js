document.getElementById('start').addEventListener('click', startVisualization);

function startVisualization() {
    const coins = [1, 2, 5];
    const amount = 11;
    const n = coins.length;

    // Create the DP table
    const dp = Array.from({ length: n }, () => Array(amount + 1).fill(0));

    // Create table rows and cells in HTML
    const table = document.getElementById('dp-table');
    table.innerHTML = ''; // Clear previous table if any

    // Create table headers
    const headerRow = table.insertRow();
    headerRow.insertCell().innerText = ''; // Top-left empty cell
    for (let j = 0; j <= amount; j++) {
        headerRow.insertCell().innerText = j;
    }

    for (let i = 0; i < n; i++) {
        const row = table.insertRow();
        row.insertCell().innerText = coins[i]; // First column with coin values
        for (let j = 0; j <= amount; j++) {
            row.insertCell().innerText = '';
        }
    }

    // Initialize the first row
    for (let T = 0; T <= amount; T++) {
        dp[0][T] = (T % coins[0] === 0) ? T / coins[0] : 1e9;
        updateTableCell(1, T + 1, dp[0][T]);
    }

    // Fill the DP table step-by-step
    let ind = 1;
    let target = 0;
    const interval = setInterval(() => {
        if (ind < n && target <= amount) {
            const nottake = dp[ind - 1][target];
            let take = 1e9;
            if (coins[ind] <= target) {
                take = 1 + dp[ind][target - coins[ind]];
            }
            dp[ind][target] = Math.min(take, nottake);

            updateTableCell(ind + 1, target + 1, dp[ind][target]);

            target++;
            if (target > amount) {
                target = 0;
                ind++;
            }
        } else {
            clearInterval(interval);
        }
    }, 500);
}

function updateTableCell(row, col, value) {
    const table = document.getElementById('dp-table');
    const cell = table.rows[row].cells[col];
    cell.innerText = value === 1e9 ? '∞' : value;
    cell.classList.add('filled');
}
