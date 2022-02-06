import {
  API_DATA_FETCH,
  FETCH_DATA_SUCCESSFULLY,
  FETCH_DATA_FAILED,
} from '../ActionTypes';

const initialState = {
  loading: true,
  dataLoaded: [],
};

const LoopReducer = (state = initialState, action) => {
  switch (action.type) {
    case API_DATA_FETCH:
      return {
        ...state,
        loading: true,
      };
    case FETCH_DATA_SUCCESSFULLY:
      return {
        ...state,
        loading: false,
        dataLoaded: action.payload,
      };
    case FETCH_DATA_FAILED:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

export default LoopReducer;
