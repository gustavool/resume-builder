import { actionTypes } from '../actions/themeActions';

const initialState = {
  theme: 'light',
};

export default function toggleTheme(state = initialState, { type, payload }) {
  switch (type) {
    case actionTypes.TOGGLE_THEME:
      return { ...state, theme: payload.theme };

    default:
      return state;
  }
}
