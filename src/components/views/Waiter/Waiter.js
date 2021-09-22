import React from 'react';
// import PropTypes from 'prop-types';
import styles from './Waiter.module.scss';
import {Link} from 'react-router-dom';


const Waiter = () => (
  <div className={styles.component}>
    <h2>Waiter view</h2>
    <nav>
      <Link to={`${process.env.PUBLIC_URL}/waiter/order/new`} activeClassName='active'> NewOrder </Link>
      <Link to={`${process.env.PUBLIC_URL}/waiter/order/456`} activeClassName='active'> OrderID </Link>
    </nav>
  </div>
);

export default Waiter;