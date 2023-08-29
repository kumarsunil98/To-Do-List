import * as actionTypes from "../actions/type";
export const tabReducer = (state = actionTypes.GETALL_TODO, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_TAB:
      return action.selected;
    default:
      return state;
  }
};
