import React from "react";
import { connect } from "react-redux";

import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const style = {
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    backgroundColor: "white",
    border: "2px solid #000",
    //boxShadow: theme.shadows[5],
    padding: 4
  }
};

function InfoModal(props) {
  return (
    <div>
      <p>Click to get the full Modal experience!</p>
      <button type="button" onClick={props.onOpenClick}>
        Open Modal
      </button>
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
          <div style={style.paper}>
            <h2 id="simple-modal-title">Text in a modal</h2>
            <p id="simple-modal-description">
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    setOpen: state.modal.setOpen
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onOpenClick: () => {
      const action = { type: "OPENMODAL" };
      dispatch(action);
    },
    onCloseClick: () => {
      const action = { type: "CLOSEMODAL" };
      dispatch(action);
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InfoModal);
