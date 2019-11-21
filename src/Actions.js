import axios from "axios";
const baseUrl = process.env.baseURL || "http://localhost:3001"

export const openModal = modalType => {
  return { type: "OPENMODAL", modalType: modalType };
};

export const closeModal = () => {
  return { type: "CLOSEMODAL" };
};

export const changeDate = (operation, key) => dispatch => {
  dispatch({ 
    type: 'CHANGE_DATE',
    operation,
    key
   });
   dispatch({type: "SET_CURRENT_DATE_DATA"});
   dispatch({type: "SET_RESERVATION_DATA"});
}

export const setCurrentTimeSlot = (timeSlot, time) => dispatch => {
  dispatch({
    type: "SET_CURRENT_TIME_SLOT",
    timeSlot,
    time
  });
  dispatch({ type: "SET_RESERVATION_DATA" });
};

export const sumbitForm = (name, phoneNumber, timeSlot, date) => {
  return function (dispatch) {
    dispatch({ type: "DATA_SUBMITTED" });
    axios
      .post(baseUrl + "/api/putData", {
        name: name,
        phoneNumber: phoneNumber,
        timeSlot: timeSlot,
        date: date,
      })
      .then(response => {
        if (response.data.success) {
          dispatch(getData());
          dispatch(closeModal());
        } else dispatch({ type: "DATA_SUMBIT_FAIL", err: response.data.error });
      })
      .catch(error => {
        dispatch({ type: "DATA_SUMBIT_FAIL", err: error });
      });
  };
};

export const updateData = (id, name, phoneNumber) => {
  return function (dispatch) {
    axios
      .post(baseUrl + "/api/updateData", {
        id: id,
        update: {
          name: name,
          phoneNumber: phoneNumber
        }
      })
      .then(response => {
        if (response.data.success) {
          dispatch(getData());
          dispatch(closeModal());
        } else dispatch({ type: "DATA_SUMBIT_FAIL", err: response.data.error });
      })
      .catch(error => {
        dispatch({ type: "DATA_SUMBIT_FAIL", err: error });
      });
  };
};

export const deleteData = id => {
  return function (dispatch) {
    axios.delete(baseUrl + '/api/deleteData', {
      data: {
        id: id
      }
    })
      .then(response => {
        if (response.data.success) {
          dispatch(getData());
          dispatch(closeModal());
        } else dispatch({ type: "DATA_SUMBIT_FAIL", err: response.data.error });
      })
      .catch(error => {
        dispatch({ type: "DATA_SUMBIT_FAIL", err: error });
      });
  }
}

export const getData = () => {
  return function (dispatch) {
    fetch(baseUrl + "/api/getData")
      .then(data => data.json())
      .then(res => dispatch({ type: "RECEIVED_DATA", data: res.data }))
      .then(() => dispatch({ type: "SET_CURRENT_DATE_DATA" }))
      .then(() => dispatch({ type: "SET_RESERVATION_DATA" }));
  };
};
