const initialState = {
  data: [],
  currentInfo: {},
  status: "",
  timeSlot: "9am - 10am"
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_CURRENT_TIME_SLOT":
      return Object.assign({}, state, {
        time: action.time,
        timeSlot: action.timeSlot,
      });
    case "SET_RESERVATION_DATA":
      const info = state.data.find(d => d.timeSlot === state.timeSlot);
      return Object.assign({}, state, { currentInfo: info ? info : {} });
    case "OPENMODAL":
      return Object.assign({}, state, { setOpen: true, modalType: action.modalType });
    case "CLOSEMODAL":
      return Object.assign({}, state, { setOpen: false });
    case "RECEIVED_DATA":
      return Object.assign({}, state, { data: action.data });
    case "DATA_SUBMITTED":
      return Object.assign({}, state, { status: "waiting" });
    case "DATA_SUMBIT_SUCCESS":
      return Object.assign({}, state, { status: "success" });
    case "DATA_SUMBIT_FAIL":
      return Object.assign({}, state, { status: "failed" });
    default:
      return state;
  }
};
