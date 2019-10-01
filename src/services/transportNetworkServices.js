import Axios from 'axios';

export const getTransportNetWorkServices = () => {
    return Axios.get('https://api.tfl.gov.uk/Line/Mode/tube,overground,dlr/Status?detail=true')
                .then((response) => {
                    return response.data;
                })
                .catch((exception) => {
                    console.log(exception)
                })
}

export const getSearchCycles = (action) => {
    return Axios.get(`https://api.tfl.gov.uk/BikePoint/Search?query=${action.searchText}`)
                .then((response) => {
                    return {data: response.data, searchText: action.searchText};
                })
                .catch((exception) => {
                    console.log(exception);
                })

}