import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { renderWithRouter, fireEvent, waitForElement } from './test-utils';
import App from './App';

const mockStore = configureMockStore();

describe('home', () => {
  it('links movies to the detail view of the relevant movie', async () => {
    const store = mockStore({
      SearchListReducer: {
        list: [
          {
            imdbID: '1',
            Title: 'Title 1',
            Year: '2019',
            Type: 'Type 1',
            Poster: 'Poster_1'
          },
          {
            imdbID: '2',
            Title: 'Title 2',
            Year: '2020',
            Type: 'Type 2',
            Poster: 'Poster_2'
          }
        ],
        isFetching: false
      }
    });

    const { getByText, history } = renderWithRouter(
      <>
        <Provider store={store}>
          <App />
          <Route
            path="/:id"
            render={({ match }) => <div>matching id: {match.params.id}</div>}
          />
        </Provider>
      </>
    );

    const firstMovieHeader = await waitForElement(() => getByText(/Title 1/i));
    const leftClick = { button: 0 };
    fireEvent.click(firstMovieHeader, leftClick);
    expect(getByText(/matching id: 1/)).toBeTruthy();

    history.goBack();
    const lastMovieHeader = await waitForElement(() => getByText(/Title 2/i));
    fireEvent.click(lastMovieHeader);
    expect(getByText(/matching id: 2/)).toBeTruthy();
  });
});

describe('detail', () => {
  it('displays the description of the movie routed to', async () => {
    const store = mockStore({});
    const startingRoute = '/7';
    const { getByText } = renderWithRouter(
      <>
        <Provider store={store}>
          <App />
          <Route
            path="/:id"
            render={({ match }) => <div>matching id: {match.params.id}</div>}
          />
        </Provider>
      </>,
      { route: startingRoute }
    );

    const description = getByText(/matching id: 7/i);

    expect(description).toBeTruthy();
  });
});
