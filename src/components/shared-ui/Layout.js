import React, { PropTypes } from 'react';

const style = {
  display: 'flex',
  flexDirection: 'column',
  fontSize: '34px',
  padding: '40px',
};

function Layout({ children }) {
  return <div style={style}>{children}</div>;
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
