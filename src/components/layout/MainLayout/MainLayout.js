import React from 'react';
import PropTypes from 'prop-types';
import PageNav from '../PageNav/PageNav';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';


const MainLayout = ({children}) => (
  <div className="MainLayout">
    <AppBar>
      <Toolbar>
        <PageNav />
      </Toolbar>
    </AppBar>
    <Toolbar />

    {children}
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.node,
};


export default MainLayout;




