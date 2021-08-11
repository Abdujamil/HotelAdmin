import React from 'react';
import {connect} from 'react-redux';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import {isAlert, getSuccessMessage} from '../../selectors';
import {hideAlert} from '../../actions/app';

function Alert(props: AlertProps) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const AlertSuccess = (props: any) => {
    const {isAlert, hideAlertAction, successMessage} = props;

    return (
        <Snackbar open={isAlert} onClose={hideAlertAction}>
            <Alert onClose={hideAlertAction} severity="success">
                <div dangerouslySetInnerHTML={{__html: successMessage}}></div>
            </Alert>
        </Snackbar>
    );
}

const mapStateToProps = (state: any) => {
    return {
        isAlert: isAlert(state),
        successMessage: getSuccessMessage(state),
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        hideAlertAction: () => dispatch(hideAlert()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AlertSuccess);
