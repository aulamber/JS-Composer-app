import React, { PropTypes } from 'react';

function CompositionRow({ elem }) {
  return <div>{elem.name}</div>;
}

CompositionRow.propTypes = {
  elem: PropTypes.shape().isRequired,
};

export default CompositionRow;
