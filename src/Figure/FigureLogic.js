export default class Figure {
    constructor(id, position, color) {
        this.id = id;
        this.position = position;
        this.color = color;
        this.name = "";
        this.asset = "";
    }

    onDrag = () => {};
    onDrop = () => {};

    allowedMoves(board, position) {
        throw new Error("This method should be overridden by subclasses");
    }
}

export class King extends Figure {
    constructor(id, position, color) {
        super(id, position, color);
        this.name = "king";
        this.asset =
            color === "black"
                ? "chess-pieces/Chess_kdt60.png"
                : "chess-pieces/Chess_klt60.png";
    }
    allowedMoves(board, position) {
        const moves = [];
        const directions = [
            [1, 0],
            [1, 1],
            [0, 1],
            [-1, 1],
            [-1, 0],
            [-1, -1],
            [0, -1],
            [1, -1],
        ];
        directions.forEach(([dx, dy]) => {
            const [x, y] = position;
            const newX = x + dx;
            const newY = y + dy;
            if (this.isValidMove(board, newX, newY)) {
                moves.push([newX, newY]);
            }
        });
        return moves;
    }

    isValidMove(board, x, y) {
        // Проверка на валидность хода
        return x >= 0 && x < 8 && y >= 0 && y < 8;
    }
}

export class Queen extends Figure {
    constructor(id, position, color) {
        super(id, position, color);
        this.name = "queen";
        this.asset =
            color === "black"
                ? "chess-pieces/Chess_qdt60.png"
                : "chess-pieces/Chess_qlt60.png";
    }
    allowedMoves(board, position) {
        const moves = [];
        const directions = [
            [1, 0],
            [1, 1],
            [0, 1],
            [-1, 1],
            [-1, 0],
            [-1, -1],
            [0, -1],
            [1, -1],
        ];
        directions.forEach(([dx, dy]) => {
            for (let i = 1; i < 8; i++) {
                const [x, y] = position;
                const newX = x + dx * i;
                const newY = y + dy * i;
                if (this.isValidMove(board, newX, newY)) {
                    moves.push([newX, newY]);
                } else {
                    break;
                }
            }
        });
        return moves;
    }

    isValidMove(board, x, y) {
        // Проверка на валидность хода
        return x >= 0 && x < 8 && y >= 0 && y < 8;
    }
}

export class Rook extends Figure {
    constructor(id, position, color) {
        super(id, position, color);
        this.name = "rook";
        this.asset =
            color === "black"
                ? "chess-pieces/Chess_rdt60.png"
                : "chess-pieces/Chess_rlt60.png";
    }
    allowedMoves(board, position) {
        const moves = [];
        const directions = [
            [1, 0],
            [0, 1],
            [-1, 0],
            [0, -1],
        ];
        directions.forEach(([dx, dy]) => {
            for (let i = 1; i < 8; i++) {
                const [x, y] = position;
                const newX = x + dx * i;
                const newY = y + dy * i;
                if (this.isValidMove(board, newX, newY)) {
                    moves.push([newX, newY]);
                } else {
                    break;
                }
            }
        });
        return moves;
    }

    isValidMove(board, x, y) {
        // Проверка на валидность хода
        return x >= 0 && x < 8 && y >= 0 && y < 8;
    }
}

export class Bishop extends Figure {
    constructor(id, position, color) {
        super(id, position, color);
        this.name = "bishop";
        this.asset =
            color === "black"
                ? "chess-pieces/Chess_bdt60.png"
                : "chess-pieces/Chess_blt60.png";
    }
    allowedMoves(board, position) {
        const moves = [];
        const directions = [
            [1, 1],
            [-1, 1],
            [-1, -1],
            [1, -1],
        ];
        directions.forEach(([dx, dy]) => {
            for (let i = 1; i < 8; i++) {
                const [x, y] = position;
                const newX = x + dx * i;
                const newY = y + dy * i;
                if (this.isValidMove(board, newX, newY)) {
                    moves.push([newX, newY]);
                } else {
                    break;
                }
            }
        });
        return moves;
    }

    isValidMove(board, x, y) {
        // Проверка на валидность хода
        return x >= 0 && x < 8 && y >= 0 && y < 8;
    }
}

export class Knight extends Figure {
    constructor(id, position, color) {
        super(id, position, color);
        this.name = "knight";
        this.asset =
            color === "black"
                ? "chess-pieces/Chess_ndt60.png"
                : "chess-pieces/Chess_nlt60.png";
    }
    allowedMoves(board, position) {
        const moves = [];
        const directions = [
            [2, 1],
            [1, 2],
            [-1, 2],
            [-2, 1],
            [-2, -1],
            [-1, -2],
            [1, -2],
            [2, -1],
        ];
        directions.forEach(([dx, dy]) => {
            const [x, y] = position;
            const newX = x + dx;
            const newY = y + dy;
            if (this.isValidMove(board, newX, newY)) {
                moves.push([newX, newY]);
            }
        });
        return moves;
    }

    isValidMove(board, x, y) {
        // Проверка на валидность хода
        return x >= 0 && x < 8 && y >= 0 && y < 8;
    }
}

export class Pawn extends Figure {
    constructor(id, position, color) {
        super(id, position, color);
        this.name = "pawn";
        this.asset =
            color === "black"
                ? "chess-pieces/Chess_pdt60.png"
                : "chess-pieces/Chess_plt60.png";
    }
    allowedMoves(board, position) {
        const moves = [];
        const [x, y] = position;
        const direction = this.color === "white" ? -1 : 1;
        const startRow = this.color === "white" ? 6 : 1;

        // Ход вперед
        if (this.isValidMove(board, x + direction, y)) {
            moves.push([x + direction, y]);
        }

        // Первый ход на две клетки вперед
        if (x === startRow && this.isValidMove(board, x + 2 * direction, y)) {
            moves.push([x + 2 * direction, y]);
        }

        // Взятие на проходе
        if (this.isValidMove(board, x + direction, y - 1)) {
            moves.push([x + direction, y - 1]);
        }
        if (this.isValidMove(board, x + direction, y + 1)) {
            moves.push([x + direction, y + 1]);
        }

        return moves;
    }

    isValidMove(board, x, y) {
        // Проверка на валидность хода
        return x >= 0 && x < 8 && y >= 0 && y < 8;
    }
}
