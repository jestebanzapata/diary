import boardReducer from './reducers/boardReducer';
import { configureStore } from '@reduxjs/toolkit';
//import { composeWithDevTools } from "redux-devtools-extension";

const store = configureStore({
  reducer: { board: boardReducer },
});

export default store;