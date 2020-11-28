import { takeLatest } from "redux-saga/effects";
import { GET_TODOS } from "../store/types/todo.type";
import { getTodos } from "./todo.saga";

function* mySaga() {
  yield takeLatest(GET_TODOS, getTodos);
}

export default mySaga;
