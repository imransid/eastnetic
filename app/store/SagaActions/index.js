import {takeEvery, take, put} from 'redux-saga/effects';
import {REHYDRATE} from 'redux-persist/lib/constants';
import {
  API_DATA_FETCH,
  FETCH_DATA_SUCCESSFULLY,
  FETCH_DATA_FAILED,
} from '../ActionTypes';
import {select} from 'redux-saga/effects';
import {ProductsArr, BestSell} from '../../screens/Home/ProductsArr';
import axios from 'axios';

const _apiDataLoad = function* (action) {
  try {
    const uri = 'https://api.imgflip.com/get_memes';

    const responseData = yield axios
      .get(uri)
      .then(function (response) {
        let res = {
          status: true,
          data: response.data.data.memes,
          error: '',
        };
        return res;
      })
      .catch(e => {
        let res = {
          status: false,
          error: e,
          data: [],
        };
        return res;
      });

    if (responseData.status) {
      yield put({type: FETCH_DATA_SUCCESSFULLY, payload: responseData.data});
    } else {
    }
  } catch (err) {
    console.log(' Error in _apiDataLoad ', err);
  }
};

// watchers
function* rootSaga() {
  yield take(REHYDRATE);
  yield takeEvery(API_DATA_FETCH, _apiDataLoad);
}

export default rootSaga;
