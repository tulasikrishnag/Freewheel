import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    root: {
      padding: theme.spacing(3, 2),
      marginLeft: '20px',
    },
}));

const TransportDetails = props => {
    const { lineStatuses } = props.transportInfo;
    const classes = useStyles();
    return (
        <div>
            <Paper className={classes.root}>
                {props.transportInfo != '' ? <span> &gt;&gt; {props.transportInfo.name} </span> : ''}
                {lineStatuses &&
                    <div>
                        {lineStatuses.map((status, index) => {
                            return (
                                <div>
                                    {status.statusSeverity === 10 ? 
                                    <Typography variant="h5" component="h3" key={index}>
                                        No Service Disruptions
                                    </Typography>
                                    : index === 0 ?
                                    <Typography variant="h5" component="h3" key={index}>
                                        Service Currently Suffering Disruptions
                                    </Typography> : ''}

                                    {index === 0 ? <Typography component="p" key={index}>
                                        {status.reason}
                                    </Typography> : ''}
                                </div>
                            )
                        })}
                    </div>
                }
            </Paper>
        </div>
    )
}

export default TransportDetails;