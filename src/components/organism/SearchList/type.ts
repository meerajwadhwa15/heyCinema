export type listType = {
  imdbID: string;
  Title: string;
  Year: string;
  Type: string;
  Poster: string;
};

export interface ComponentProps {}

export interface ComponentState {
  searchString: string;
  page: number;
}

export interface ReducerState {
  list: listType[];
  isFetching: boolean;
  errorMessage: string;
  noMoreRecords: boolean;
}

export interface DispatchProps {
  fetchSearchListAction: (searchString: string, page: number) => void;
  loadMoreSearchListAction: (searchString: string, page: number) => void;
}

export interface SearchListReducerType {
  SearchListReducer: ReducerState;
}

export interface ReducerAction {
  type: string;
  list: listType[];
  isFetching: boolean;
  message: string;
}

export type FetchSuccessActionType = {
  type: string;
  list: listType[];
};

export interface SetFetch {
  type: string;
  isFetching: boolean;
}

export type FetchErrorActionType = {
  type: string;
  message: string;
};

export type IntersectionObserverEntryType = {
  intersectionRatio: number;
};

export type IntersectionObserverEntriesType = IntersectionObserverEntryType[];
