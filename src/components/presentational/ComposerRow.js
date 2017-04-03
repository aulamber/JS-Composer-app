import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';

const style = {
  color: '#1E90FF',
};

function ComposerRow({ elem }) {
  return (
    <Link style={style} to={`/article/composers/${elem.id}`}>
      {elem.name}
    </Link>
  );
}

ComposerRow.propTypes = {
  elem: PropTypes.shape().isRequired,
};

export default ComposerRow;
