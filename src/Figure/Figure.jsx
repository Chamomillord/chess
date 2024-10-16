import React from "react";
import { StyledFigure } from "./style";

export default function Figure({ ...props }) {
    console.log(props.asset);
    return (
        <StyledFigure
            name={props.name}
            id={props.id}
            color={props.color}
            src={props.asset}
        ></StyledFigure>
    );
}
