import React, { useState } from "react";
import Tile from "../Tile";
import { StyledBoard } from "./style";
import { Figure } from "../Figure";
import { initializeChessBoard } from "./BoardLogic";

export function Board() {
    let [chessPositions, setChessPositions] = useState(initializeChessBoard());
    // переделать в генератор
    console.log(chessPositions);
    let board = Array.from({ length: 8 }, (_, row) =>
        Array.from({ length: 8 }, (_, col) => {
            const isEvenRow = row % 2 === 0;
            const isEvenCol = col % 2 === 0;
            const color =
                (isEvenRow && isEvenCol) || (!isEvenRow && !isEvenCol)
                    ? "white"
                    : "darkslategray";
            const x = row;
            const y = col;
            return { color, x, y };
        })
    );
    return (
        <StyledBoard>
            {board.map((tiles, rowIndex) =>
                tiles.map((tile, colIndex) => {
                    const figure = chessPositions[rowIndex][colIndex];
                    return (
                        <Tile
                            color={tile.color}
                            tileid={`${tile.x}-${tile.y}`}
                            key={`${tile.x}-${tile.y}`}
                        >
                            {figure && (
                                <Figure
                                    asset={figure.asset}
                                    color={figure.color}
                                    id={figure.id}
                                    name={figure.name}
                                />
                            )}
                        </Tile>
                    );
                })
            )}
        </StyledBoard>
    );
}
