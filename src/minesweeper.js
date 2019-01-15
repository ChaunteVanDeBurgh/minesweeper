const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
	let board = [];

	for (let i = 0; i < numberOfRows; i++) {
		let row = [];
		for (let j = 0; j < numberOfColumns; j++) {
			row.push(' ');
		}
	board.push(row);
	}
	return board;
}

const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
	const board = [];
	for (let i = 0; i < numberOfRows; i++) {
		let row = [];
		for (let j = 0; j < numberOfColumns; j++) {
			row.push(null);
		}
	board.push(row);
	}

	let numberOfBombsPlaced = 0;
	while (numberOfBombs > numberOfBombsPlaced) {
		let randomRowIndex = Math.floor(Math.random() * numberOfRows);
		let randomColumnIndex = Math.floor(Math.random() * numberOfColumns);

		if(board[randomRowIndex][randomColumnIndex] !== 'B') {
			board[randomRowIndex][randomColumnIndex] = 'B';
			numberOfBombsPlaced++;
		};
	}
	return board;
}

const printBoard = (board) => {
	console.log(board.map(row => row.join(' | ')).join('\n'));
}

let playerBoard = generatePlayerBoard(9, 9);
let bombBoard = generateBombBoard(9, 9, 5);
console.log('Player Board: ')
printBoard(playerBoard);
console.log('Bomb Board: ');
printBoard(bombBoard);
