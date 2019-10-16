const initialState = {
  data: [],
  currentInfo: {},
  status: '',
  timeSlot: '9am - 10am'
}

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_CURRENT_TIME_SLOT":
      const info = state.data.find((d) => d.timeSlot === action.timeSlot);
      return Object.assign({}, state, { time: action.time, timeSlot: action.timeSlot, currentInfo: info ? info : {} });;
    case "OPENMODAL":
      return Object.assign({}, state, { setOpen: true });
    case "CLOSEMODAL":
      return Object.assign({}, state, { setOpen: false });
    case "RECEIVED_DATA":
      console.log("get data reducer", action.data)
      return Object.assign({}, state, { data: action.data });
    case "DATA_SUBMITTED":
      console.log('data sumbitted');
      return Object.assign({}, state, { status: 'waiting' });
    case "DATA_SUMBIT_SUCCESS":
      console.log('data sumbit success', action.res);
      return Object.assign({}, state, { status: 'success' });
    case "DATA_SUMBIT_FAIL":
      console.log('data sumbit failed', action.err)
      return Object.assign({}, state, { status: 'failed' })
    default:
      return state;
  }
};
