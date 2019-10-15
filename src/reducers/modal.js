export default (state = [], action) => {
  switch (action.type) {
    case "OPENMODAL":
      return Object.assign({}, state, { setOpen: true });
    case "CLOSEMODAL":
      return Object.assign({}, state, { setOpen: false });
    default:
      return state;
  }
};
