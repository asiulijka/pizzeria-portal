import React from 'react';
// import PropTypes from 'prop-types';
import styles from './Kitchen.module.scss';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';


const demoContent = [
  {order: 123, qty: 1, name: 'Zio Stefano\'s Doughnut', sauce: null, ingredients: null, pizza_crust: null},
  {order: 234, qty: 1, name: 'Zio Stefano\'s Doughnut', sauce: null, ingredients: null, pizza_crust: null},
  {order: 234, qty: 3, name: 'Nonna Alba\'s Pizza', sauce: 'sour cream', ingredients: 'olives, red peppers, fresh basil', pizza_crust: 'standard crust'},
  {order: 345, qty: 2, name: 'Nonno Alberto\'s Salad', sauce: null, ingredients: 'cucumber, olives, feta cheese', pizza_crust: null},
];


const Kitchen = () => {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Open Orders
        </ListSubheader>
      }
    >

      {demoContent.map(list => (        
        <div key={list.order}>
          <ListItemButton onClick={handleClick}>
            {open ? <ExpandLess /> : <ExpandMore />}
            <ListItemText primary={list.order} />
            <Button>ready</Button>
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary={list.name + ' Qty: ' + list.qty} />
                <ListItemText secondary={list.sauce + '; ' + list.ingredients + '; ' + list.pizza_crust} />
              </ListItemButton>
            </List>
          </Collapse>

          <Divider />
        </div>
      ))}
    </List>
  );
};

// const Kitchen = () => (
//   <div className={styles.component}>
//     <h2>Kitchen view</h2>
//   </div>
// );

export default Kitchen;