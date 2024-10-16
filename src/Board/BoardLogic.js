import { Pawn, Bishop, King, Queen, Rook, Knight } from "../Figure/FigureLogic";
export function initializeChessBoard() {
    const board = Array(8)
        .fill(null)
        .map(() => Array(8).fill(null));

    const setupRow = (row, color, isPawnRow) => {
        const pieces = [
            new Rook(0, { x: row, y: 0 }, color),
            new Knight(0, { x: row, y: 1 }, color),
            new Bishop(0, { x: row, y: 2 }, color),
            new Queen(0, { x: row, y: 3 }, color),
            new King(0, { x: row, y: 4 }, color),
            new Bishop(1, { x: row, y: 5 }, color),
            new Knight(1, { x: row, y: 6 }, color),
            new Rook(1, { x: row, y: 7 }, color),
        ];
        if (isPawnRow) {
            for (let i = 0; i < 8; i++) {
                board[row][i] = new Pawn(i, { x: row, y: i }, color);
            }
        } else {
            for (let i = 0; i < 8; i++) {
                board[row][i] = pieces[i];
            }
        }
    };

    setupRow(0, "black", false);
    setupRow(1, "black", true);
    setupRow(6, "white", true);
    setupRow(7, "white", false);

    return board;
}

const chessBoard = initializeChessBoard();
console.log(chessBoard);
