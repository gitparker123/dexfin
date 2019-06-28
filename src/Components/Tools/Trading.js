import React from 'react';
import { Grid, Button } from '@material-ui/core';

function Trading() {
  return (
    <Grid container className="advance-tool">
      <Grid item lg={2} />
      <Grid item lg={8}>
        <h1 className="advance-heading">Advance Trading Tools</h1>
        <p style={{ textAlign: 'center' }}>
          Cryptorio is a global leader in the blockchain revolution. We operate
          the premier U.S.-based blockchain trading platform, which is designed
          for customers who demand lightning-fast trade execution, dependable
          digital wallets, and industry-leading security practices.
        </p>

        <br />
        <Button
          size="large"
          className="advance-btn"
          style={{
            background: 'transparent',
            color: '#23cc89',
            fontWeight: 'bold'
          }}
        >
          {' '}
          APP DOWNLOAD →
        </Button>
      </Grid>
      <Grid item lg={2} />
    </Grid>
  );
}

export default Trading;
