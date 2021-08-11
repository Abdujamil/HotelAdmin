import React from 'react';
import {connect} from 'react-redux';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import {isLoader} from '../../selectors';
import useStyles from '../styles';

const Loader = (props: any) => {
  const classes = useStyles();
  const {isLoader} = props;

  return (
    <Backdrop className={classes.backdrop} open={isLoader}>
      <CircularProgress color="inherit"/>
    </Backdrop>
  );
}

const mapStateToProps = (state: any) => {
  return {
    isLoader: isLoader(state),
  }
};

export default connect(mapStateToProps, null)(Loader);
