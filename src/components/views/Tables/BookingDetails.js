import React from 'react';
import PropTypes from 'prop-types';
// import { useParams } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import styles from './Tables.module.scss';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText';
// import ListSubheader from '@mui/material/ListSubheader';
// import Divider from '@mui/material/Divider';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
// import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const demoContent = {id: '1', date: '2021-09-27', hour: '16:00', table: 1, duration: 3, ppl: 4, type: 'booking', starters: ['water'], order: 'B123' };



// const startHour = demoContent.hour; // new Date();
// const minutesToAdd = 30*demoContent.duration;
// const newDate = new Date(startHour.getTime()+minutesToAdd*60000)('en-GB').slice(0, -3));
// const endHour = ;

// const produceHoursList = () => {
//   let start = new Date(new Date().setHours(12, 0, 0, 0));
//   let timesList = [start.toLocaleTimeString('en-GB').slice(0, -3)];
//   for (let i=0;i<23;i++){
//     start.setMinutes(start.getMinutes()+30);
//     timesList.push(start.toLocaleTimeString('en-GB').slice(0, -3));
//   }
//   return timesList;
// };



const TableBooking = () => {
  // const {id} = useParams();
  return (
    <Paper className={styles.component}>

      <Table>
        <TableBody>
          <TableRow>
            <TableCell component="th" scope="row">Order Number:</TableCell>
            <TableCell>{demoContent.order}</TableCell>
            <TableCell>
              <Button>change</Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">Table:</TableCell>
            <TableCell>Table-{demoContent.table}</TableCell>
            <TableCell>
              <Button>change</Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">Date:</TableCell>
            <TableCell>{demoContent.date}</TableCell>
            <TableCell>
              <Button>change</Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">Hour start:</TableCell>
            <TableCell>{demoContent.hour}</TableCell>
            <TableCell>
              <Button>change</Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">Hour end:</TableCell>
            <TableCell>{demoContent.hour}+duration</TableCell>
            <TableCell>
              <Button>change</Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">Number of guests:</TableCell>
            <TableCell>{demoContent.ppl}</TableCell>
            <TableCell>
              <Button>change</Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">Starters:</TableCell>
            <TableCell>{demoContent.starters}</TableCell>
            <TableCell>
              <Button>change</Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>

      {/* <List
        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Open Orders
          </ListSubheader>
        }
      >
        <ListItem disablePadding>
          <ListItemText>Order Number:</ListItemText>
          <ListItemText primary={demoContent.order} />
          <Button>change</Button>
        </ListItem>
        <Divider />

        <ListItem disablePadding>
          <ListItemText>Date:</ListItemText>
          <ListItemText primary={demoContent.date} />
          <Button>change</Button>
        </ListItem>
        <Divider />
 
      </List> */}
    </Paper>
  );
};

TableBooking.propTypes = {
  id: PropTypes.number,
};

// const TableBooking = () => {
//   const {id} = useParams();
//   return (
//     <div>
//       <h2>TableBooking view</h2>
//       <h3>{id}</h3>
//     </div>
//   );
// };

// TableBooking.propTypes = {
//   id: PropTypes.number,
// };

export default TableBooking;