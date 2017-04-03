import React, { PropTypes } from 'react';

const styles = {
  table: {
    border: '3px solid #C8C8C8',
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'column',
    fontSize: '30px',
    marginTop: '12px',
  },

  row: {
    padding: '25px 35px',
    textDecoration: 'none',
  },
};

function Table({ data, idType, RowComponent }) {
  const table = data.map((elem, i) => {
    const rowStyle = (i === data.length - 1
      ? styles.row
      : { ...styles.row, borderBottom: '3px solid #C8C8C8' }
    );

    return (
      <div key={elem[idType]} style={rowStyle}>
        <RowComponent elem={elem} />
      </div>
    );
  });

  return <div style={styles.table}>{table}</div>;
}

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape().isRequired).isRequired,
  idType: PropTypes.string.isRequired,
  RowComponent: PropTypes.func.isRequired,
};

export default Table;
