import axios from 'axios';

const initialState = {
  timeSlot: '9am - 10am'
}

export default (state = initialState, action) => {
  switch (action.type) {
    case "SETCURRENTTIMESLOT":
      return Object.assign({}, state, { time: action.time, timeSlot: action.timeSlot });
    case "OPENMODAL":
      return Object.assign({}, state, { setOpen: true });
    case "CLOSEMODAL":
      return Object.assign({}, state, { setOpen: false });
    case "SUMBITFORM":
        axios.post('http://localhost:3001/api/putData', {
          name: action.name,
          phoneNumber: action.phoneNumber,
          // date: '2019-10-15',
          timeSlot: state.timeSlot
        }).then((response) => {
          console.log(response);
        });
        return state;
    default:
      return state;
  }
};
