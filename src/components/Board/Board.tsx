import React from "react";
import KeyBoard from "../KeyBoard/KeyBoard";
import Square from "../Square/Square";
import "./Board.css";

interface IProps {
  board: string[];
}

const Board: React.FC<IProps> = (props) => {
  const { board } = props;
  return (
    <>
      <div className="board">
        {board.map((square, index) => {
          return (
            <>
              <Square val={square} squareIndex={index} />
            </>
          );
        })}
      </div>
      <div className="keyboard">
        <KeyBoard />
      </div>
    </>
  );
};

export default Board;
