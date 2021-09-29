import React from 'react';
// import PropTypes from 'prop-types';
import styles from './Tables.module.scss';
import {Link} from 'react-router-dom';
import Table from '@mui/material/Table';
import Container from '@mui/material/Container';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TextField from '@mui/material/TextField';
import DatePicker from '@mui/lab/DatePicker';
import TimePicker from '@mui/lab/TimePicker';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


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

const Tables = () => {
  const [value, setValue] = React.useState(null);

  // for Available menu
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Container maxWidth='md' sx={{ mt: 2 }}>
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
        <Table size="small" sx={{ mt: 2 }}>
          <TableHead>
            <TableRow>
              <TableCell align="center">Time</TableCell>
              <TableCell align="center">Table-1</TableCell>
              <TableCell align="center">Table-2</TableCell>
              <TableCell align="center">Table-3</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {produceHoursList().map(hour => (
              <TableRow key={hour} hover="true">
                <TableCell component="th" scope="row" align="center">
                  {hour}
                </TableCell>
                {tablesList.map(tableNo => {
                  const existingBooking = demoContent.filter(el => el.hour==hour && el.table==tableNo)[0];  // dodane, zeby tego filtrowania nie powtarzac wszedzie ponizej!
                  if (existingBooking == undefined) {
                    return (
                      <TableCell align="center">
                        <Button
                          id="basic-button"
                          aria-controls="basic-menu"
                          aria-haspopup="true"
                          aria-expanded={open ? 'true' : undefined}
                          onClick={handleClick}
                          color="success"
                        >
                          Available
                        </Button>
                        <Menu
                          id="basic-menu"
                          anchorEl={anchorEl}
                          open={open}
                          onClose={handleClose}
                          MenuListProps={{
                            'aria-labelledby': 'basic-button',
                          }}
                        >
                          <MenuItem component={Link} to={`${process.env.PUBLIC_URL}/tables/event/new`}>New Event</MenuItem>
                          <MenuItem component={Link} to={`${process.env.PUBLIC_URL}/tables/booking/new`}>New Booking</MenuItem>
                        </Menu>
                      </TableCell>
                    );
                  } else {
                    return (
                      <TableCell align="center">
                        <Button 
                          component={Link} 
                          to={`${process.env.PUBLIC_URL}/tables/`+existingBooking.type+`/`+existingBooking.id}
                          color="error"
                        >
                          {existingBooking.type}
                        </Button>
                      </TableCell>
                    );
                  }
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Container>
  );
};

export default Tables;