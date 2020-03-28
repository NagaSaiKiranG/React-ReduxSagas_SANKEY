import HomePage from './pages/HomePage';
import SankeyPage from './pages/SankeyPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React from 'react'
import {Provider} from 'react-redux'
const App = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/sankey" component={SankeyPage} />
      </Switch>
    </Router>
  </Provider>
)

export default App;