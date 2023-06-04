import * as React from 'react';
import { useState, useEffect} from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useUser } from '../context/AuthContext';
import { getDatesByUser } from '../firebase';


const ITEM_HEIGHT = 48;

export default function LongMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const {user, signin, signout} = useUser();
  const [dates, setDates] = useState([]);
  const [selectedDate, setSelectedDate] = useState('Current');
  const [pastentries, setpastentries] = useState([]);


  useEffect( () => {
    async function fetchDates() {
      const data = await getDatesByUser(user.uid);
      setDates(Object.keys(data));
      setpastentries(Object.entries(data));
    }
    fetchDates();
  }, [])



  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleSelect = (date) => {
    // setAnchorEl(null);
    const values = pastentries.filter((entry) => entry[0] === date)[0][1];
    props.setPastValues(values);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        Past Entries
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        {dates.map((date) => (
          <MenuItem key={date} selected={date === selectedDate} onClick={() => {handleSelect(date)}}>
            {date}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}