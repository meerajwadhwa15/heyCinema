import { Reducer } from 'redux';
import { ReducerState, ReducerAction } from './type';
import { Types } from './Constants';

export const initialState: ReducerState = {
  list: [],
  isFetching: false,
  errorMessage: '',
  noMoreRecords: false
};

const SearchListReducer: Reducer<ReducerState, ReducerAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case Types.SET_FETCHING:
      let list = action.isFetching === true ? [] : state.list;

      return {
        ...state,
        noMoreRecords: false,
        isFetching: action.isFetching,
        list
      };
    case Types.FETCH_LOAD_MORE_MOVIES_SUCCESS:
      return {
        ...state,
        errorMessage: '',
        list: state.list.concat(action.list) || []
      };
    case Types.FETCH_LOAD_MORE_MOVIES_ERROR:
      return { ...state, noMoreRecords: true };
    case 'FETCH_MOVIES_SUCCESS':
      return {
        ...state,
        errorMessage: '',
        noMoreRecords: false,
        list: action.list || []
      };
    case Types.FETCH_MOVIES_ERROR:
      return { ...state, errorMessage: action.message };
    default:
      return state;
  }
};

export default SearchListReducer;
