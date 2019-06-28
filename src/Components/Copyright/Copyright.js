import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Grid } from '@material-ui/core';
const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,

    [theme.breakpoints.down('sm')]: {
      marginBottom: '50px'
    }
  }
});

function Copyright(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Grid container>
        <Grid item lg={1} />
        <Grid item lg={3} sm={6} xs={6} md={6}>
          <p className="copyright-text">
            {' '}
            © Copyright 2019. All rights reserved.{' '}
          </p>
        </Grid>
        <Grid item lg={4} />
        <Grid item lg={4} sm={6} xs={6} md={6}>
          <ul className="copyright">
            <li className="copyright-list">Terms & Condition </li>
            <li className="copyright-list"> For Partners </li>
            <li className="copyright-list">FAQ</li>
            <li className="copyright-list">Contact us</li>
          </ul>
        </Grid>
      </Grid>
    </Paper>
  );
}

Copyright.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Copyright);
