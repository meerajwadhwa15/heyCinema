import React, { FunctionComponent, SyntheticEvent } from 'react';
import { DebounceInput } from 'react-debounce-input';

export type Props = {
  searchResults: (val: string) => void;
};

const SearchForm: FunctionComponent<Props> = ({ searchResults }) => (
  <div className="search-form">
    <form>
      <DebounceInput
        placeholder="Search"
        minLength={3}
        debounceTimeout={300}
        onChange={event => searchResults(event.target.value)}
      />
      <p>Minimum 3 characters</p>
    </form>
  </div>
);

export default SearchForm;
