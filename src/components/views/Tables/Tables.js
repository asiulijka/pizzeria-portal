import React from 'react';
// import PropTypes from 'prop-types';
import styles from './Tables.module.scss';
import {Link} from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import TextField from '@mui/material/TextField';
import DatePicker from '@mui/lab/DatePicker';
import TimePicker from '@mui/lab/TimePicker';

import { green } from '@mui/material/colors';


const demoContent = [
  {date: '2021-09-27', hour: '12:30', table: 1, repeat: false, duration: 4, type: 'event', id: 'E123' },
  {date: '2021-09-27', hour: '16:00', table: 3, repeat: 'daily', duration: 2, type: 'event', id: 'E234' },
  {date: '2021-09-27', hour: '12:00', table: 3, repeat: 'daily', duration: 2, type: 'event', id: 'E345' },
  {date: '2021-09-27', hour: '18:30', table: 2, repeat: 'daily', duration: 3, type: 'event', id: 'E456' },
  {date: '2021-09-27', hour: '16:00', table: 1, repeat: false, duration: 3, type: 'booking', id: 'B123' },
];

const tablesList = [1, 2, 3];

const produceHoursList = () => {
  let start = new Date(new Date().setHours(12, 0, 0, 0));
  let timesList = [start.toLocaleTimeString('en-GB').slice(0, -3)];
  for (let i=0;i<23;i++){
    start.setMinutes(start.getMinutes()+30);
    timesList.push(start.toLocaleTimeString('en-GB').slice(0, -3));
  }
  return timesList;
};

const renderActions = status => {

};


const Tables = () => {
  const [value, setValue] = React.useState(null);

  return (
    <Paper className={styles.component}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label="Choose date"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
        <TimePicker
          label="Choose time"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Time</TableCell>
            <TableCell>Table-1</TableCell>
            <TableCell>Table-2</TableCell>
            <TableCell>Table-3</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {produceHoursList().map(hour => (
            <TableRow key={hour} hover="true">
              <TableCell component="th" scope="row">
                {hour}
              </TableCell>
              {tablesList.map(tableNo => {
                const existingBooking = demoContent.filter(el => el.hour==hour && el.table==tableNo)[0];  // dodane, zeby tego filtrowania nie powtarzac wszedzie ponizej!
                return (
                  <TableCell key={tableNo}>
                    <Button component={Link} to={() => {
                      const type = null;  // decyzja czy to bedzie booking czy event powinna wynikac pewnie z pierwszej litery ID E lub B? mozna tutaj dorzucic logike, ktora ten czlon adresu wywnioskuje po ID i tylko wkleic tu wynik
                      return (existingBooking == undefined ? 
                        `${process.env.PUBLIC_URL}/tables/booking/new` :  //  <-- tutaj nie wiadomo, czy booking czy event - moze 2 rozne guziki?
                        `${process.env.PUBLIC_URL}/tables/`+existingBooking.type+`/`+existingBooking.id);  //  <-- tutaj wkleic w URL event lub booking
                    }}
                    >
                      {
                        existingBooking == undefined ? 
                          'available' : 
                          existingBooking.type}
                    </Button>
                  </TableCell>);
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};


// const Tables = () => (
//   <div className={styles.component}>
//     <h2>Tables view</h2>
//     <Link to={`${process.env.PUBLIC_URL}/tables/booking/new`} activeClassName='active'> NewTableBooking </Link>
//     <Link to={`${process.env.PUBLIC_URL}/tables/booking/123`} activeClassName='active'> TableBooking123 </Link>
//     <Link to={`${process.env.PUBLIC_URL}/tables/events/new`} activeClassName='active'> NewEventsBooking </Link>
//     <Link to={`${process.env.PUBLIC_URL}/tables/events/123`} activeClassName='active'> EventsBooking123 </Link>
//   </div>
// );

export default Tables;