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
  ComponentProps,
  IntersectionObserverEntriesType,
  IntersectionObserverEntryType
} from './type';
import { FetchSearchList, LoadMoreSearchList } from './Action';
import Loader from '../../molecules/Loader';
import ErrorMessage from '../../atoms/ErrorMessage';
import NoRecordFound from '../../atoms/NoRecordFound';

export const mapStateToProps = ({
  SearchListReducer: { list, isFetching, errorMessage, noMoreRecords }
}: SearchListReducerType): ReducerState => ({
  list,
  isFetching,
  errorMessage,
  noMoreRecords
});

export const mapDispatchToProps = (
  dispatch: ThunkDispatch<{}, {}, any>
): DispatchProps => ({
  fetchSearchListAction: (searchString: string, page: number) => {
    dispatch(FetchSearchList(searchString, page));
  },
  loadMoreSearchListAction: (searchString: string, page: number) => {
    dispatch(LoadMoreSearchList(searchString, page));
  }
});

export type Props = ReducerState & DispatchProps;

export class SearchList extends Component<Props, ComponentState> {
  static defaultProps = {
    list: []
  };

  state = {
    searchString: '',
    page: 1
  };

  handleSearch(value: string) {
    if (value) {
      this.setState(
        {
          searchString: value,
          page: 1
        },
        () => {
          this.fetchResults();
        }
      );
    }
  }

  fetchResults() {
    const { fetchSearchListAction, loadMoreSearchListAction } = this.props;
    let { searchString, page } = this.state;

    if (page > 1) {
      loadMoreSearchListAction(searchString, page);
    } else {
      fetchSearchListAction(searchString, page);
    }
  }

  componentDidMount() {
    var loadMoreEle = document.querySelector('#loadMore');
    if (loadMoreEle) {
      var options = {
        root: null,
        rootMargin: '0px',
        threshold: 1.0
      };
      try {
        var observer = new IntersectionObserver(
          this.handleIntersect.bind(this),
          options
        );
        observer.observe(loadMoreEle);
      } catch (e) {}
    }
  }

  handleIntersect(entries: IntersectionObserverEntriesType) {
    let { page } = this.state;
    const { list } = this.props;

    entries.forEach((entry: IntersectionObserverEntryType) => {
      if (entry.intersectionRatio > 0 && list.length) {
        // load more data
        page += 1;
        this.setState(
          {
            page
          },
          () => {
            this.fetchResults();
          }
        );
      }
    });
  }

  render(): ReactNode {
    const { list, isFetching, errorMessage, noMoreRecords } = this.props;

    return (
      <Fragment>
        <SearchForm searchResults={this.handleSearch.bind(this)} />
        <div className="cards">
          {isFetching ? (
            <Loader />
          ) : errorMessage ? (
            <ErrorMessage>{errorMessage}</ErrorMessage>
          ) : list.length ? (
            list.map((item: listType, index: number) => (
              <ListCard key={`list-${item.imdbID}-${index}`} item={item} />
            ))
          ) : (
            <NoRecordFound>No Record Found.</NoRecordFound>
          )}
        </div>
        {!noMoreRecords ? (
          <div id="loadMore">{list && list.length ? <Loader /> : null}</div>
        ) : null}
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
