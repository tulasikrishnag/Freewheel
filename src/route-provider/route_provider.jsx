import React from 'react';
import { Switch, Route } from 'react-router';
import TransportDetails from '../components/transport_details.jsx';
import CycleHire from '../components/cycle_hire.jsx';

const RouteProvider = props => {
    return (
        <Switch>
            <Route exact path="/transportDetails" component={() => <TransportDetails {...props} />} />
            <Route exact path="/searchBike" component={CycleHire} />
        </Switch>
    )
}

export default RouteProvider;
