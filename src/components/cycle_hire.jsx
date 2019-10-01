import React from 'react';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import * as transportNetworkActions from '../redux/actions/action_creators.js';

const StyledTableCell = withStyles(theme => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles(theme => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.background.default,
      },
    },
  }))(TableRow);

  const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      marginTop: theme.spacing(3),
      overflowX: 'auto',
    },
    table: {
      minWidth: 700,
    },
  }));
  

class CycleHire extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchText: '',
            searchResponse: null,
            showMessage: false
        }
    }

    componentDidUpdate(previProps) {
        if(this.props.data.searchResponse != previProps.data.searchResponse) {
            this.setState({searchResponse: this.props.data.searchResponse.data});
        }
    }

    handleOnChangeText = event => {
        this.setState({[event.target.name]: event.target.value, searchResponse: null })
    }

    handleOnClickButton = () => {
        const cachedData = this.props.data.searchedData.get(this.state.searchText);
        if(cachedData === undefined) {
            this.props.actions.searchCycle(this.state.searchText);
        } else {
            this.setState({searchResponse: cachedData})
        }
    }

    render() {
        const { searchResponse } = this.state;
        return (
            <React.Fragment>
                <div>
                    <Paper className="search-container">
                        <input className="searchTextBox" type="text" name="searchText" 
                               value={this.state.searchText} placeholder="Enter Search Text"
                               onChange={this.handleOnChangeText} />
                        <Button variant="contained" color="primary" className="search-button" onClick={this.handleOnClickButton}>
                            Search
                        </Button>
                        <Grid container className="search-data">
                            {searchResponse === null ? '' : searchResponse.length  === 0 ? <div> No bike points found for "{this.state.searchText}" </div> :
                                <Table >
                                    <TableHead >
                                        <TableRow>
                                            <StyledTableCell className="table-header" align="left"> Bike Id</StyledTableCell>
                                            <StyledTableCell className="table-header"  align="left">Name</StyledTableCell>
                                            <StyledTableCell className="table-header" align="left">Latitude</StyledTableCell>
                                            <StyledTableCell className="table-header" align="left">Longitude</StyledTableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody> 
                                        {this.state.searchResponse.map((data, index) => {
                                            return (
                                                <StyledTableRow>
                                                    <StyledTableCell align="left"> {data.id} </StyledTableCell>
                                                    <StyledTableCell align="left"> {data.commonName} </StyledTableCell>
                                                    <StyledTableCell align="left"> {data.lat} </StyledTableCell>
                                                    <StyledTableCell align="left"> {data.lon} </StyledTableCell>
                                                </StyledTableRow>
                                            )
                                        })}
                                    </TableBody>
                                </Table>
                            }
                        </Grid>
                    </Paper>
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.travelInfoReducer
    }
}

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(transportNetworkActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (CycleHire);