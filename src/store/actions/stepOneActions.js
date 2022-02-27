export const actionTypes = {
  CHANGE: 'CHANGE_STEP_ONE',
};

export const changeStepOne = (payload) => ({
  type: actionTypes.CHANGE,
  payload,
});
