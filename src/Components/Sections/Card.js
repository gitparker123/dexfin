import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import mark1 from '../../Assets/img/mark1.jpg';
import mark2 from '../../Assets/img/mark2.png';

const styles = theme => ({
  card: {
    maxWidth: 400,
    marginTop: '100px',
    boxShadow: ' 5px 5px 20px 5px lightgrey',
    [theme.breakpoints.down('sm')]: {
      marginTop: '0px',
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
    fontSize: 20
  },
  pos: {
    marginBottom: 12
  }
});

const cardContent = {
  padding:'0px'
}
const cardText = {
  paddingTop:'5px',
  paddingBottom:'5px',
  textAlign:'center',
  fontSize:'16px',
  fontWeight:'bold',
  color:'#22B14C'
}

const btnText = {
  paddingTop:'5px',
  paddingBottom:'5px',
  fontSize:'14px',
  fontWeight:'bold',
  color:'#22B14C'
}

function Cards(props) {
  const { classes } = props;

  return (
    <Card className={`${classes.card} `}>
      <CardContent style={cardContent}>
        {/* <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Buy Currency
        </Typography> */}
        <img
            src={props.type === 'mark1' ? mark1 : mark2}
            alt="box"
            width="100%"
            height="100%"
            className="box-image"
          />

        <Typography component="p" style={cardText}>
          NAKUP TOKENU PLATFORMY DEXFIN
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="large" variant="outlined" className="btn-card" style={btnText}>
          NAKUP DEXFIN TOKENU
        </Button>
      </CardActions>
    </Card>
  );
}

Cards.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Cards);
