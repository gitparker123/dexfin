import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { withStyles } from '@material-ui/core/styles';
import Product1 from '../../Assets/icons/Product1.PNG';
import Product2 from '../../Assets/icons/Product2.PNG';
import Product3 from '../../Assets/icons/Product3.PNG';
import Product5 from '../../Assets/icons/Product5.PNG';
import Product6 from '../../Assets/icons/Product6.PNG';
import Product7 from '../../Assets/icons/Product7.PNG';
import Divider from '@material-ui/core/Divider';
const styles = theme => ({
  mobile: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  listItem: {
    height: '70px',
    '&:hover': {
      background: 'transparent'
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  root: {
    display: 'flex'
  },
  paper: {
    marginRight: theme.spacing.unit * 2
  }
});

class Product extends React.Component {
  state = {
    open: false
  };

  handleToggle = () => {
    this.setState(state => ({ open: !state.open }));
  };

  handleClose = event => {
    if (this.anchorEl.contains(event.target)) {
      return;
    }

    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;

    return (
      <div className={classes.root}>
        <Button
          buttonRef={node => {
            this.anchorEl = node;
          }}
          aria-owns={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={this.handleToggle}
          className={classes.mobile}
          style={{
            margin: '5px',
            color: '#000',
            opacity: '0.5',
            fontWeight: 'bold',
            fontSize: '15px'
          }}
        >
          Products{' '}
          <i
            className="fas fa-angle-down"
            style={{
              marginLeft: '2.5px'
            }}
          />
        </Button>
        <Popper open={open} anchorEl={this.anchorEl} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              id="menu-list-grow"
              style={{
                transformOrigin:
                  placement === 'bottom' ? 'center top' : 'center bottom'
              }}
            >
              <Paper
                style={{
                  width: '900px',
                  marginTop: '15px',
                  padding: '25px',
                  height: '350px',
                  zIndex: '99'
                }}
              >
                <ClickAwayListener onClickAway={this.handleClose}>
                  <div>
                    <MenuList style={{ marginLeft: '80px' }}>
                      <MenuItem
                        onClick={this.handleClose}
                        className={classes.listItem}
                      >
                        <div>
                          <img
                            src={Product1}
                            alt="product1"
                            height="35px"
                            width="130px"
                          />
                          <p className="product-description">
                            Buy, Sell and Manage Digital Assests
                          </p>
                        </div>
                      </MenuItem>
                      <MenuItem
                        onClick={this.handleClose}
                        className={classes.listItem}
                      >
                        <div>
                          <img
                            src={Product6}
                            alt="product6"
                            height="35px"
                            width="90px"
                          />
                          <p className="product-description">
                            Token Offering Platform
                          </p>
                        </div>
                      </MenuItem>
                      {/* <MenuItem
                        onClick={this.handleClose}
                        className={classes.listItem}
                      >
                        <div>
                          <img
                            src={Product2}
                            alt="product2"
                            height="35px"
                            width="100px"
                          />
                          <p className="product-description">
                            Bitcoin and Llquld Assets Explorer
                          </p>
                        </div>
                      </MenuItem> */}
                    </MenuList>

                    <MenuList
                      style={{ marginTop: '-200px', marginLeft: '500px' }}
                    >
                      <MenuItem
                        onClick={this.handleClose}
                        className={classes.listItem}
                      >
                        <div>
                          <img
                            src={Product3}
                            alt="product3"
                            height="35px"
                            width="90px"
                          />
                          <p className="product-description">
                            Trading Platform for profile Traders
                          </p>
                        </div>
                      </MenuItem>
                      <MenuItem
                        onClick={this.handleClose}
                        className={classes.listItem}
                      >
                        <div>
                          <img
                            src={Product7}
                            alt="product7"
                            height="37px"
                            width="240px"
                          />
                          <p className="product-description">
                            Digital Assets multi-slg wallet
                          </p>
                        </div>
                      </MenuItem>
                      {/* <MenuItem
                        onClick={this.handleClose}
                        className={classes.listItem}
                      >
                        <div>
                          <img
                            src={Product5}
                            alt="product5"
                            height="35px"
                            width="100px"
                          />
                          <p className="product-description">
                            {' '}
                            Digital Assets mining pool
                          </p>
                        </div>
                      </MenuItem> */}
                    </MenuList>
                  </div>
                </ClickAwayListener>
                <Divider />
                <h6 className="our-products">Our Products</h6>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    );
  }
}

Product.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Product);
