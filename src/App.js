import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import 'shoelace-css/source/css/shoelace.css';
import Home from './containers/Home';
import Forms from './containers/Forms';
import Maps from './containers/Maps';
import FourOuhFour from './containers/FourOuhFour';
import Navigation from './components/Navigation';

class App extends Component {
  render() {
    const { user } = this.props.globalState;

    return (
      <div className="body row">
        <Router>
          <div className="col">
            <Route component={Navigation({ name: user.name })} />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/forms" component={Forms} />
              <Route exact path="/maps" component={Maps} />
              <Route component={FourOuhFour} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  globalState: state.globalState,
});

const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
