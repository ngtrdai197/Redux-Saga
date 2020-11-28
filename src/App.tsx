import React from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import { getTodosAction } from "./store/actions/todo.action";

function App() {
  const dispatch = useDispatch();
  const getTodos = () => dispatch(getTodosAction());
  return (
    <div className="App">
      <button onClick={() => getTodos()}>Todo</button>
    </div>
  );
}

export default App;
