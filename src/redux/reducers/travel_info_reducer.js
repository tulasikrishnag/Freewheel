import * as actionTypes from '../actions/action_types.js';

const initialState = {
    isErrorOccurred: false,
    isLoading: true,
    transportServices: null,
    searchedData: new Map(),
    searchResponse: null
}

const travelInfoReducer = (state = initialState, action) => {

    switch(action.type) {
        case actionTypes.RESPONSE_TRANSPORT_SERVICES:
            return {
                ...state,
                transportServices: action.data,
                isLoading: false
            }
        
        case actionTypes.RESPONSE_SEARCH_CYCLE:
            state.searchedData.set(action.searchText, action.response); 
            return {
                ...state,
                searchResponse: action.response,
                searchedData: state.searchedData.set(action.response.searchText, action.response.data)
            }

        default:
            return state;
    }
}

export default travelInfoReducer;