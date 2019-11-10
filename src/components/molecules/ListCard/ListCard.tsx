import React, { FunctionComponent } from 'react';
import Img from './../../atoms/Img';
import Anchor from './../../atoms/Anchor';

export type Props = {
  item: {
    imdbID: string;
    Title: string;
    Year: string;
    Type: string;
    Poster: string;
  };
};

const BeerList: FunctionComponent<Props> = ({ item }) => (
  <article className="card">
    <Anchor url={`/${item.imdbID}`} title={item.Title}>
      <div>
        <Img src={item.Poster} alt={item.Title} />
      </div>
      <div>
        <h3>{item.Title}</h3>
        <p>{item.Type}</p>
        <p>{item.Year}</p>
      </div>
    </Anchor>
  </article>
);

export default BeerList;
