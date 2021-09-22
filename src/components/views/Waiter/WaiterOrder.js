import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';


const WaiterOrder = () => {
  const {id} = useParams();
  return (
    <div>
      <h2>WaiterOrder view</h2>
      <h3>{id}</h3>
    </div>
  );
};

WaiterOrder.propTypes = {
  id: PropTypes.number,
};

export default WaiterOrder;