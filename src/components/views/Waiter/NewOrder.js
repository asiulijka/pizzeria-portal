import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import styles from './Waiter.module.scss';
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
import Divider from '@mui/material/Divider';
import ListSubheader from '@mui/material/ListSubheader';
import OutlinedInput from '@mui/material/OutlinedInput';
import { Grid } from '@mui/material';

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



  // Ingredients select handler
  const [ingredientName, setingredientName] = React.useState([]);
  const handleIngredientsChange = (event) => {
    const {
      target: { value },
    } = event;
    setingredientName(
      // On autofill we get a the stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };


  return (
    <Container maxWidth='md' sx={{ mt: 2 }}>
      <Paper className={styles.component}>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant='h5'>
              NEW ORDER
            </Typography>
            <Divider sx={{ my: 2 }}/>
          </Grid>

          {/* Table */}
          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={4}>
                <Typography>
                  Table:
                </Typography>
              </Grid>
              <Grid item xs={6}>
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
              </Grid>
              <Grid item xs={2}>
                <Button>Change</Button>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Divider sx={{ my: 2 }}/>
          </Grid>

          {/* Products */}
          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={4}>
                <Typography>
                  Products:
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <FormControl sx={{ mr: 4, minWidth: 120 }}>
                  <InputLabel htmlFor="grouped-select">Products</InputLabel>
                  <Select defaultValue="" id="grouped-select" label="Grouping">
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <ListSubheader>Pizzas</ListSubheader>
                    <MenuItem value={1}>Pepperoni</MenuItem>
                    <MenuItem value={2}>Margarita</MenuItem>
                    <ListSubheader>Pastas</ListSubheader>
                    <MenuItem value={3}>Bolognese</MenuItem>
                    <MenuItem value={4}>Carbonara</MenuItem>
                  </Select>
                </FormControl>
                <FormControl sx={{ minWidth: 120 }}>
                  <InputLabel htmlFor="grouped-select">Ingredients</InputLabel>
                  <Select 
                    multiple 
                    defaultValue="" 
                    id="grouped-select" 
                    label="Grouping"
                    value={ingredientName}
                    onChange={handleIngredientsChange}
                    input={<OutlinedInput label="Name" />}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <ListSubheader>Sauce</ListSubheader>
                    <MenuItem value={1}>Red</MenuItem>
                    <MenuItem value={2}>White</MenuItem>
                    <ListSubheader>Toppings</ListSubheader>
                    <MenuItem value={3}>Pepperoni</MenuItem>
                    <MenuItem value={4}>Onion</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={2}>
                <Button>Add</Button>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Divider sx={{ my: 2 }}/>
          </Grid>

          {/* Ordered list */}
          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={4}>
                <Typography>
                  Ordered products:
                </Typography>
              </Grid>
              <Grid item xs={6}>
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
              </Grid>
              <Grid item xs={2}>
                <Button>Update</Button>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Divider sx={{ my: 2 }}/>
          </Grid>

          {/* Total price */}
          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={4}>
                <Typography>
                  Total order value:
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography>
                  {demoContent.price}
                </Typography>
              </Grid>
              <Grid item xs={2}></Grid>
            </Grid>
          </Grid>
        </Grid>

      </Paper>
    </Container>

  );
};

NewOrder.propTypes = {
  id: PropTypes.number,
};

export default NewOrder;