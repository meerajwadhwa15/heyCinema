import { AnyAction } from 'redux';
import { AxiosResponse, AxiosError } from 'axios';
import { FetchSuccessActionType, SetFetch, FetchErrorActionType } from './type';
import { ThunkDispatch } from 'redux-thunk';
import Fetch, { ServerProps } from './../../../libs/fetch';
import { ERROR_MESSAGE } from './../../../config/message';
import { SEARCH_MOVIES } from './../../../config/api';
import { Types } from './Constants';

export const isFetching = (isFetching: boolean): SetFetch => {
  return { type: Types.SET_FETCHING, isFetching };
};

export const FetchSearchList = (searchString: string, pageNumber: number) => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    const showLoader: SetFetch = isFetching(true);
    dispatch(showLoader);
    const serverProps: ServerProps = {
      url: SEARCH_MOVIES,
      params: {
        s: searchString,
        page: pageNumber
      }
    };

    return Fetch(serverProps)
      .then((response: AxiosResponse) => {
        if (response.data.Response !== 'True') {
          throw 'No Record Found';
        }
        const fetchSuccess: FetchSuccessActionType = {
          type: Types.FETCH_MOVIES_SUCCESS,
          list: response.data.Search || []
        };
        dispatch(fetchSuccess);
      })
      .catch((err: AxiosError) => {
        const fetchError: FetchErrorActionType = {
          type: Types.FETCH_MOVIES_ERROR,
          message: ERROR_MESSAGE
        };
        dispatch(fetchError);
      })
      .finally(() => {
        const hideLoader: SetFetch = isFetching(false);
        dispatch(hideLoader);
      });
  };
};

export const LoadMoreSearchList = (
  searchString: string,
  pageNumber: number
) => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    const serverProps: ServerProps = {
      url: SEARCH_MOVIES,
      params: {
        s: searchString,
        page: pageNumber
      }
    };

    return Fetch(serverProps)
      .then((response: AxiosResponse) => {
        if (response.data.Response !== 'True') {
          throw 'No Record Found';
        }
        const fetchSuccess: FetchSuccessActionType = {
          type: Types.FETCH_LOAD_MORE_MOVIES_SUCCESS,
          list: response.data.Search || []
        };
        dispatch(fetchSuccess);
      })
      .catch((err: AxiosError) => {
        const fetchError: FetchErrorActionType = {
          type: Types.FETCH_LOAD_MORE_MOVIES_ERROR,
          message: ERROR_MESSAGE
        };
        dispatch(fetchError);
      });
  };
};
