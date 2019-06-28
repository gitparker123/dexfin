import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  title:{
    textAlign:'center'
  },
  content:{
    textAlign:'center'
  },
}

function AboutUs(props) {
  const { classes } = props;

  return (
    <div id="about">
      <h2 style={styles.title}>About Us</h2>
      <p style={styles.content}>
        Here is About us page.
      </p>
    </div>
  );
}

AboutUs.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AboutUs);
