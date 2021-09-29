import React from 'react';
// import PropTypes from 'prop-types';
// import styles from './Kitchen.module.scss';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const demoContent = [
  {orderNo: 234, qty: 1, name: 'Zio Stefano\'s Doughnut', sauce: null, ingredients: null, pizza_crust: null},
  {orderNo: 345, qty: 3, name: 'Nonna Alba\'s Pizza', sauce: 'sour cream', ingredients: 'olives, red peppers, fresh basil', pizza_crust: 'standard crust'},
  {orderNo: 456, qty: 2, name: 'Nonno Alberto\'s Salad', sauce: null, ingredients: 'cucumber, olives, feta cheese', pizza_crust: null},
];


const Kitchen = () => {
  const [open, setOpen] = React.useState(true);

  return (
    <Container maxWidth="xs" sx={{ mt: 2 }}>
      {demoContent.map(order => (    
        <Accordion key={order.orderNo}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id={order.orderNo}
          >
            <Typography textAlign='center'><strong>Order #:</strong> {order.orderNo}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <strong>{order.name}</strong>
            </Typography>
            <Typography>
              {order.sauce}
            </Typography>
            <Typography>
              {order.ingredients}
            </Typography>
            <Typography>
              {order.pizza_crust}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Container>
  );
};

export default Kitchen;