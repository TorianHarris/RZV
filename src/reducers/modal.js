var moment = require('moment');

const initialState = {
  data: [],
  currentDateData: [],
  currentInfo: {},
  status: "",
  date: moment().format("dddd, MMMM DD"),
  year: moment().year(),
  timeSlot: "9am - 10am"
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_DATE":
      const newDate = action.operation === 'add' ?
        moment(state.date + state.year, `dddd, MMMM DD Y`).add(1, action.key) :
        moment(state.date + state.year, `dddd, MMMM DD Y`).subtract(1, action.key)
      return Object.assign({}, state, {
        date: moment(newDate).format("dddd, MMMM DD"),
        year: moment(newDate).year(),
      })
    case "SET_CURRENT_DATE_DATA":
      const dateData = state.data.filter(d => d.date === state.date + " " + state.year);
      return Object.assign({}, state, { currentDateData: dateData, currentInfo: {}})
    case "SET_CURRENT_TIME_SLOT":
      return Object.assign({}, state, {
        time: action.time,
        timeSlot: action.timeSlot,
      });
    case "SET_RESERVATION_DATA":
      const info = state.currentDateData.find(d => d.timeSlot === state.timeSlot);
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
