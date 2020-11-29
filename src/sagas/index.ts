import { all } from "redux-saga/effects";

import { todoSagas } from "./todo.saga";

const combined = [...todoSagas];

function* mySaga() {
  yield all(combined);
}

export default mySaga;
