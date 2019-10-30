import { AnyAction } from 'redux';
import { AxiosResponse, AxiosError } from 'axios';
import { FetchSuccessActionType, SetFetch, FetchErrorActionType } from './type';
import { ThunkDispatch } from 'redux-thunk';
import Fetch, { ServerProps } from './../../../libs/fetch';
import { ERROR_MESSAGE } from './../../../config/message';
import { SEARCH_MOVIES } from './../../../config/api';

export const isFetching = (isFetching: boolean): SetFetch => {
  return { type: 'SET_FETCHING', isFetching };
};

export const FetchBeers = (searchString: string) => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    const showLoader: SetFetch = isFetching(true);
    dispatch(showLoader);
    const serverProps: ServerProps = {
      url: SEARCH_MOVIES,
      params: {
        s: searchString
      }
    };

    return Fetch(serverProps)
      .then((response: AxiosResponse) => {
        const fetchBeersSuccess: FetchSuccessActionType = {
          type: 'FETCH_MOVIES_SUCCESS',
          list: response.data.Search || []
        };
        dispatch(fetchBeersSuccess);
      })
      .catch((err: AxiosError) => {
        const fetchBeersSuccess: FetchErrorActionType = {
          type: 'FETCH_MOVIES_ERROR',
          message: ERROR_MESSAGE
        };
        dispatch(fetchBeersSuccess);
      })
      .finally(() => {
        const hideLoader: SetFetch = isFetching(false);
        dispatch(hideLoader);
      });
  };
};
