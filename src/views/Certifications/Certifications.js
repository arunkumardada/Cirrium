import React from "react";
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import enviornmentalClaim from "assets/img/environmentalClaim.svg"

const useStyles = makeStyles({
    root: {
      minWidth: 100,
    },
    paper: {
      padding: '8px',
      textAlign: 'center',
      color: 'green',
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
});


export default function Certifications() {

  const classes = useStyles();

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <b>paper 1</b>
            <p>Audit</p>
            <small>downloadicon</small>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <b>paper 1</b>
            <p>Audit</p>
            <small>downloadicon</small>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <b>paper 1</b>
            <p>Audit</p>
            <small>downloadicon</small>
          </Paper>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <Grid container spacing={4}>
    <Grid item xs={6}>
        <Card className={classes.root}>
            <CardContent>
                <Typography variant="h5" component="h2">
                <img src={enviornmentalClaim}/> Environmental Claim
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                Random Text Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum
                Lorem EpsumLorem EpsumLorem Epsum Lorem EpsumLorem Epsum.
                </Typography>
            </CardContent>
            <CardActions>
                <Grid container spacing={1}>
                    <Grid container item xs={12} spacing={3}>
                        <FormRow />
                    </Grid>
                </Grid>
            </CardActions>
        </Card>
    </Grid>
    <Grid item xs={6}>
        <Card className={classes.root}>
            <CardContent>
                <Typography variant="h5" component="h2">
                <img src={enviornmentalClaim}/> Compliance Claim
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                Random Text Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum
                Lorem EpsumLorem EpsumLorem Epsum Lorem EpsumLorem Epsum.
                </Typography>
            </CardContent>
            <CardActions>
                <Grid container spacing={1}>
                    <Grid container item xs={12} spacing={3}>
                        <FormRow />
                    </Grid>
                </Grid>
            </CardActions>
        </Card>
    </Grid>
    </Grid>
  );
}
