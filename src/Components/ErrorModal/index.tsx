import React from 'react';
import {connect} from 'react-redux';
import {Fade, Modal, Backdrop} from '@material-ui/core';
import {Alert, AlertTitle} from '@material-ui/lab';
import useStyles from '../styles';
import {isError, getErrorMessage} from '../../selectors';
import {hideError} from '../../actions/app';

const ErrorModal = (props: any) => {
  const classes = useStyles();
  const {isError, errorMessage, hideErrorAction} = props;
  const message = errorMessage ? errorMessage : 'Something has gone terribly wrong. Please try again.';

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={isError}
      onClose={hideErrorAction}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={isError}>
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          <div dangerouslySetInnerHTML={{__html: message}}></div>
        </Alert>
      </Fade>
    </Modal>
  );
};

const mapStateToProps = (state: any) => {
  return {
    isError: isError(state),
    errorMessage: getErrorMessage(state),
  }
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    hideErrorAction: () => dispatch(hideError()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ErrorModal);

