import axios from 'axios';

export const openModal = () => {
  return { type: "OPENMODAL" };
}

export const closeModal = () => {
  return { type: "CLOSEMODAL" };
}

export const setCurrentTimeSlot = (timeSlot, time) => {
  return {
    type: "SET_CURRENT_TIME_SLOT",
    timeSlot,
    time
  };
}

export const sumbitForm = (name, phoneNumber, timeSlot) => {
  return function (dispatch) {
    dispatch({ type: "DATA_SUBMITTED" });
    axios.post('http://localhost:3001/api/putData', {
      name: name,
      phoneNumber: phoneNumber,
      // date: '2019-10-15',
      timeSlot: timeSlot
    })
      .then((response) => {
        if (response.data.success)
          dispatch({ type: 'DATA_SUMBIT_SUCCESS', res: response })
        else
          dispatch({ type: 'DATA_SUMBIT_FAIL', err: response.data.error })
      })
      .catch((error) => {
        dispatch({ type: 'DATA_SUMBIT_FAIL', err: error })
      });
  };
}

export const getData = () => {
  return function (dispatch) {
    fetch('http://localhost:3001/api/getData')
      .then((data) => data.json())
      .then((res) => dispatch({ type: "RECEIVED_DATA", data: res.data }))
  }
}
