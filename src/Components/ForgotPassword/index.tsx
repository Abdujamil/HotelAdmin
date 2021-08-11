import React from 'react';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';
import {
  Avatar,
  Button,
  TextField,
  Grid,
  Typography,
  Container,
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { forgotPassword } from '../../actions/user';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  white: {
    color: '#fff',
  },
}));

const ForgotPassword = (props: any) => {
  const classes = useStyles();

  const history = useHistory();

  const { forgotPasswordAction } = props;

  const validationSchema = Yup.object({
    email: Yup.string()
      .matches(
        /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm,
        'Please provide valid email'
      )
      .max(320, 'Maximum 320 symbols')
      .required('Email is required'),
  });

  const initialValues = {
    email: '',
  };

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Reset Password
        </Typography>
        <Formik
          initialValues={initialValues}
          enableReinitialize
          validationSchema={validationSchema}
          onSubmit={(values, actions) => {
            Promise.resolve(forgotPasswordAction(values.email)).then(() => {
              history.push('/');
            });
          }}
        >
          {(props) => (
            <form onSubmit={props.handleSubmit} className={classes.form}>
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoFocus
                value={props.values.email}
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                error={props.touched.email && Boolean(props.errors.email)}
                helperText={props.touched.email && props.errors.email}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Send link
              </Button>
            </form>
          )}
        </Formik>
        <Grid container>
          <Grid item xs>
            <Link to="/">Sign in</Link>
          </Grid>
          <Grid item>
            <Link to="/register">Register</Link>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    forgotPasswordAction: (email: string) => dispatch(forgotPassword(email)),
  };
};

export default connect(null, mapDispatchToProps)(ForgotPassword);
