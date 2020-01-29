import React from 'react';
import Popover from '@material-ui/core/Popover';
import Login from "../login/login";
import ProfileOptions from '../profileOptions/profileOptions';
import AccountIcon from 'C:/Users/oscar.filho/OneDrive/ProjetosOscar/projeto2/src/img/Account_Icon.png';

export default function LoginPopover(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>                        
      {
        props.connected ?  
        <button onClick={handleClick} style={{width: '40px', height: '40px',borderRadius: '50%', padding: '0', border: '0'}}>  
            <img src={AccountIcon} alt='' style={{width: '40px', height: '40px', borderRadius: '50%'}}/>   
        </button> 
        : 
        <button className='btn btn-light float-sm-left' onClick={handleClick}>Log in</button>          
      }
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
      >
      {props.connected ? <ProfileOptions onClick={props.onClick}/> : <Login onClick={props.onClick}/>}
      </Popover>
    </div>
  );
}
