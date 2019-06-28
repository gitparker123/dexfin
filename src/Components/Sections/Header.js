import React from 'react';
import { Grid } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Animated } from 'react-animated-css';
export default function Header() {
  return (
    <Grid container style={{ marginBottom: '50px' }}>
      <Grid item lg={12} className="bg-overlay">
        <section className="main-section">
          <h1 className="main-heading">
            The world's leading cryptocurrency trading platform
          </h1>
          <p className="main-para">
            Cryptorio has integrated TradingView charts so you can enjoy a
            complete suite of tools to draw, annotation, download and share your
            charts.
          </p>
          <Animated
            animationIn="bounceIn"
            animationOut="zoomIn"
            isVisible={true}
          >
            <div className="main-div">
              <Button
                variant="contained"
                size="large"
                style={{
                  background: '#00b36b',
                  margin: '5px',
                  color: 'white',
                  fontWeight: 'bold'
                }}
              >
                {' '}
                Open a live account
              </Button>
              <Button
                variant="outlined"
                size="large"
                color="primary"
                style={{ fontWeight: 'bold' }}
              >
                {' '}
                Try free for 30 days
              </Button>
            </div>
          </Animated>
        </section>
      </Grid>
    </Grid>
  );
}
