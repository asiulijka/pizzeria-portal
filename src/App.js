import React from 'react';
import MainLayout from './components/layout/MainLayout/MainLayout';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
// import PropTypes from 'prop-types';

import Login from './components/views/Login/Login';
import Tables from './components/views/Tables/Tables';
import BookingDetails from './components/views/Tables/BookingDetails';
import NewBooking from './components/views/Tables/NewBooking';
import EventDetails from './components/views/Tables/EventDetails';
import NewEvent from './components/views/Tables/NewEvent';
import Waiter from './components/views/Waiter/WaiterContainer';
import NewOrder from './components/views/Waiter/NewOrder';
import OrderDetails from './components/views/Waiter/OrderDetails';
import Kitchen from './components/views/Kitchen/Kitchen';
import Home from './components/views/Home/Home';

import { StylesProvider } from '@mui/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { Provider } from 'react-redux';
import store from './redux/store';

const theme = createTheme({
  palette: {
    primary: { main: '#2B4C6F' },
    // secondary: {main: '#11cb5f'},
  },
});

function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <StylesProvider injectFirst>
          <ThemeProvider theme={theme}>
            <MainLayout>
              <Switch>
                <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home} />

                <Route exact path={process.env.PUBLIC_URL + '/login'} component={Login} />

                <Route exact path={process.env.PUBLIC_URL + '/tables'} component={Tables} />
                <Route exact path={process.env.PUBLIC_URL + '/tables/booking/new'} component={NewBooking} />
                <Route exact path={process.env.PUBLIC_URL + '/tables/booking/:id'} component={BookingDetails} />
                <Route exact path={process.env.PUBLIC_URL + '/tables/event/new'} component={NewEvent} />
                <Route exact path={process.env.PUBLIC_URL + '/tables/event/:id'} component={EventDetails} />
                

                <Route exact path={process.env.PUBLIC_URL + '/waiter'} component={Waiter} />
                <Route exact path={process.env.PUBLIC_URL + '/waiter/order/new'} component={NewOrder} />
                <Route exact path={process.env.PUBLIC_URL + '/waiter/order/:id'} component={OrderDetails} />

                <Route exact path={process.env.PUBLIC_URL + '/kitchen'} component={Kitchen} />
              </Switch>
            </MainLayout>
          </ThemeProvider>
        </StylesProvider>
      </BrowserRouter>
    </Provider> 
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
