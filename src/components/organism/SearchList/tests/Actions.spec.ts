import { isFetching, FetchSearchList, LoadMoreSearchList } from './../Action';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import { ERROR_MESSAGE } from './../../../../config/message';
import {
  listType,
  SetFetch,
  FetchErrorActionType,
  FetchSuccessActionType
} from './../type';
import { SEARCH_MOVIES } from './../../../../config/api';
import { Types } from './../Constants';

const mock = new MockAdapter(axios);

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const list: listType[] = [
  {
    imdbID: '1',
    Title: 'Title 1',
    Year: '2019',
    Type: 'Type 1',
    Poster: 'Poster_1'
  },
  {
    imdbID: '2',
    Title: 'Title 2',
    Year: '2020',
    Type: 'Type 2',
    Poster: 'Poster_2'
  }
];

const setFetchAsLoading: SetFetch = { type: 'SET_FETCHING', isFetching: true };
const setFetchAsNotLoading: SetFetch = {
  type: Types.SET_FETCHING,
  isFetching: false
};

describe('SearchList Action Unit test', function() {
  test('should create an action with correct type isFetching', () => {
    expect(isFetching(true)).toEqual(setFetchAsLoading);
    expect(isFetching(false)).toEqual(setFetchAsNotLoading);
  });

  it('should create an action with correct type SearchList `HAPPY SCENARIO`', () => {
    mock.onGet(SEARCH_MOVIES).reply(200, { Response: 'True', Search: list });
    const expectedActions: FetchSuccessActionType = {
      type: Types.FETCH_MOVIES_SUCCESS,
      list: list
    };

    const store = mockStore({ list: [] });

    return store.dispatch(FetchSearchList('star', 1)).then(() => {
      const listOfActions = store.getActions();
      expect(listOfActions[0]).toEqual(setFetchAsLoading);
      expect(listOfActions[1]).toEqual(expectedActions);
      expect(listOfActions[2]).toEqual(setFetchAsNotLoading);
    });
  });

  it('should create an action with correct type SearchList `ERROR SCENARIO`', () => {
    mock.onGet(SEARCH_MOVIES).reply(200, { Response: 'False' });

    const expectedActions: FetchErrorActionType = {
      type: Types.FETCH_MOVIES_ERROR,
      message: ERROR_MESSAGE
    };

    const store = mockStore({ list: [] });

    return store.dispatch(FetchSearchList('star', 2)).then(() => {
      const listOfActions = store.getActions();
      expect(listOfActions[0]).toEqual(setFetchAsLoading);
      expect(listOfActions[1]).toEqual(expectedActions);
      expect(listOfActions[2]).toEqual(setFetchAsNotLoading);
    });
  });

  it('should create an action with correct type LoadMoreList `HAPPY SCENARIO`', () => {
    mock.onGet(SEARCH_MOVIES).reply(200, { Response: 'True', Search: list });
    const expectedActions: FetchSuccessActionType = {
      type: Types.FETCH_LOAD_MORE_MOVIES_SUCCESS,
      list: list
    };

    const store = mockStore({ list: [] });

    return store.dispatch(LoadMoreSearchList('star', 2)).then(() => {
      const listOfActions = store.getActions();
      expect(listOfActions[0]).toEqual(expectedActions);
    });
  });

  it('should create an action with correct type LoadMoreList `ERROR SCENARIO`', () => {
    mock.onGet(SEARCH_MOVIES).reply(200, { Response: 'False' });

    const expectedActions: FetchErrorActionType = {
      type: Types.FETCH_LOAD_MORE_MOVIES_ERROR,
      message: ERROR_MESSAGE
    };

    const store = mockStore({ list: [] });

    return store.dispatch(LoadMoreSearchList('star', 2)).then(() => {
      const listOfActions = store.getActions();
      expect(listOfActions[0]).toEqual(expectedActions);
    });
  });
});
