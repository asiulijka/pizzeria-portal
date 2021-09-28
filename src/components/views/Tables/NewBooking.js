import React from 'react';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import styles from './Tables.module.scss';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
// import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
// import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import TextField from '@mui/material/TextField';
import DatePicker from '@mui/lab/DatePicker';
import TimePicker from '@mui/lab/TimePicker';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const NewBooking = () => {
  const [table, setTable] = React.useState('');

  const handleChange = (event) => {
    setTable(event.target.value);
  };

  const [value, setValue] = React.useState(null);

  return (
    <Paper className={styles.component}>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>NEW BOOKING</TableCell>
            <TableCell />
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">Table:</TableCell>
            <TableCell>
              {/* <Box sx={{ minWidth: 120 }}> */}
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Choose Table</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={table}
                  label="Table"
                  onChange={handleChange}
                >
                  <MenuItem value={1}>Table-1</MenuItem>
                  <MenuItem value={2}>Table-2</MenuItem>
                  <MenuItem value={3}>Table-3</MenuItem>
                </Select>
              </FormControl>
              {/* </Box> */}
              {/* <Button>Choose Table</Button> */}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">Date:</TableCell>
            <TableCell>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Choose date"
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
              {/* <Button>Choose Date</Button> */}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">Hour start:</TableCell>
            <TableCell>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <TimePicker
                  label="Choose hour"
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
              {/* <Button>Choose Hour</Button> */}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">Hour end:</TableCell>
            <TableCell>
              <TextField
                id="outlined-number"
                label="Choose duration"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              {/* <Button>Choose duration</Button> */}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">Number of guests:</TableCell>
            <TableCell>
              <TextField
                id="outlined-number"
                label="Choose number of guests"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              {/* <Button>Choose number of guests</Button> */}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">Starters:</TableCell>
            <TableCell>
              <FormControlLabel control={<Checkbox />} label="Water" />
              <FormControlLabel control={<Checkbox />} label="Bread" />
              {/* <Button>Choose Starters</Button> */}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Paper>
  );
};


// const TableNewBooking = () => {
//   return (
//     <div>
//       <h2>TableNewBooking view</h2>
//     </div>
//   );
// };

export default NewBooking;