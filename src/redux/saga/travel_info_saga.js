import { takeLatest, call, put } from 'redux-saga/effects';
import * as actionTypes from '../actions/action_types.js';

import { getTransportNetWorkServices, getSearchCycles } from '../../services/transportNetworkServices.js';

function* transportNetworkWorkerSaga() {
  const data = yield call(getTransportNetWorkServices);
  yield put({type: actionTypes.RESPONSE_TRANSPORT_SERVICES, data});
}

function* searchBykes(action) {
  const response = yield call(getSearchCycles, action);
  yield put({type: actionTypes.RESPONSE_SEARCH_CYCLE, response});
}

export function* transportNetworkWatcherSaga() {
  yield takeLatest(actionTypes.REQUEST_TRANSPORT_SERVICES, transportNetworkWorkerSaga);
  yield takeLatest(actionTypes.REQUEST_SEARCH_CYCLE, searchBykes);
}