import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SideMenu from '../core/side_menu.jsx';
import AppLayout from '../core/app_layout.jsx';
import CircularProgress from '@material-ui/core/CircularProgress';
import RouteProvider from '../route-provider/route_provider.jsx';
import * as transportNetworkActions from '../redux/actions/action_creators.js';

class TransportNetwork extends React.PureComponent {
    constructor(props){
        super(props);
        this.state = {
            transportInfo: ''
        }
    }

    componentDidMount(){
        this.props.actions.requestTransportServices();
    }

    handleOnClickMenuItem = (data) => {
        this.setState({transportInfo: data});
    }

    render() {
        const { transportServices } = this.props.data;
        return (
            <React.Fragment>
                {this.props.data.isLoading ? 
                    <div className="loading-icon"><CircularProgress /></div> :
                    <div>
                        <AppLayout 
                            sideMenu={<SideMenu menuList={transportServices} onClickMenuItem={this.handleOnClickMenuItem} />} 
                            router={<RouteProvider transportInfo={this.state.transportInfo} />}/>
                    </div>
                }
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

export default connect(mapStateToProps, mapDispatchToProps)(TransportNetwork);