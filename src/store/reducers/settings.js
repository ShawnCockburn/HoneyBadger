import { SET_DARKMODE } from "../actions/settings";

//darkmode settings
export const DARKMODE_OPTIONS = {
  DARK: "dark",
  LIGHT: "light",
};

const initialState = {
  darkmode: DARKMODE_OPTIONS.DARK,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DARKMODE:
      return { ...state, darkmode: action.darkmodeOption };

    default:
      return state;
  }
};

export default reducer;
