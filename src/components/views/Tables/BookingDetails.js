import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import styles from './Tables.module.scss';
import Table from '@mui/material/Table';
import Container from '@mui/material/Container';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

const demoContent = {id: '1', date: '2021-09-27', hour: '16:00', table: 1, duration: 3, ppl: 4, type: 'booking', starters: ['water'], order: 'B123' };

const BookingDetails = () => {
  return (
    <Container maxWidth='md' sx={{ mt: 2 }}>
      <Paper className={styles.component}>
        <Table size='small'>
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">Order Number:</TableCell>
              <TableCell>{demoContent.order}</TableCell>
              <TableCell />
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
              <TableCell>17:30</TableCell>
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
      </Paper>
    </Container>
  );
};

BookingDetails.propTypes = {
  id: PropTypes.number,
};

export default BookingDetails;