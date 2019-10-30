import React, { FunctionComponent } from 'react';
import Layout from './../components/templates/Layout';
import SearchList from './../components/organism/SearchList';
import Header from './../components/molecules/Header';

type HomePageProps = {};

const HomePage: FunctionComponent<HomePageProps> = props => (
  <Layout>
    <Header />
    <SearchList />
  </Layout>
);

export default HomePage;
