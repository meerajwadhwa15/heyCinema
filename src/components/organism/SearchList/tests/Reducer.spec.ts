import Reducers, { initialState } from './../Reducers'
import { ERROR_MESSAGE } from './../../../../config/message'
import {
  listType,
  SetFetch,
  FetchErrorActionType,
  FetchSuccessActionType,
  ReducerAction,
} from './../type'

const setFetchAsLoading = {
  type: 'SET_FETCHING',
  isFetching: true,
}
const setFetchAsNotLoading = {
  type: 'SET_FETCHING',
  isFetching: false,
}

const fetchSuccessAction = {
  type: 'FETCH_MOVIES_SUCCESS',
  list: [],
}

const fetchErrorAction = {
  type: 'FETCH_MOVIES_ERROR',
  message: ERROR_MESSAGE,
}

describe('BeerList Reducers Unit test', function() {
  let state = {}
  test('should return the initial state', () => {
    expect(Reducers(initialState, { type: '' })).toEqual(initialState)
  })

  test('should handle "FETCH_BEERS" action', () => {
    expect(Reducers(initialState, fetchSuccessAction)).toEqual({
      ...initialState,
      list: [],
    })
  })

  test('should handle "SET_FETCHING" action with true', () => {
    expect(Reducers(initialState, setFetchAsLoading)).toEqual({
      ...initialState,
      isFetching: true,
    })
  })

  test('should handle "SET_FETCHING" action with false', () => {
    expect(Reducers(initialState, setFetchAsNotLoading)).toEqual({
      ...initialState,
      isFetching: false,
    })
  })

  test('should handle "FETCH_BEER_DETAIL_ERROR" action with true', () => {
    expect(Reducers(initialState, fetchErrorAction)).toEqual({
      ...initialState,
      errorMessage: ERROR_MESSAGE,
    })
  })
})
