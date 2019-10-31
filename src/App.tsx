import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import DetailPage from './pages/DetailPage';
import ErrorBoundary from './ErrorBoundry';

const App: React.FC = props => (
  <>
    <ErrorBoundary>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/:id" component={DetailPage} />
      </Switch>
    </ErrorBoundary>
  </>
);

export default App;
