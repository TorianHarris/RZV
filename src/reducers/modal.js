import axios from 'axios';

export default (state = [], action) => {
  switch (action.type) {
    case "OPENMODAL":
      return Object.assign({}, state, { setOpen: true, time: action.time, title: action.title });
    case "CLOSEMODAL":
      return Object.assign({}, state, { setOpen: false });
    case "SUMBITFORM":
        axios.post('http://localhost:3001/api/putData', {
          name: 'jim',
          phoneNumber: 4043729059,
          date: '2019-10-15',
          timeSlot: '9am'
        }).then((response) => {
          console.log(response);
        });
        break;
    default:
      return state;
  }
};
