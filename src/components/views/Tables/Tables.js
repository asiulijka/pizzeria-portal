import React from 'react';
// import PropTypes from 'prop-types';
import styles from './Tables.module.scss';
import {Link} from 'react-router-dom';


const Tables = () => (
  <div className={styles.component}>
    <h2>Tables view</h2>
    <Link to={`${process.env.PUBLIC_URL}/tables/booking/new`} activeClassName='active'> NewTableBooking </Link>
    <Link to={`${process.env.PUBLIC_URL}/tables/booking/123`} activeClassName='active'> TableBooking123 </Link>
    <Link to={`${process.env.PUBLIC_URL}/tables/events/new`} activeClassName='active'> NewEventsBooking </Link>
    <Link to={`${process.env.PUBLIC_URL}/tables/events/123`} activeClassName='active'> EventsBooking123 </Link>
  </div>
);

export default Tables;