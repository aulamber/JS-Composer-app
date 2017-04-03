import React, { PropTypes } from 'react';

import { ComposerRow, Layout, Table, Title } from '../';

function ComposerList({ composers }) {
  return (
    <Layout>
      <Title title="Composers" />
      <Table data={composers} idType="id" RowComponent={ComposerRow} />
    </Layout>
  );
}

ComposerList.propTypes = {
  composers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default ComposerList;
