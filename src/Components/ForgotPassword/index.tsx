import React from 'react';
import { Link } from 'react-router-dom';
import {
  Avatar,
  Button,
  TextField,
  Typography,
  Container,
  Grid,
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
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

export default function ForgotPassword() {
  const classes = useStyles();

  const reset = (event: any, email: string) => {
    event.preventDefault();

    /*auth
      .sendPasswordResetEmail(email)
      .then((user) => {
        console.log(user);
        return user;
      })
      .catch((err) => {
        console.log(err);
        return err;
      });*/
  };

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Reset password
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={(event) => {
              reset(event, 'dusmatov9999@gmail.com');
            }}
          >
            Send
          </Button>

          <Grid container>
            <Grid item xs>
              <Link to="/">Sign in</Link>
            </Grid>
            <Grid item>
              <Link to="/register">Sign up</Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
