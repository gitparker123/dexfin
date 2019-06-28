import React from 'react';
import { Grid } from '@material-ui/core';
import image from '../../Assets/img/light.png';
import Fade from 'react-reveal/Fade';

function ImageSection2() {
  return (
    <Grid container style={{ marginBottom: '50px' }} className="section-bg">
      <Grid item lg={2}>
        {' '}
      </Grid>
      <Grid item lg={8}>
        <section className="main-section">
          <Fade left>
            <img
              src={image}
              alt="logo"
              width="100%"
              height="100%"
              className="section-bg-image"
            />
          </Fade>
        </section>
      </Grid>
      <Grid item lg={2}>
        {' '}
      </Grid>
    </Grid>
  );
}
export default ImageSection2;
