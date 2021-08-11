import React from 'react';
import {connect} from 'react-redux';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {Link, useHistory } from 'react-router-dom';
import {
  Avatar,
  Button,
  TextField,
  Grid,
  Typography,
  Container,
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {authorizeUser} from '../../actions/user';
import {makeStyles} from '@material-ui/core/styles';

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

const Login = (props: any) => {
  const classes = useStyles();

  const history = useHistory();

  const {authorizeUserAction} = props;

  const validationSchema = Yup.object({
    email: Yup.string().matches(/^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm, 'Please provide valid email').max(320, 'Maximum 320 symbols').required('Email is required'),
    password: Yup.string().min(8, 'Minimum 8 symbols').required('Password is required'),
  });

  const initialValues = {
    email: '',
    password: '',
  };

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon/>
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign In
        </Typography>
        <Formik
          initialValues={initialValues}
          enableReinitialize
          validationSchema={validationSchema}
          onSubmit={(values, actions) => {
            Promise.resolve(authorizeUserAction(values.email, values.password)).then(() => {
              history.push('/home');
            });
          }}
        >
          {props => (
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
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="password"
                label="Password"
                type="password"
                value={props.values.password}
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                error={props.touched.password && Boolean(props.errors.password)}
                helperText={props.touched.password && props.errors.password}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign In
              </Button>
            </form>
          )}
        </Formik>
        <Grid container>
          <Grid item xs>
            <Link to="/forgotPassword">Forgot password?</Link>
          </Grid>
          <Grid item>
            <Link to="/register">Register</Link>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    authorizeUserAction: (email: string, password: string) => dispatch(authorizeUser(email, password)),
  }
};

export default connect(null, mapDispatchToProps)(Login);
