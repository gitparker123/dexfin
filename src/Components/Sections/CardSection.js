import React from 'react';
import { Grid } from '@material-ui/core';
import Cards from './Card';

function CardSection() {
  return (
    <Grid container justify="center" spacing={40}>
      <Grid item lg={1} />
      <Grid item lg={3} md={4} sm={3} xs={12}>
        <Cards type={'mark1'}/>
      </Grid>
      <Grid item lg={3} md={4} sm={3} xs={12}>
        <Cards type={'mark2'} />
      </Grid>
      <Grid item lg={3} md={4} sm={3} xs={12}>
        <Cards type={'mark2'} />
      </Grid>
      <Grid item lg={1} />
    </Grid>
  );
}

export default CardSection;
