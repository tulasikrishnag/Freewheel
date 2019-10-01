import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import travelInfoReducer from './travel_info_reducer.js';

export default combineReducers({
    travelInfoReducer,
    router: routerReducer
})