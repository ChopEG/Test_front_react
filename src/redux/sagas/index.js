import { takeEvery } from 'redux-saga';
import fetch from 'cross-fetch';
import { put, call } from 'redux-saga/effects';

import { formatResponse, constructSortQuery } from '../../utils/index';
import { HOST } from '../../constants';

import {
    requestProjectsSuccess,
    requestProjectsError
} from '../actions/index';

const isSuccessResponse = res => 200 <= res.status && res.status < 300;
const fetchData = async (...args) => {
    const response = await fetch(...args);
    const data = await response.json();
    if (!isSuccessResponse(response)) {
        const error = new Error(response.statusText);
        error.data = data;
        throw error;
    }

    return data;
};

function* watchFetchProjects() {
    yield takeEvery('FETCHED_PROJECTS', fetchProjectsRequest);
}

function* fetchProjectsRequest(action = null) {
    const query = action.payload ? constructSortQuery(action.payload) : '';
    try {
        const data = yield call(fetchData, `${HOST}/api/projects${query}`);
        yield put(requestProjectsSuccess(formatResponse(data)));
    } catch (error) {
        if(error.data) {
            const [errorData] = error.data.errors;
            yield put(requestProjectsError(Object.values(errorData)[0]));
        } else {
            yield put(requestProjectsError(error.message));
        }
    }
}

export {
    watchFetchProjects,
    fetchProjectsRequest
}