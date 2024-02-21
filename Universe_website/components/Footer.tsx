import React from 'react';
import { makeStyles } from '@mui/styles';
import { Button } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  footer: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100%',
    padding: '40px 20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  linkContainer: {
    marginBottom: '20px',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  link: {
    textDecoration: 'none',
    margin: '0 10px',
    textTransform: 'uppercase',
    fontSize: '14px',
    fontFamily: 'IRANYekanX-ExtraBlack',
    color: 'black', 
  },
  lowSaturation: {
    color: 'black', 
    fontSize: '12px',
    fontFamily: 'IRANYekanX-Bold',
  },
  lowSaturationRight: {
    color: 'rgba(0, 0, 0, 0.5)', 
    fontSize: '12px',
    fontFamily: 'IRANYekanX-Bold',
    marginLeft: 'auto', 
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <div className={classes.linkContainer}>
        <Button className={classes.link}>For Designers</Button>
        <Button className={classes.link}>Hire Talent</Button>
        <Button className={classes.link}>Inspiration</Button>
        <Button className={classes.link}>Advertising</Button>
        <Button className={classes.link}>Blog</Button>
        <Button className={classes.link}>About</Button>
        <Button className={classes.link}>Careers</Button>
        <Button className={classes.link}>Support</Button>
      </div>
      <div className={classes.linkContainer}>
        <Button className={`${classes.link} ${classes.lowSaturation}`}>Jobs</Button>
        <Button className={`${classes.link} ${classes.lowSaturation}`}>Designers</Button>
        <Button className={`${classes.link} ${classes.lowSaturation}`}>Freelancer</Button>
        <Button className={`${classes.link} ${classes.lowSaturation}`}>Tags</Button>
        <Button className={`${classes.link} ${classes.lowSaturation}`}>Places</Button>
        <Button className={`${classes.link} ${classes.lowSaturation}`}>Resources</Button>
      </div>
      <div className={classes.linkContainer}>
        <Button className={`${classes.link} ${classes.lowSaturation} ${classes.lowSaturationRight}`}>© 2024 Dribbble</Button>
        <Button className={`${classes.link} ${classes.lowSaturation} ${classes.lowSaturationRight}`}>Terms</Button>
        <Button className={`${classes.link} ${classes.lowSaturation} ${classes.lowSaturationRight}`}>Privacy</Button>
        <Button className={`${classes.link} ${classes.lowSaturation} ${classes.lowSaturationRight}`}>Cookies</Button>
      </div>
    </footer>
  );
};

export default Footer;
