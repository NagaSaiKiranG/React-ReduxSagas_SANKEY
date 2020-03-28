import { takeEvery, put, call, delay } from 'redux-saga/effects';
import { CHANGE_LANGUAGE, CHANGE_LANGUAGE_ASYNC, setSankeyData, GET_SANKEY_DATA, SET_ROW_INDEX, setRowDataIndexAsync } from '../actions';
import { SANKEY_DATA } from '../constants';
import { loadData } from '../services';

export default function *sntSaga() {
    yield takeEvery( CHANGE_LANGUAGE, changeLang)
    yield takeEvery( GET_SANKEY_DATA, getData)
    yield takeEvery( SET_ROW_INDEX, setIndexData)
}

function* changeLang(request) {
    //console.log("sagas  ",JSON.stringify(request));
    yield put({type : CHANGE_LANGUAGE_ASYNC, data :  request.data})
}

function *getData(request) {
    //console.log("get saankey data saga")
    yield delay(2000);
    const data = yield call(loadData.bind(null, request));
    console.log("getdata  ",data)
    yield put(setSankeyData(data));
}

function *setIndexData(request) {
    yield put(setRowDataIndexAsync(request.data))
}