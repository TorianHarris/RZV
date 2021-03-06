import React from "react";
import { connect } from "react-redux";
import { closeModal } from '../Actions';

import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

import Form from './Form';

const style = {
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  container: {
    backgroundColor: 'white',
    border: `3px solid purple`,
    padding: 4,
    outline: 'none'
  }
};

function InfoModal(props) {
  return (
    <div>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        style={style.modal}
        open={props.setOpen}
        onClose={props.onCloseClick}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={props.setOpen}>
          <div style={style.container}>
            <Form timeSlot={props.timeSlot} time={props.time} />
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    setOpen: state.modal.setOpen,
    timeSlot: state.modal.timeSlot,
    time: state.modal.time,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onCloseClick: () => {
      dispatch(closeModal());
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InfoModal);
