import * as actionTypes from './action_types.js';

export const getServiceStatus = () => ({type: actionTypes.GET_SERVICE_STATUS})

export const requestTransportServices = () => {
    return {
        type: actionTypes.REQUEST_TRANSPORT_SERVICES
    }
}

export const searchCycle = searchText => {
    return {
        type: actionTypes.REQUEST_SEARCH_CYCLE,
        searchText
    }
}