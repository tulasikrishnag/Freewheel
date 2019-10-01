import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

const AppLayout = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item xs={2}> {props.sideMenu} </Grid>
                <Grid item xs={10}> {props.router} </Grid>
            </Grid>
        </div>
    )
}

export default AppLayout;
