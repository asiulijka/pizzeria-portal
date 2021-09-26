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


const demoContent = [
  {date: '2021-09-26', hour: '12:30', table: 1, repeat: false, duration: 4, type: 'event', id: 'E123' },
  {date: '2021-09-26', hour: '16:00', table: 3, repeat: 'daily', duration: 2, type: 'event', id: 'E234' },
  {date: '2021-09-26', hour: '12:00', table: 3, repeat: 'daily', duration: 2, type: 'event', id: 'E345' },
  {date: '2021-09-26', hour: '18:30', table: 2, repeat: 'daily', duration: 3, type: 'event', id: 'E456' },
  {date: '2021-09-26', hour: '16:00', table: 1, repeat: false, duration: 3, type: 'booking', id: 'B123' },
];

const renderActions = status => {

};


const Tables = () => {
  const [value, setValue] = React.useState(null);

  return (
    <Paper className={styles.component}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DateTimePicker
          renderInput={(props) => <TextField {...props} />}
          label="Choose date and time"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
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
          {demoContent.map(row => (
            <TableRow key={row.date}>
              <TableCell component="th" scope="row">
                {row.hour}
              </TableCell>
              <TableCell>
                <Button to={`${process.env.PUBLIC_URL}/tables/${row.type}`}>
                  {renderActions(row.type)}
                </Button>
              </TableCell>
              <TableCell>

              </TableCell>
              <TableCell>
            
              </TableCell>
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