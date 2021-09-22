import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';


const TableBooking = () => {
  const {id} = useParams();
  return (
    <div>
      <h2>TableBooking view</h2>
      <h3>{id}</h3>
    </div>
  );
};

TableBooking.propTypes = {
  id: PropTypes.number,
};

export default TableBooking;