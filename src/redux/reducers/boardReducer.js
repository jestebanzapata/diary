import { createReducer } from "@reduxjs/toolkit";
import { gameStatus, modes } from "constants/types";
import { selectCell, setBoardInitialState, setConfig } from "redux/actions/boardActions";

const initialState = {
    gameState: {
        config: {
            stepRows: 5,
            stepColumns: 7,
        },
        board: [],
        selectedCell: null,
        status: gameStatus.PLAYING
    }
};

function isBoardCompleted(cell, index, arrreglo) {
    return cell.correctIndex === index;
}

const boardReducer = createReducer(initialState, (builder) => {
    builder.addCase(setBoardInitialState, (state, action) => {
        state.gameState = { ...state.gameState, board: [ ...action.payload.board ] }
    }).addCase(setConfig, (state, action) => {
        state.gameState = { ...state.gameState, config: { ...action.payload.config }}
    }).addCase(selectCell, (state, action) => {
        const { cell } = action.payload;
        const { index } = cell;

        if ((state.gameState.selectedCell &&
            state.gameState.selectedCell.index === index) || !cell.isDraggable) {
            state.gameState = {
                ...state.gameState,
                selectedCell: null,
            }
        } else if (state.gameState.selectedCell && state.gameState.selectedCell.index !== index) {
            const firstCell = state.gameState.board[state.gameState.selectedCell.index];
            const secondCell = state.gameState.board[index];

            const newBoard = state.gameState.board.map((cell, indexBoard) => {
                if (state.gameState.selectedCell.index === indexBoard) {
                    return { ...secondCell};
                }

                if (index === indexBoard) {
                    return { ...firstCell };
                }
                return { ...cell };
            });

            const status = newBoard.every(isBoardCompleted) ? gameStatus.FINISHED : gameStatus.PLAYING;

            state.gameState = {
                ...state.gameState,
                board: [
                    ...newBoard
                ],
                status: status,
                selectedCell: null,
            }
        } else if (!state.gameState.selectedCell) {

            if (cell) {
                state.gameState = {
                    ...state.gameState,
                    selectedCell: cell,
                }
            }
        }


    })
});

export default boardReducer;