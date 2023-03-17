import React, { useEffect, useState } from "react";
import "./Square.css";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { rootState } from "../../types/interface";
interface IProps {
  val: string;
  squareIndex: number;
}

const Square: React.FC<IProps> = (props) => {
  const { val, squareIndex } = props;
  const correctedWord = useSelector(
    (state: rootState) => state.board.correctedWord
  );
  const position = useSelector((state: rootState) => state.board.pos);
  const reduxRow = useSelector((state: rootState) => state.board.row);
  const [correct, setCorrect] = useState<boolean>(false);
  const [almost, setAlmost] = useState<boolean>(false);
  const [wrong, setWrong] = useState<boolean>(false);
  const currentPos = Math.floor((position - 1) % 5);

  useEffect(() => {
    if (correctedWord[currentPos] === val) {
      setCorrect(true);
    } else if (!correct && val !== "" && correctedWord.includes(val)) {
      setAlmost(true);
    } else if (!correct && val !== "" && !correctedWord.includes(val)) {
      setWrong(true);
    }
    return () => {
      setCorrect(false);
      setAlmost(false);
      setWrong(false);
    };
  }, [val]);

  const variants = {
    filled: () => ({
      scale: [1.2, 1],
      trasition: {
        duration: 0.2,
      },
    }),

    unfilled: () => ({
      scale: [1.2, 1],
      trasition: {
        duration: 0.2,
      },
    }),
  };
  console.log(correctedWord);

  const status: any =
    Math.floor(squareIndex / 5) < reduxRow &&
    (correct ? "correct" : almost ? "almost" : wrong ? "wrong" : "");
  return (
    <motion.div animate={val ? "filled" : "unfilled"} variants={variants}>
      <div className="square" id={status}>
        {val}
      </div>
    </motion.div>
  );
};

export default Square;
