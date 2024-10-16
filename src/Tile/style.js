import styled from "styled-components";

export const StyledTile = styled.div`
    width: 100px;
    height: 100px;
    background-color: ${(props) => props.color};
    && {
        background-color: ${(props) => props.color};
    }
    display: flex;
    justify-content: center;
    align-items: center;
`;
