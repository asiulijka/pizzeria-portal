import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const demoContent = {
  orderTotal: 15, onlineTotal: 9, localTotal: 6, 
  totalOngoing: 5, ongoingOnline: 3, ongoingLocal: 2,
  totalBookings: 3, bookingNo1: '123', bookingNo2: '234', bookingNo3: '345', 
  bTable1: 'Table-2', bTable2: 'Table-1', bTable3: 'Table-1',
  bTime1: '12:30', bTime2: '17:00', bTime3: '19:30',
  totalEvents: 1, eventNo1: '234', eTable1: 'Table-3', eTime1: '14:30',
};

const Home = () => {
  return (
    <Box sx={{ flexGrow: 1 , mt: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Item>Order stats</Item>
          <Item sx={{ mt: 1 }}>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell component="th" scope="row">Total order no</TableCell>
                  <TableCell>{demoContent.orderTotal}</TableCell>
                  {/* <TableCell /> */}
                </TableRow>
                <TableRow>
                  <TableCell />
                  <TableCell component="th" scope="row">Total online</TableCell>
                  <TableCell>{demoContent.onlineTotal}</TableCell>
                  {/* <TableCell /> */}
                </TableRow>
                <TableRow>
                  <TableCell />
                  <TableCell component="th" scope="row">Total local</TableCell>
                  <TableCell>{demoContent.localTotal}</TableCell>
                  {/* <TableCell /> */}
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">Ongoing orders - total</TableCell>
                  <TableCell>{demoContent.totalOngoing}</TableCell>
                  {/* <TableCell /> */}
                </TableRow>
                <TableRow>
                  <TableCell />
                  <TableCell component="th" scope="row">Ongoing orders - online</TableCell>
                  <TableCell>{demoContent.ongoingOnline}</TableCell>
                  {/* <TableCell /> */}
                </TableRow>
                <TableRow>
                  <TableCell />
                  <TableCell component="th" scope="row">Ongoing orders - local</TableCell>
                  <TableCell>{demoContent.ongoingLocal}</TableCell>
                  {/* <TableCell /> */}
                </TableRow>
              </TableBody>
            </Table>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>Bookings and events</Item>
          <Item sx={{ mt: 1 }}>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell component="th" scope="row">Today bookings</TableCell>
                  <TableCell>{demoContent.totalBookings}</TableCell>
                  {/* <TableCell /> */}
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">{demoContent.bookingNo1}</TableCell>
                  <TableCell>{demoContent.bTable1}</TableCell>
                  <TableCell>{demoContent.bTime1}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">{demoContent.bookingNo2}</TableCell>
                  <TableCell>{demoContent.bTable2}</TableCell>
                  <TableCell>{demoContent.bTime2}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">{demoContent.bookingNo3}</TableCell>
                  <TableCell>{demoContent.bTable3}</TableCell>
                  <TableCell>{demoContent.bTime3}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">Today events</TableCell>
                  <TableCell>{demoContent.totalEvents}</TableCell>
                  {/* <TableCell /> */}
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">{demoContent.eventNo1}</TableCell>
                  <TableCell>{demoContent.eTable1}</TableCell>
                  <TableCell>{demoContent.eTime1}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};


// const Home = () => {
//   return (
//     <div>
//       <h2>Home view</h2>
//     </div>
//   );
// };

export default Home;