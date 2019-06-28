import React from 'react';
import Menu from './Menu';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import logo from '../../Assets/img/logo.png';
import Product from '.././Product/Product';
const styles = theme => ({
  mobile: {
    padding: theme.spacing.unit,
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },
    [theme.breakpoints.up('md')]: {
      display: 'none'
    },
    [theme.breakpoints.up('lg')]: {
      display: 'block'
    }
  },
  navbar: {
    background: '#fff',
    [theme.breakpoints.down('sm')]: {
      background: 'black'
    }
  },
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1,
    color: 'black'
  },
  stickToBottom: {
    width: '100%',
    position: 'fixed',
    marginTop: '200px',
    bottom: 0,
    zIndex: '99',
    background: '#303f4d',
    padding: '10px',
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'block'
    }
  }
});

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div>
      <AppBar
        position="static"
        style={{
          position: 'fixed',
          paddingTop: '15px',
          boxShadow: '1px #fff'
        }}
        className={classes.navbar}
      >
        <Toolbar>
          <Typography variant="h6" className={classes.grow}>
            <img src={logo} height="35px" width="130px" alt="logo" />
            <p
              className={classes.mobile}
              style={{
                marginLeft: '150px',
                marginTop: '-45px',
                fontSize: '12px',
                color: '#889fb6'
              }}
            >
              {' '}
              Last price BCT <br />{' '}
              <span
                style={{ fontSize: '15px', fontWeight: 'bold', color: 'black' }}
              >
                {' '}
                $ 24,242 909{' '}
                <span style={{ color: '#f76956', margin: '5px' }}>
                  {' '}
                  $2.45 ↓
                </span>{' '}
              </span>{' '}
            </p>
            <p
              className={classes.mobile}
              style={{
                marginLeft: '350px',
                marginTop: '-75px',
                fontSize: '12px',
                color: '#889fb6'
              }}
            >
              {' '}
              Last price BCT <br />{' '}
              <span
                style={{ fontSize: '15px', color: 'black', fontWeight: 'bold' }}
              >
                $ 24,242 909{' '}
                <span style={{ color: '#23cc89', margin: '5px' }}>
                  {' '}
                  $2.45 ↑
                </span>{' '}
              </span>{' '}
            </p>
          </Typography>

          <Product />

          <Button
            className={classes.mobile}
            style={{
              margin: '5px',
              color: '#000',
              opacity: '0.5',
              fontWeight: 'bold',
              fontSize: '15px'
            }}
          >
            News
          </Button>

          <Button
            className={classes.mobile}
            style={{
              margin: '5px',
              color: '#000',
              opacity: '0.5',
              fontWeight: 'bold',
              fontSize: '15px'
            }}
          >
            Signup | login
          </Button>

          <Button
            className={classes.mobile}
            variant="contained"
            style={{
              margin: '5px',
              background: '#23cc89',
              fontWeight: 'bold',
              color: 'white'
            }}
          >
            Web Trader
          </Button>

          <Menu />
        </Toolbar>
      </AppBar>
      <div className={classes.stickToBottom}>
        <Button
          variant="contained"
          style={{
            margin: 'auto',
            background: '#23cc89',
            fontWeight: 'bold',
            color: 'white',
            display: 'block'
          }}
        >
          Web Trader
        </Button>
      </div>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ButtonAppBar);
