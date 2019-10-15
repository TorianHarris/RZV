export default (state = [], action) => {
  switch (action.type) {
    case "OPENMODAL":
      return Object.assign({}, state, { setOpen: true, time: action.time });
    case "CLOSEMODAL":
      return Object.assign({}, state, { setOpen: false });
    default:
      return state;
  }
};
