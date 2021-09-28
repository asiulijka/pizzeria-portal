import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import styles from './Tables.module.scss';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
// import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const demoContent = {id: '1', date: '2021-09-27', hour: '12:30', table: 1, repeat: false, duration: 4, ppl: 2, type: 'event', starters: ['water'], order: 'E123' };
// const demoContent = {id: '2', date: '2021-09-27', hour: '16:00', table: 3, repeat: 'daily', duration: 2, ppl: 3, type: 'event', starters: ['bread', 'lemonWater'], order: 'E234' };



const TableEvent = () => {
  // const {id} = useParams();
  return (
    <Paper className={styles.component}>
      <Table>
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
          <TableRow>
            <TableCell component="th" scope="row">Repeat Event:</TableCell>
            <TableCell>{demoContent.repeat}</TableCell>
            <TableCell>
              <Button>change</Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Paper>
  );
};

TableEvent.propTypes = {
  id: PropTypes.number,
};

export default TableEvent;


// const TableEvent = () => {
//   const {id} = useParams();
//   return (
//     <div>
//       <h2>TableEvent view</h2>
//       <h3>{id}</h3>
//     </div>
//   );
// };

// TableEvent.propTypes = {
//   id: PropTypes.number,
// };

// export default TableEvent;







