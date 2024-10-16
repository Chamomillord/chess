import { StyledTile } from "./style";
import React from "react";

export function Tile({ color, children, tileid, onDrop, onDragOver }) {
    return (
        <StyledTile
            color={color}
            onDrop={(e) => onDrop(e, tileid)}
            onDragOver={(e) => onDragOver(e)}
        >
            {children}
        </StyledTile>
    );
}
