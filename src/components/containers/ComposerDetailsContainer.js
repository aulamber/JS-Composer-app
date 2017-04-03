import React, { Component, PropTypes } from 'react';
import axios from 'axios';

import { ComposerDetails, Loading } from '../';

class ComposerDetailsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = { composer: {} };
  }

  componentDidMount() {
    axios.get(`http://localhost:4000/composers/${this.props.match.params.id}`)
      .then((res) => {
        this.setState({ composer: res.data });
      });
  }

  render() {
    if (!Object.keys(this.state.composer).length) return <Loading />;

    return <ComposerDetails composer={this.state.composer} />;
  }
}

ComposerDetailsContainer.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ComposerDetailsContainer;
