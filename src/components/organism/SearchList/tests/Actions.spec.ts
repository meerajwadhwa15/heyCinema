import { isFetching, FetchBeers } from './../Action'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import MockAdapter from 'axios-mock-adapter'
import axios from 'axios'
import { ERROR_MESSAGE } from './../../../../config/message'
import {
  listType,
  SetFetch,
  FetchErrorActionType,
  FetchSuccessActionType,
} from './../type'
import { BEER_LIST } from './../../../../config/api'

const mock = new MockAdapter(axios)

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

const list: listType[] = [
  {
    id: 1,
    image_url: 'https://images.punkapi.com/v2/keg.png',
    name: 'Buzz',
    tagline: 'A Real Bitter Experience.',
    volume: {
      value: 20,
      unit: 'litres',
    },
  },
  {
    id: 2,
    image_url: 'https://images.punkapi.com/v2/keg.png',
    name: 'Buzz 2',
    tagline: 'A Real Bitter Experience.',
    volume: {
      value: 20,
      unit: 'litres',
    },
  },
]

const setFetchAsLoading: SetFetch = { type: 'SET_FETCHING', isFetching: true }
const setFetchAsNotLoading: SetFetch = {
  type: 'SET_FETCHING',
  isFetching: false,
}

describe('BeerList Action Unit test', function() {
  test('should create an action with correct type isFetching', () => {
    expect(isFetching(true)).toEqual(setFetchAsLoading)
    expect(isFetching(false)).toEqual(setFetchAsNotLoading)
  })

  it('should create an action with correct type FetchBeers `HAPPY SCENARIO`', () => {
    mock.onGet(BEER_LIST).reply(200, list)

    const expectedActions: FetchSuccessActionType = {
      type: 'FETCH_MOVIES_SUCCESS',
      list: list,
    }

    const store = mockStore({ list: list })

    return store.dispatch(FetchBeers()).then(() => {
      const listOfActions = store.getActions()
      expect(listOfActions[0]).toEqual(setFetchAsLoading)
      expect(listOfActions[1]).toEqual(expectedActions)
      expect(listOfActions[2]).toEqual(setFetchAsNotLoading)
    })
  })

  it('should create an action with correct type FetchBeers `ERROR SCENARIO`', () => {
    mock.onGet('https://api.punkapi.com/v2/beers').reply(400)

    const expectedActions: FetchErrorActionType = {
      type: 'FETCH_MOVIES_ERROR',
      message: ERROR_MESSAGE,
    }

    const store = mockStore({ list: list })

    return store.dispatch(FetchBeers()).then(() => {
      const listOfActions = store.getActions()
      expect(listOfActions[0]).toEqual(setFetchAsLoading)
      expect(listOfActions[1]).toEqual(expectedActions)
      expect(listOfActions[2]).toEqual(setFetchAsNotLoading)
    })
  })
})
