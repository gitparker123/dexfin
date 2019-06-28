import React from 'react';
import { Grid } from '@material-ui/core';

function TableHeading() {
  return (
    <Grid container className="advance-tool">
      <Grid item lg={2} />
      <Grid item lg={8}>
        <h1 className="advance-heading">Table Data Goes Here</h1>
        <p style={{ textAlign: 'center' }}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit
          facilis ipsam, inventore natus ut cupiditate perspiciatis
          exercitationem ratione totam quisquam. Molestias, at. In delectus modi
          perferendis aliquid corrupti, hic maiores?
        </p>
      </Grid>
      <Grid item lg={2} />
    </Grid>
  );
}

export default TableHeading;
