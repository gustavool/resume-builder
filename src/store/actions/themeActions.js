export const actionTypes = {
  TOGGLE_THEME: 'TOGGLE_THEME',
};

export const toggleTheme = (payload) => ({
  type: actionTypes.TOGGLE_THEME,
  payload,
});
