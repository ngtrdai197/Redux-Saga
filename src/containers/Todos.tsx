import React from "react";

import { useDispatch } from "react-redux";
import { getTodosAction } from "../store/actions/todo.action";

export const Todos: React.FC<{}> = () => {
  const dispatch = useDispatch();
  const getTodos = () => dispatch(getTodosAction());
  return (
    <section>
      <button onClick={() => getTodos()}>Todo</button>
    </section>
  );
};
