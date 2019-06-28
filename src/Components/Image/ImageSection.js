import React from 'react';
import { Grid } from '@material-ui/core';
import chart from '../../Assets/img/light.png';
import chart2 from '../../Assets/img/dark.png';
function ImageSection() {
  return (
    <Grid container className="image-section">
      <Grid item lg={2} />
      <Grid item lg={8}>
        <div className="chart-image">
          <img
            src={chart}
            alt="chart"
            width="100%"
            height="100%"
            className="chart-image"
          />
          <img
            src={chart2}
            alt="chart"
            width="100%"
            height="100%"
            className="img-top"
          />
        </div>
      </Grid>
      <Grid item lg={2} />
    </Grid>
  );
}

export default ImageSection;
