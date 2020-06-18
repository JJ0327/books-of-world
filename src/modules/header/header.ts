import { createAction, ActionType, createReducer } from "typesafe-actions";

const OPEN = "header/OPEN";
const CLOSE = "header/CLOSE";

export const open = createAction(OPEN)();
export const close = createAction(CLOSE)();

const actions = { open, close };
type HeaderAction = ActionType<typeof actions>;

type HeaderState = {
  isOpen: boolean;
};

const initalState: HeaderState = {
  isOpen: false,
};

const header = createReducer<HeaderState, HeaderAction>(initalState, {
  [OPEN]: (state) => ({ isOpen: true }),
  [CLOSE]: (state) => ({ isOpen: false }),
});

export default header;
