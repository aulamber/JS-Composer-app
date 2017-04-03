import React, { PropTypes } from 'react';

const style = {
  fontSize: '90px',
};

function Title({ title }) {
  return (
    <h1 style={style}>{title}</h1>
  );
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
