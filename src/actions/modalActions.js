export const simpleAction = () => dispatch => {
  dispatch({
    type: 'SIMPLE_ACTION',
    payload: 'result_of_simple_action'
  })
}

export const openModal = (title, time) => {
  return {
    type: "OPENMODAL",
    title,
    time
  };
}