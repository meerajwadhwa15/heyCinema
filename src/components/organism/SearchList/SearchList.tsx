import React, { ReactNode, Component, Fragment, SyntheticEvent } from 'react';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import ListCard from '../../molecules/ListCard';
import SearchForm from './../../molecules/SearchForm';
import {
  listType,
  ComponentState,
  SearchListReducerType,
  ReducerState,
  DispatchProps,
  ComponentProps
} from './type';
import { FetchSearchList } from './Action';
import Loader from '../../molecules/Loader';
import ErrorMessage from '../../atoms/ErrorMessage';
import NoRecordFound from '../../atoms/NoRecordFound';

export const mapStateToProps = ({
  SearchListReducer: { list, isFetching, errorMessage }
}: SearchListReducerType): ReducerState => ({
  list,
  isFetching,
  errorMessage
});

export const mapDispatchToProps = (
  dispatch: ThunkDispatch<{}, {}, any>
): DispatchProps => ({
  fetchSearchListAction: (searchString: string) => {
    dispatch(FetchSearchList(searchString));
  }
});

export type Props = ReducerState & DispatchProps;

export class SearchList extends Component<Props, ComponentState> {
  static defaultProps = {
    list: []
  };

  handleSearch(value: string) {
    if (value) {
      const { fetchSearchListAction } = this.props;
      fetchSearchListAction(value);
    }
  }

  render(): ReactNode {
    const { list, isFetching, errorMessage } = this.props;

    return (
      <Fragment>
        <SearchForm searchResults={this.handleSearch.bind(this)} />
        <div className="cards">
          {isFetching ? (
            <Loader />
          ) : errorMessage ? (
            <ErrorMessage>{errorMessage}</ErrorMessage>
          ) : list.length ? (
            list.map((item: listType) => (
              <ListCard key={item.imdbID} item={item} />
            ))
          ) : (
            <NoRecordFound>No Record Found.</NoRecordFound>
          )}
        </div>
      </Fragment>
    );
  }
}

export default connect<
  ReducerState,
  DispatchProps,
  ComponentProps,
  SearchListReducerType
>(
  mapStateToProps,
  mapDispatchToProps
)(SearchList);
