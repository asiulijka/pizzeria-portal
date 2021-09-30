import React from 'react';
import PropTypes from 'prop-types';
import styles from './Waiter.module.scss';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

class Waiter extends React.Component {
  static propTypes = {
    tables: PropTypes.any,
    fetchTables: PropTypes.func,
    loading: PropTypes.shape({
      active: PropTypes.bool,
      error: PropTypes.oneOfType([PropTypes.bool,PropTypes.string]),
    }),
  }

  componentDidMount(){
    const { fetchTables } = this.props;
    fetchTables();
  }

  renderActions(status){
    switch (status) {
      case 'free':
        return (
          <>
            <Button>thinking</Button>
            <Button>new order</Button>
          </>
        );
      case 'thinking':
        return (
          <Button>new order</Button>
        );
      case 'ordered':
        return (
          <Button>prepared</Button>
        );
      case 'prepared':
        return (
          <Button>delivered</Button>
        );
      case 'delivered':
        return (
          <Button>paid</Button>
        );
      case 'paid':
        return (
          <Button>free</Button>
        );
      default:
        return null;
    }
  }

  render() {
    const { loading: { active, error }, tables } = this.props;

    if(active || !tables.length){
      return (
        <Paper className={styles.component}>
          <p>Loading...</p>
        </Paper>
      );
    } else if(error) {
      return (
        <Paper className={styles.component}>
          <p>Error! Details:</p>
          <pre>{error}</pre>
        </Paper>
      );
    } else {
      return (
        <Paper className={styles.component}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Table</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Order</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tables.map(row => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell>
                    {row.status}
                  </TableCell>
                  <TableCell>
                    {row.order && (
                      <Button to={`${process.env.PUBLIC_URL}/waiter/order/${row.order}`}>
                        {row.order}
                      </Button>
                    )}
                  </TableCell>
                  <TableCell>
                    {this.renderActions(row.status)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      );
    }
  }
}

export default Waiter;


// import {Link} from 'react-router-dom';
// import Container from '@mui/material/Container';

// const demoContent = [
//   {id: '1', status: 'free', order: null},
//   {id: '2', status: 'thinking', order: null},
//   {id: '3', status: 'ordered', order: 123},
//   {id: '4', status: 'prepared', order: 234},
//   {id: '5', status: 'delivered', order: 345},
//   {id: '6', status: 'paid', order: 456},
// ];

// const renderActions = status => {
//   switch (status) {
//     case 'free':
//       return (
//         <>
//           <Button>thinking</Button>
//           <Button component={Link} to={`${process.env.PUBLIC_URL}/waiter/order/new`} activeClassName='active'>new order</Button>
//         </>
//       );
//     case 'thinking':
//       return (
//         <Button component={Link} to={`${process.env.PUBLIC_URL}/waiter/order/new`} activeClassName='active'>new order</Button>
//       );
//     case 'ordered':
//       return (
//         <Button>prepared</Button>
//       );
//     case 'prepared':
//       return (
//         <Button>delivered</Button>
//       );
//     case 'delivered':
//       return (
//         <Button>paid</Button>
//       );
//     case 'paid':
//       return (
//         <Button>free</Button>
//       );
//     default:
//       return null;
//   }
// };

// const Waiter = () => (
//   <Container maxWidth='md' sx={{ mt: 2 }}>
//     <Paper className={styles.component}>
//       <Table>
//         <TableHead>
//           <TableRow>
//             <TableCell>Table</TableCell>
//             <TableCell>Status</TableCell>
//             <TableCell>Order</TableCell>
//             <TableCell>Action</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {demoContent.map(row => (
//             <TableRow key={row.id}>
//               <TableCell component="th" scope="row">
//                 {row.id}
//               </TableCell>
//               <TableCell>
//                 {row.status}
//               </TableCell>
//               <TableCell>
//                 {row.order && (
//                   <Button component={Link} to={`${process.env.PUBLIC_URL}/waiter/order/${row.order}`} activeClassName='active'>
//                     {row.order}
//                   </Button>
//                 )}
//               </TableCell>
//               <TableCell>
//                 {renderActions(row.status)}
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </Paper>
//   </Container>
// );

// export default Waiter;