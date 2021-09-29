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
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

// const demoContent = [
//   {order: 123, qty: 1, name: 'Zio Stefano\'s Doughnut', sauce: null, ingredients: null, pizza_crust: null, price: '$9'},,
//   {order: 234, qty: 1, name: 'Zio Stefano\'s Doughnut', sauce: null, ingredients: null, pizza_crust: null, price: '$9'},
//   {order: 234, qty: 3, name: 'Nonna Alba\'s Pizza', sauce: 'sour cream', ingredients: 'olives, red peppers, fresh basil', pizza_crust: 'standard crust', price: '$36'},
//   {order: 345, qty: 2, name: 'Nonno Alberto\'s Salad', sauce: null, ingredients: 'cucumber, olives, feta cheese', pizza_crust: null, price: '$24'},
// ];

// const demoContent = {order: 234, table: 2, qty: 3, name: 'Nonna Alba\'s Pizza', sauce: 'sour cream', ingredients: 'olives, red peppers, fresh basil', pizza_crust: 'standard crust', price: '$36.00'};

const demoContent = {price: '$0.00'};

const NewOrder = () => {
  const {id} = useParams();
  const [table, setTable] = React.useState('');
  const handleChange = (event) => {
    setTable(event.target.value);
  };
  const [value, setValue] = React.useState(null);
  return (
    <Container maxWidth='md' sx={{ mt: 2 }}>
      <Paper className={styles.component}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row"><strong>NEW ORDER</strong></TableCell>
              <TableCell />
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

NewOrder.propTypes = {
  id: PropTypes.number,
};

export default NewOrder;