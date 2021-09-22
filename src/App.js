import React from 'react';
import MainLayout from './components/layout/MainLayout/MainLayout';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
// import PropTypes from 'prop-types';

import Login from './components/views/Login/Login';
import Tables from './components/views/Tables/Tables';
import TableBooking from './components/views/Tables/TableBooking';
import TableNewBooking from './components/views/Tables/TableNewBooking';
import TableEvent from './components/views/Tables/TableEvent';
import TableNewEvent from './components/views/Tables/TableNewEvent';
import Waiter from './components/views/Waiter/Waiter';
import WaiterNewOrder from './components/views/Waiter/WaiterNewOrder';
import WaiterOrder from './components/views/Waiter/WaiterOrder';
import Kitchen from './components/views/Kitchen/Kitchen';

import { StylesProvider } from '@mui/styles';

function App() {

  return (
    <BrowserRouter>
      <StylesProvider injectFirst>
        <MainLayout>
          <Switch>
            <Route exact path={`${process.env.PUBLIC_URL}/`} component={MainLayout} />

            <Route exact path={process.env.PUBLIC_URL + '/login'} component={Login} />

            <Route exact path={process.env.PUBLIC_URL + '/tables'} component={Tables} />
            <Route exact path={process.env.PUBLIC_URL + '/tables/booking/new'} component={TableNewBooking} />
            <Route exact path={process.env.PUBLIC_URL + '/tables/booking/:id'} component={TableBooking} />
            <Route exact path={process.env.PUBLIC_URL + '/tables/events/new'} component={TableNewEvent} />
            <Route exact path={process.env.PUBLIC_URL + '/tables/events/:id'} component={TableEvent} />
            

            <Route exact path={process.env.PUBLIC_URL + '/waiter'} component={Waiter} />
            <Route exact path={process.env.PUBLIC_URL + '/waiter/order/new'} component={WaiterNewOrder} />
            <Route exact path={process.env.PUBLIC_URL + '/waiter/order/:id'} component={WaiterOrder} />

            <Route exact path={process.env.PUBLIC_URL + '/kitchen'} component={Kitchen} />
          </Switch>
        </MainLayout>
      </StylesProvider>
    </BrowserRouter>

  );


  // <Switch>
  //   {routes.mao(route => (
  //     <Route key={route.path} exact path={'${process.env.PUBLIC_URL}${route.path}'} component={route.component} />
  //   ))}
  // </Switch> 

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React now! Right now!
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
