import React, { Component } from 'react';
import { connect } from 'react-redux';
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/bouncyflip.css';

import CardList from '../components/CardList';
import ListHeading from '../components/ListHeading';
import { fetchProjects } from '../redux/actions/index';
import Loader from '../components/Loader';

class App extends Component {
  componentDidMount() {
      this.props.dispatch(fetchProjects());
  }

  getSorted = (filters) => {
      this.props.dispatch(fetchProjects(filters))
  };

  render() {
        const { projects, loading } = this.props;
        return (
            <div className="App">
                <ListHeading onSort={this.getSorted}/>
                <CardList projects={projects}/>
                <Loader display={loading}/>
                <Alert stack={{ limit: 3 }} />
            </div>
        );
  }
}

export default connect((state) => state)(App);
