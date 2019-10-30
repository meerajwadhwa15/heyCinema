import React, { FunctionComponent, SyntheticEvent } from 'react';
import './style.css';

export type Props = {
  searchResults: (e: SyntheticEvent) => void;
};

const SearchInput: FunctionComponent<Props> = ({ searchResults }) => (
  <div>
    <form onSubmit={searchResults}>
      <input name="search" type="search" />
      <button type="submit">Search</button>
    </form>
  </div>
);

export default SearchInput;
