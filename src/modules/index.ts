import { combineReducers } from "redux";
import header from "./header/header";

const rootReducer = combineReducers({
  header,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
