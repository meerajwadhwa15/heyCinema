import Reducers, { initialState } from './../Reducers';
import { ERROR_MESSAGE } from './../../../../config/message';
import {
  listType,
  SetFetch,
  FetchErrorActionType,
  FetchSuccessActionType,
  ReducerAction
} from './../type';
import { Types } from './../Constants';

const setFetchAsLoading = {
  type: Types.SET_FETCHING,
  isFetching: true
};
const setFetchAsNotLoading = {
  type: Types.SET_FETCHING,
  isFetching: false
};

const fetchSuccessAction = {
  type: Types.FETCH_MOVIES_SUCCESS,
  list: []
};

const fetchLoadMoreSuccessAction = {
  type: Types.FETCH_LOAD_MORE_MOVIES_SUCCESS,
  list: []
};

const fetchLoadMoreErrorAction = {
  type: Types.FETCH_LOAD_MORE_MOVIES_ERROR,
  noMoreRecords: false
};

const fetchErrorAction = {
  type: Types.FETCH_MOVIES_ERROR,
  message: ERROR_MESSAGE
};

describe('SearchList Reducers Unit test', function() {
  let state = {};
  test('should return the initial state', () => {
    expect(Reducers(initialState, { type: '' })).toEqual(initialState);
  });

  test('should handle "FETCH_MOVIES_SUCCESS" action', () => {
    expect(Reducers(initialState, fetchSuccessAction)).toEqual({
      ...initialState,
      list: []
    });
  });

  test('should handle "FETCH_LOAD_MORE_MOVIES_SUCCESS" action', () => {
    expect(Reducers(initialState, fetchLoadMoreSuccessAction)).toEqual({
      ...initialState,
      list: [],
      noMoreRecords: false
    });
  });

  test('should handle "FETCH_LOAD_MORE_MOVIES_ERROR" action', () => {
    expect(Reducers(initialState, fetchLoadMoreErrorAction)).toEqual({
      ...initialState,
      noMoreRecords: true
    });
  });

  test('should handle "SET_FETCHING" action with true', () => {
    expect(Reducers(initialState, setFetchAsLoading)).toEqual({
      ...initialState,
      isFetching: true
    });
  });

  test('should handle "SET_FETCHING" action with false', () => {
    expect(Reducers(initialState, setFetchAsNotLoading)).toEqual({
      ...initialState,
      isFetching: false
    });
  });
});
