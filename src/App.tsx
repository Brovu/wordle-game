import "./App.css";
import Board from "./components/Board/Board";
import Heading from "./components/Heading/Heading";
import { useSelector } from "react-redux";
import { rootState } from "./types/interface";

function App() {
  const board = useSelector((state: rootState) => state.board.board);
  return (
    <div className="App">
      <Heading type="h1" text="Wordle Game" />
      <Heading type="title" text="Let's play!" />
      <div className="board-container">
        <Board board={board} />
      </div>
    </div>
  );
}

export default App;
