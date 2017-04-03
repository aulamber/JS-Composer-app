import React, { Component } from 'react';
import axios from 'axios';

import { ComposerList, Loading } from '../';

class ComposerListContainer extends Component {
  constructor(props) {
    super(props);

    this.state = { composers: [] };
  }

  componentDidMount() {
    axios.get('http://localhost:4000/composers')
      .then((res) => {
        this.setState({ composers: res.data });
      });
  }

  render() {
    if (!this.state.composers) return <Loading />;

    return <ComposerList composers={this.state.composers} />;
  }
}

export default ComposerListContainer;
