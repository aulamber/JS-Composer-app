import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';

import { CompositionRow, SectionTitle, Layout, Table, Title } from '../';

const styles = {
  link: {
    marginTop: '50px',
  },

  top: {
    border: '3px solid #C8C8C8',
    borderRadius: 10,
    margin: '70px 35px',
    boxShadow: '0 2px 2px #DCDCDC',
  },
};

function ComposerDetails({ composer }) {
  const { bio, compositions, genre } = composer;
  const birthInfo = `${bio.birth}, ${bio.place}`;

  return (
    <div style={styles.top}>
      <Layout>
        <Title title={composer.name} />

        <SectionTitle title="Birthdate">
          <p>{birthInfo}</p>
        </SectionTitle>

        <SectionTitle title="Musical Genre">
          <p>{genre}</p>
        </SectionTitle>

        <SectionTitle title="Compositions">
          <Table data={compositions} idType="name" RowComponent={CompositionRow} />
        </SectionTitle>

        <div style={styles.link}>
          <Link to="/list/composers">Back to composers</Link>
        </div>
      </Layout>
    </div>
  );
}

ComposerDetails.propTypes = {
  composer: PropTypes.shape({
    bio: PropTypes.shape({
      birth: PropTypes.string.isRequired,
      place: PropTypes.string.isRequired,
    }).isRequired,

    compositions: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        year: PropTypes.number.isRequired,
      }),
    ).isRequired,

    genre: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default ComposerDetails;
