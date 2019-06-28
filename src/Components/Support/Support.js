import React from 'react';
import { Grid } from '@material-ui/core';
import icon9 from '../../Assets/icons/icon9.png';
import icon11 from '../../Assets/icons/icon11.png';
import icon3 from '../../Assets/icons/icon3.png';
function Support() {
  return (
    <section style={{ backgroundColor: '#4685ff' }}>
      <div className="support-section">
        <Grid container spacing={40}>
          <Grid item lg={4} xs={12}>
            {' '}
            <img
              src={icon9}
              alt="icon"
              width="50px"
              height="50px"
              className="image-center"
            />{' '}
            <h4 className="support-text">24-Hour Support</h4>
          </Grid>
          <Grid item lg={4} xs={12}>
            <img
              src={icon11}
              alt="icon"
              width="50px"
              height="50px"
              className="image-center"
            />
            <h4 className="support-text">Growing functionality</h4>
          </Grid>
          <Grid item lg={4} xs={12}>
            <img
              src={icon3}
              alt="icon"
              width="50px"
              height="50px"
              className="image-center"
            />
            <h4 className="support-text">Unlimited deposits & withdrawals</h4>
          </Grid>
        </Grid>
      </div>
    </section>
  );
}
export default Support;
