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
        minLength={2}
        debounceTimeout={300}
        onChange={event => searchResults(event.target.value)}
      />
    </form>
  </div>
);

export default SearchForm;
