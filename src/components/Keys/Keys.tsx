import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setBoard, increasePos } from "../../redux/BoardSlice";
import { rootState } from "../../types/interface";
import "./Keys.css";
interface IProps {
  letter: string;
}

const Keys: React.FC<IProps> = (props) => {
  const { letter } = props;
  const board = useSelector((state: rootState) => state.board.board);
  const position = useSelector((state: rootState) => state.board.pos);
  const row = useSelector((state: rootState) => state.board.row);
  let currentRow = Math.floor(position / 5);
  const dispatch = useDispatch();
  const clickKey = () => {
    if (currentRow > row) return;
    if (position >= 30) return;
    const newBoard = [...board];
    newBoard[position] = letter;
    dispatch(setBoard(newBoard));
    dispatch(increasePos());
  };
  return (
    <div className="letter" onClick={clickKey}>
      {letter}
    </div>
  );
};

export default Keys;
