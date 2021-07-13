import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import FormControl from '@material-ui/core/FormControl';
import blue from '@material-ui/core/colors/blue';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import '../css/login.css';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function SignUp() {
  const classes = useStyles();
  const [avatar, setAvatar] = useState('');
  const [values, setValues] = React.useState({
    name: '',
    email: '',
    password: '',
    cpassword: '',

    showPassword: false,
    showcPassword: false,
  });
  const handleAvatar = (e) => {
    var file = e.target.files[0];
    var reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setAvatar(reader.result);
      }

      console.log(avatar);
    };

    reader.readAsDataURL(e.target.files[0]);
  };
  const handler = (e) => {
    console.log(values);
    console.log(avatar);
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  };
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  const handleClickShowcPassword = () => {
    setValues({ ...values, showcPassword: !values.showcPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleMouseDowncPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className="paper">
        <Avatar className="avatar">
          <LockOutlinedIcon color="secondary" />
        </Avatar>
        <Typography component="h1" variant="h5">
          Register
        </Typography>
        <form className="form" noValidate>
          <input
            accept="image/*"
            className={classes.input}
            id="contained-button-file"
            type="file"
            name="avatar"
            onChange={handleAvatar}
          />
          <TextField
            className="field"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            value={values.name}
            name="name"
            label="name"
            name="name"
            onChange={handler}
            autoFocus
          />
          <TextField
            className="field"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            autoComplete="email"
            autoFocus
            value={values.email}
            name="email"
            onChange={handler}
          />
          <FormControl variant="outlined" className="input">
            <InputLabel htmlFor="outlined-adornment-password" className="field">
              Password
            </InputLabel>
            <OutlinedInput
              className="field"
              fullWidth
              id="outlined-adornment-password"
              type={values.showPassword ? 'text' : 'password'}
              value={values.password}
              name="password"
              onChange={handler}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              labelWidth={100}
            />
          </FormControl>
          <FormControl variant="outlined" className="input">
            <InputLabel htmlFor="outlined-adornment-password" className="field">
              Confirm Password
            </InputLabel>
            <OutlinedInput
              className="field"
              fullWidth
              id="outlined-adornment-password"
              type={values.showcPassword ? 'text' : 'password'}
              value={values.cpassword}
              name="cpassword"
              onChange={handler}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowcPassword}
                    onMouseDown={handleMouseDowncPassword}
                    edge="end"
                  >
                    {values.showcPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              labelWidth={100}
            />
          </FormControl>

          <Button
            type="submit"
            color="primary"
            fullWidth
            variant="contained"
            className="input"
          >
            Register
          </Button>
          <Grid container className="signBottom">
            <Grid item xs>
              <NavLink to="/login">Already have an account</NavLink>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
