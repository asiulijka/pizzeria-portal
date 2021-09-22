import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';


const TableEvent = () => {
  const {id} = useParams();
  return (
    <div>
      <h2>TableEvent view</h2>
      <h3>{id}</h3>
    </div>
  );
};

TableEvent.propTypes = {
  id: PropTypes.number,
};

export default TableEvent;