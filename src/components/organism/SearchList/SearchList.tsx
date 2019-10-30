import React, { ReactNode, Component, Fragment, SyntheticEvent } from 'react';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import ListCard from '../../molecules/ListCard';
import SearchInput from './../../molecules/SearchInput';
import {
  listType,
  ComponentState,
  SearchListReducerType,
  ReducerState,
  DispatchProps,
  ComponentProps
} from './type';
import { FetchBeers } from './Action';
import Loader from '../../molecules/Loader';
import ErrorMessage from '../../atoms/ErrorMessage';
import NoRecordFound from '../../atoms/NoRecordFound';
import './Style.css';

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
    dispatch(FetchBeers(searchString));
  }
});

export type Props = ReducerState & DispatchProps;

export class SearchList extends Component<Props, ComponentState> {
  static defaultProps = {
    list: []
  };

  handleSearch(e: SyntheticEvent) {
    e.preventDefault();
    const { fetchSearchListAction } = this.props;
    this.props.fetchSearchListAction('star');
  }

  render(): ReactNode {
    const { list, isFetching, errorMessage } = this.props;

    return (
      <Fragment>
        <SearchInput searchResults={this.handleSearch.bind(this)} />

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
