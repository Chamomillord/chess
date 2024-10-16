import styled from "styled-components";

export const StyledFigure = styled.img`
    background-image: url(${(props) => props.asset});

    width: 50px; // Убедитесь, что размеры заданы
    height: 50px; // Убедитесь, что размеры заданы
`;
