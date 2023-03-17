import { createSlice } from "@reduxjs/toolkit";
import wordList from "../words.json";

let randomNum = Math.floor(Math.random() * wordList.words.length);
const initialState = {
  board: [
    //Row 1
    "",
    "",
    "",
    "",
    "",
    //Row 2

    "",
    "",
    "",
    "",
    "",
    //Row 3
    "",
    "",
    "",
    "",
    "",

    //Row 4
    "",
    "",
    "",
    "",
    "",

    //Row 5
    "",
    "",
    "",
    "",
    "",

    //Row 6
    "",
    "",
    "",
    "",
    "",
  ],
  pos: 0,
  row: 0,
  key: "",
  correctedWord: wordList.words[randomNum].toUpperCase(),
};

export const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    setBoard: (state, action) => {
      state.board = action.payload;
    },

    increasePos: (state) => {
      state.pos++;
    },

    decreasePos: (state) => {
      state.pos--;
    },

    increaseRow: (state) => {
      state.row++;
    },

    getKey: (state, action) => {
      state.key = action.payload;
    },
  },
});

export const { setBoard, increasePos, decreasePos, increaseRow, getKey } =
  boardSlice.actions;

export default boardSlice.reducer;
