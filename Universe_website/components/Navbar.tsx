import React from 'react';
import Link from 'next/link';
import { AppBar, Toolbar, Button, TextField, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
    color: 'black',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftSection: {
    display: 'flex',
    alignItems: 'center',
  },
  rightSection: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    flexGrow: 1,
    textAlign: 'center',
    '& img': {
      width: '40px', 
    },
  },
  searchField: {
    color: 'black',
    backgroundColor: 'transparent',
    border: 'none',
    borderRadius: '50px', 
    padding: '10px 20px',
    display: 'flex',
    alignItems: 'center',
    '& svg': {
      fontSize: '20px',
    },
    fontFamily: 'IRANYekanXFaNum-Bold',
  },
  button: {
    marginRight: '8px',
    color: 'black',
    fontFamily: 'IRANYekanXFaNum-Bold',
  },
  signUpButton: {
    backgroundColor: 'black',
    color: 'white',
    borderRadius: '20px',
    padding: '10px 20px',
    '&:hover': {
      backgroundColor: '#333',
    },
    fontFamily: 'IRANYekanXFaNum-Bold',
  },
}));

const Navbar: React.FC = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <div className={classes.leftSection}>
          <Link href="/pro">
            <Button className={classes.button}>Go Pro</Button>
          </Link>
          <Link href="/jobs">
            <Button className={classes.button}>Jobs</Button>
          </Link>
          <Link href="/find designers">
            <Button className={classes.button}>Find designer</Button>
          </Link>
          <Link href="/inspiration" >
            <Button className={classes.button}>Inspiration</Button>
          </Link>
          <Link href="/Courses" >
            <Button className={classes.button}>Courses</Button>
          </Link>
        </div>
        <div className={classes.logo}>
          <img src="هرچی دوست داشتید بزارید" alt="logo" />
        </div>
        <div className={classes.rightSection}>
          <TextField
            className={classes.searchField}
            variant="outlined"
            placeholder="Search"
            InputProps={{
              endAdornment: <SearchIcon />,
            }}
          />
          <Link href="/log in ">
            <Button className={classes.button}>Log In</Button>
          </Link>
          <Link href="/signup">
            <Button variant="contained" className={`${classes.button} ${classes.signUpButton}`}>
              Sign Up
            </Button>
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
