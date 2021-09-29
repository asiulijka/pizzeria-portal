import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import styles from './Waiter.module.scss';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const demoContent = {order: 234, table: 2, qty: 3, name: 'Nonna Alba\'s Pizza', sauce: 'sour cream', ingredients: 'olives, red peppers, fresh basil', pizza_crust: 'standard crust', price: '$36.00'};

const OrderDetails = () => {
  const {id} = useParams();
  return (
    <Container maxWidth='md' sx={{ mt: 2 }}>
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
              <TableCell component="th" scope="row">Ordered:</TableCell>
              <TableCell>
                <Accordion sx={{ width: '80%'}} key={demoContent.order}> 
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id={demoContent.order}
                  >
                    <Typography textAlign='center'>Order details</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <strong>{demoContent.name}</strong>  {demoContent.price}
                    </Typography>
                    <Typography>
                      {demoContent.sauce}
                    </Typography>
                    <Typography>
                      {demoContent.ingredients}
                    </Typography>
                    <Typography>
                      {demoContent.pizza_crust}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </TableCell>
              <TableCell>
                <Button>update</Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">Total order value:</TableCell>
              <TableCell>{demoContent.price}</TableCell>
              <TableCell />
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
    </Container>
  );
};

OrderDetails.propTypes = {
  id: PropTypes.number,
};

export default OrderDetails;