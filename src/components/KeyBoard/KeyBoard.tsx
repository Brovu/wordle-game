import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decreasePos, increaseRow, setBoard } from "../../redux/BoardSlice";
import { rootState } from "../../types/interface";
import Keys from "../Keys/Keys";
import "./KeyBoard.css";
import wordList from "../../words.json";

const KeyBoard: React.FC = () => {
  const keys: string[] = [
    "q w e r t y u i o p",
    "a s d f g h j k l",
    "z x c v b n m",
  ];

  const board = useSelector((state: rootState) => state.board.board);
  const positon = useSelector((state: rootState) => state.board.pos);
  const row = useSelector((state: rootState) => state.board.row);
  const correctWord = useSelector(
    (state: rootState) => state.board.correctedWord
  );
  let allWord: string[] = wordList.words;
  let FiveWords = `${board[positon - 5]}${board[positon - 4]}${
    board[positon - 3]
  }${board[positon - 2]}${board[positon - 1]}`.toLowerCase();
  const dispatch = useDispatch();

  const clickBack = () => {
    if (Math.floor((positon - 1) / 5) < row) {
      alert("Can not back");
      return;
    }
    const newBoard = [...board];
    newBoard[positon - 1] = "";
    dispatch(setBoard(newBoard));
    dispatch(decreasePos());
  };

  const clickEnter = () => {
    if (allWord.includes(FiveWords) === false) {
      alert("Invalid Word!!");
    }
    if (allWord.includes(FiveWords)) {
      if (positon % 5 === 0 && positon !== 0) {
        dispatch(increaseRow());
      }
    }
    if (positon >= 30 && allWord.includes(FiveWords)) {
      alert("The word is: " + correctWord);
    }
  };
  return (
    <div className="keyboard-container">
      {keys.map((key, id) => {
        return (
          <div className="row">
            {id === 2 && (
              <span className="letter-row" onClick={clickEnter}>
                Confirm
              </span>
            )}
            {key.split(" ").map((letter, id) => {
              return (
                <div className="letter-row">
                  <Keys letter={letter.toUpperCase()} />
                  {letter === "m" && <span onClick={clickBack}>Back</span>}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default KeyBoard;
