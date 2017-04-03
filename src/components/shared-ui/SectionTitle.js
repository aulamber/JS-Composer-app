import React, { PropTypes } from 'react';

const titleStyle = {
  fontSize: '34px',
  fontWeight: 'bold',
  marginBottom: '6px',
};

function SectionTitle({ children, title }) {
  return (
    <div>
      <h3 style={titleStyle}>{title}</h3>
      {children}
    </div>
  );
}

SectionTitle.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default SectionTitle;
