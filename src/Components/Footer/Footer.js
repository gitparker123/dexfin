import React from 'react';
import { Grid } from '@material-ui/core';
import { List, ListItem } from '@material-ui/core';
import logoSymbol from '../../Assets/img/logo-symbol.png';
function Footer() {
  return (
    <Grid container style={{ background: '#4685ff' }}>
      <Grid item lg={1} />
      <Grid item lg={2}>
        <img
          src={logoSymbol}
          alt="logosymble"
          height="100px"
          width="100px"
          className="footer-img"
        />
      </Grid>
      <Grid item lg={2} md={2} sm={2}>
        <List>
          <ListItem style={{ color: 'white', fontWeight: 'bold' }}>
            COMPANY
          </ListItem>
          <ListItem style={{ color: 'white' }}>Become a Vendor</ListItem>
          <ListItem style={{ color: 'white' }}>Affiliates</ListItem>
          <ListItem style={{ color: 'white' }}>Our Blog</ListItem>
          <ListItem style={{ color: 'white' }}>Privacy Policy</ListItem>
        </List>
      </Grid>
      <Grid item lg={3} md={3} sm={3}>
        <List>
          <ListItem style={{ color: 'white', fontWeight: 'bold' }}>
            CONTACT
          </ListItem>
          <ListItem style={{ color: 'white' }}>
            {' '}
            Support: support@yoursite.com
          </ListItem>
          <ListItem style={{ color: 'white' }}>
            Listing Application: listing@yoursite.com
          </ListItem>
          <ListItem style={{ color: 'white' }}>
            Twitter: twitter@yourname
          </ListItem>
          <ListItem style={{ color: 'white' }}>
            <i className="fab fa-facebook-f icon-style" />{' '}
            <i className="fab fa-twitter icon-style " />{' '}
            <i className="fab fa-google icon-style " />{' '}
            <i className="fab fa-skype icon-style " />
          </ListItem>
        </List>
      </Grid>
      <Grid item lg={4} md={4} sm={4}>
        <List>
          <ListItem style={{ color: 'white', fontWeight: 'bold' }}>
            {' '}
            APP DOWNLOAD{' '}
          </ListItem>
          <ListItem style={{ color: 'white' }}>
            Volume (24H) 5,973.12043195 BTC ≈ 40,647,084.54 USD
          </ListItem>
          <ListItem style={{ color: 'white' }}>
            {' '}
            2018-09-22 | 09:21:46 (UTC+8) 395ms
          </ListItem>
        </List>
      </Grid>
    </Grid>
  );
}

export default Footer;
