let currentPlayer = 'X';

document.querySelectorAll('.cell').forEach(cell => {
    cell.addEventListener('click', () => {
        if (!cell.textContent) {
            cell.textContent = currentPlayer;
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    });

// Проверка наличия победителя после каждого хода
function checkWinner() {
    const cells = document.querySelectorAll('.cell');
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Горизонтали
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Вертикали
        [0, 4, 8], [2, 4, 6]             // Диагонали
    ];

    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[b].textContent === cells[c].textContent) {
            return cells[a].textContent;
        }
    }

    return null;
}

// Проверка наличия победителя после каждого хода
document.querySelectorAll('.cell').forEach(cell => {
    cell.addEventListener('click', () => {
        if (!cell.textContent) {
            cell.textContent = currentPlayer;
            const winner = checkWinner();
            if (winner) {
                alert(`Игрок ${winner} победил!`);
                // Дополнительные действия после окончания игры
            } else {
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
        }
    });
});
});