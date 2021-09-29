import React from 'react';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import styles from './Tables.module.scss';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
// import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TextField from '@mui/material/TextField';
import DatePicker from '@mui/lab/DatePicker';
import TimePicker from '@mui/lab/TimePicker';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Container from '@mui/material/Container';

const NewEvent = () => {
  const [table, setTable] = React.useState('');

  const handleChange = (event) => {
    setTable(event.target.value);
  };

  const [value, setValue] = React.useState(null);

  return (
    <Container maxWidth='sm' sx={{ mt: 2 }}>
      <Paper className={styles.component}>
        <Table size='small'>
          <TableBody>
            <TableRow>
              <TableCell><strong>NEW EVENT</strong></TableCell>
              <TableCell />
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">Table:</TableCell>
              <TableCell>
                <FormControl sx={{ width: '80%'}}>
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
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">Hour end:</TableCell>
              <TableCell>
                <TextField
                  sx={{ width: '80%'}}
                  id="outlined-number"
                  label="Choose duration"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">Number of guests:</TableCell>
              <TableCell>
                <TextField
                  sx={{ width: '80%'}}
                  id="outlined-number"
                  label="Choose number of guests"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">Starters:</TableCell>
              <TableCell>
                <FormControlLabel control={<Checkbox />} label="Water" />
                <FormControlLabel control={<Checkbox />} label="Bread" />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">Repeat Event:</TableCell>
              <TableCell>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Choose if repeat</InputLabel>
                  <Select
                    sx={{ width: '80%'}}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={table}
                    label="Table"
                    onChange={handleChange}
                  >
                    <MenuItem value={1}>One-time event</MenuItem>
                    <MenuItem value={2}>Repeat Daily</MenuItem>
                    <MenuItem value={3}>Repeat Weekly</MenuItem>
                  </Select>
                </FormControl>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <div align="center">
          <Button variant="contained" sx={{ mt: 2 }}>
            Confirm
          </Button>
        </div>
      </Paper>
    </Container> 
  );
};

export default NewEvent;