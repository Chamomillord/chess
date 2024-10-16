import styled from "styled-components";

export const StyledBoard = styled.div`
    display: grid;
    grid-template-columns: repeat(8, 100px);
    grid-template-rows: repeat(8, 100px);
    width: 800px;
    height: 800px;
    margin: 0 auto;
    border: 1px solid black;
`;
