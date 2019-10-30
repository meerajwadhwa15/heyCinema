import React, { FunctionComponent } from 'react';
import Img from './../../atoms/Img';
import Anchor from './../../atoms/Anchor';
import './Style.css';

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
  <div className="card">
    <Anchor url={`/${item.imdbID}`} title={item.Title}>
      <div>
        <Img src={item.Poster} height="250" width="150" alt={item.Title} />
      </div>
      <div>
        <h2>{item.Title}</h2>
        <div>{item.Year}</div>
        <div>{item.Type}</div>
      </div>
    </Anchor>
  </div>
);

export default BeerList;
