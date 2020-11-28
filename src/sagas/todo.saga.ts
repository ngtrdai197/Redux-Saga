import { put, delay } from "redux-saga/effects";

import { getTodosActionSuccess } from "../store/actions/todo.action";
const todos = [
  { id: 0, text: "Learn React", completed: true },
  { id: 1, text: "Learn Redux", completed: false, color: "purple" },
  {
    id: 2,
    text: "Build something fun!",
    completed: false,
    color: "blue",
  },
];
export function* getTodos() {
  yield delay(2000);
  yield put(getTodosActionSuccess({ todos, error: undefined, loading: false }));
}
