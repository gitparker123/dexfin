import React from 'react';
import ServiceCard from '../Sections/ServiceCard';
import { Grid } from '@material-ui/core';
import Fade from 'react-reveal/Fade';

function DigitalCard() {
  return (
    <Grid container spacing={24}>
      <Grid item lg={2} sm={2} md={2} xs={12} />
      <Grid item lg={4} sm={4} md={4} xs={12}>
        <Fade delay={500} duration={500}>
          <ServiceCard
            title="Customizable interface"
            description="We've created the mobile tools you need for trading on the go.We've created the mobile tools you need for trading on the go."
          />
        </Fade>
      </Grid>
      <Grid item lg={4} sm={4} md={4} xs={12}>
        <Fade delay={800} duration={100}>
          {' '}
          <ServiceCard
            title="Margin trading"
            description="Organize your workspace according to your needs compose your layout, choose between themes, set up notifications and data preferences."
          />
        </Fade>
      </Grid>
      <Grid item lg={2} sm={2} md={2} xs={1} />
    </Grid>
  );
}

export default DigitalCard;
