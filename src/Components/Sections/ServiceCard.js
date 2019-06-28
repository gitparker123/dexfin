import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import serviceIcon from '../../Assets/icons/icon4.png';

const styles = theme => ({
  card: {
    maxWidth: 400,
    boxShadow: ' 5px 5px 20px 5px lightgrey',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 'auto',
      marginRight: 'auto',
      display: 'block',
      width: '100%'
    }
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 20,
    marginTop: '10px'
  },
  pos: {
    marginBottom: 12
  }
});

function ServiceCard(props) {
  const { classes } = props;

  return (
    <Card className={`${classes.card} 'card-root' `}>
      <CardContent>
        <img src={serviceIcon} alt="props-icons" />
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {props.title}
        </Typography>

        <Typography component="p">{props.description}</Typography>
      </CardContent>
    </Card>
  );
}

ServiceCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ServiceCard);
