import React from 'react';
import { Grid } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Animated } from 'react-animated-css';
export default function Header() {
  return (
    <Grid container>
      <Grid item lg={12} className="bg-overlay">
        <section className="main-section">
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
                PREZENTACE DEXFIN
              </Button>
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
                DEXFIN TOKEN
              </Button>
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
                DEXFIN CERTIFIKAT
              </Button>
            </div>
          </Animated>
        </section>
      </Grid>
    </Grid>
  );
}
