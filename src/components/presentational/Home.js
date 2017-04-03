import React from 'react';
import { Link } from 'react-router-dom';

import { Layout, Title } from '../';

const styles = {
  link: {
    border: '3px solid #C8C8C8',
    borderRadius: 10,
    color: 'black',
    fontSize: '30px',
    marginTop: '12px',
    padding: '15px 25px',
    textDecoration: 'none',
    maxWidth: '335px',
  },

  title: {
    fontSize: '90px',
    marginBottom: '20px',
  },

  top: {
    display: 'flex',
    flexDirection: 'column',
    padding: '40px',
  },
};

function Home() {
  return (
    <Layout>
      <Title title="Home" />
      <Link style={styles.link} to="/list/composers">Go to list composers</Link>
    </Layout>
  );
}

export default Home;
