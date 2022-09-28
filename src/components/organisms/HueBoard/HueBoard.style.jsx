import styled, { css } from 'styled-components';

const CELL_SIZE = 10;

export const StyledBoardSubContainer = styled.div`
    display: grid;
    width: calc((5* ${CELL_SIZE}vmin));
    grid-template-areas: "board";
    background-color: white;
    padding: 8px;
    border-radius: 5px;
    box-shadow: 0 4px 1px #858585;
`;

export const StyledBoard = styled.div(
    ({ rows, columns }) =>
        css`
            display: grid;
            grid-area: board;
            width: calc((5* ${CELL_SIZE}vmin));
            grid-template-rows: repeat(${rows}, ${CELL_SIZE}vmin);
            grid-template-columns: repeat(${columns}, ${CELL_SIZE}vmin);
            justify-content: center;

        `,
);