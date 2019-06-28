import React from 'react';
import { Grid, Button } from '@material-ui/core';

function AdvanceTool() {
  return (
    <Grid container className="advance-tool">
      <Grid item lg={2} />
      <Grid item lg={8}>
        <h1 className="advance-heading">Advance Trading Tools</h1>
        <p style={{ textAlign: 'center' }}>
          Cryptorio is a full-featured spot trading platform for major digital
          assets & cryptocurrencies, including{' '}
          <span style={{ fontWeight: 'bold' }}>
            {' '}
            Bitcoin, Ethereum, EOS, Lite coin, Ripple, NEO, Monero{' '}
          </span>{' '}
          and many more. Bitfinex offers leveraged margin trading through a
          peer-to-peer funding market, allowing users to securely trade with up
          to 3.3x leverage.
        </p>
        <br />
        <p style={{ textAlign: 'center' }}>
          We also boast a suite of order types to help traders take advantage of
          every situation.
        </p>
        <br />
        <Button
          size="large"
          variant="contained"
          className="advance-btn"
          style={{ background: '#23cc89', color: 'white', fontWeight: 'bold' }}
        >
          {' '}
          Learn More →
        </Button>
      </Grid>
      <Grid item lg={2} />
    </Grid>
  );
}

export default AdvanceTool;
