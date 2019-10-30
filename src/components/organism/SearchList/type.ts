export type listType = {
  imdbID: string;
  Title: string;
  Year: string;
  Type: string;
  Poster: string;
};

export interface ComponentProps {}

export interface ComponentState {}

export interface ReducerState {
  list: listType[];
  isFetching: boolean;
  errorMessage: string;
}

export interface DispatchProps {
  fetchSearchListAction: (searchString: string) => void;
}

export interface SearchListReducerType {
  SearchListReducer: {
    list: listType[];
    isFetching: boolean;
    errorMessage: string;
  };
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
