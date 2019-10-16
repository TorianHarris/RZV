export const openModal = () => {
  return { type: "OPENMODAL" };
}

export const closeModal = () => {
  return { type: "CLOSEMODAL" };
}

export const setCurrentTimeSlot = (timeSlot, time) => {
  return {
    type: "SETCURRENTTIMESLOT",
    timeSlot,
    time
  };
}

export const sumbitForm = (name, phoneNumber) => {
  return {
    type: "SUMBITFORM",
    name,
    phoneNumber
  };
}

export const getData = () => {
  return { type: "GETDATA" }
}

