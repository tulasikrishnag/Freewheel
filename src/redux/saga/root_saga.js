import { all } from 'redux-saga/effects';

import { transportNetworkWatcherSaga } from './travel_info_saga.js';


export default function* rootSaga() {
    yield all([
        transportNetworkWatcherSaga(),
    ])
}