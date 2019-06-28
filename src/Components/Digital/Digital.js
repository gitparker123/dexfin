import React from 'react';
import { Grid } from '@material-ui/core';

function Digital() {
  return (
    <Grid container className="digital">
      <Grid item lg={2} md={2} sm={2} />
      <Grid item lg={8} md={8} sm={8} className="plus-image">
        <h1 className="digital-heading">
          The most trusted digital currency platform
        </h1>
        <p style={{ textAlign: 'center' }}>
          Organize your workspace according to your needs: compose your layout,
          choose between themes, set up notifications and data preferences.
        </p>
      </Grid>
      <Grid item lg={2} md={2} sm={2} />
    </Grid>
  );
}

export default Digital;
