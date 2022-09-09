import { SET_BOARD_INITIAL_STATE, SET_CONFIG, SELECT_CELL } from './types';
import { createAction } from "@reduxjs/toolkit";

export const setBoardInitialState = createAction(SET_BOARD_INITIAL_STATE);

export const setConfig = createAction(SET_CONFIG);

export const selectCell = createAction(SELECT_CELL);