import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { NavLink } from 'react-router-dom';
import NightImage from '../images/night.png';
import DisruptionImage from '../images/warning.png';
const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    marginTop: '64px'
  },
  drawerPaper: {
    boxShadow: 'none',
    border: '1px solid grey',
    borderRadius: 'unset',
    borderTop: 'unset'
  },
}));


const SideMenu = props => {
    const classes = useStyles();
    return (
      <div>
        <Paper className={`${classes.drawerPaper} paper`}>
          <List>
            {props.menuList.map((data, index) => (
             <NavLink className="list-item" to="/transportDetails" key={index} onClick={props.onClickMenuItem.bind(null, data)}> 
                <ListItem button className="list-text">
                  <ListItemText primary={data.name} />
                  { data.serviceTypes.map((d, i) => { 
                       if (d.name === 'Night' && i === 1)
                          return <div> <img src={NightImage} width="25px" alt="night" /> </div>
                      })
                   }
                   { data.lineStatuses.map((d, i) => { 
                       if (d.statusSeverity != 10 && i === 0)
                          return <div> <img src={DisruptionImage} width="22px" alt="night" /> </div>
                      })
                   }
                </ListItem>
              </NavLink>
            ))}
            <NavLink activeClass="active" className="list-item" to="/searchBike"> 
                <ListItem button className="list-text">
                  <ListItemText primary='Cycle Hire' />
                </ListItem>
              </NavLink>
          </List>
        </Paper>
      </div>
    );
}

export default SideMenu;