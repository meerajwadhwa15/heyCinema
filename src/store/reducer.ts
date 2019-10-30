import { combineReducers, Dispatch, Reducer } from 'redux';
import SearchListReducer from './../components/organism/SearchList/Reducers';

// The top-level state object
export interface ApplicationState {}

// Whenever an action is dispatched, Redux will update each top-level application state property
// using the reducer with the matching name. It's important that the names match exactly, and that
// the reducer acts on the corresponding ApplicationState property type.
export const reducers: Reducer<ApplicationState> = combineReducers<
  ApplicationState
>({
  SearchListReducer
});
