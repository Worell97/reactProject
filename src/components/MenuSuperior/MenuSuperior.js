import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import LoginPopover from './../popover/popoverLogin';

function MenuSuperior(){
    const [isConnected, setConnected] = useState(false);

    function handleClickLogin(){
        setConnected(!isConnected);
    }
    return (
    <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav">
                <span className="navbar-toggler-icon"></span>
            </button>
            <LoginPopover connected={isConnected} onClick={handleClickLogin}/> 
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mr-auto"> 
                    <li className='nav-item'>
                        <Link to='/Sessao1' className='nav-link'>Sessao 1</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/Sessao2' className='nav-link'>Sessão 2</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/Sessao3' className='nav-link'>Sessão 3</Link>
                    </li>
                </ul> 
            </div>
        </nav>  
        <LeftBar CanShow={false}/>        
    </>
    )
}
export default MenuSuperior;

function LeftBar(props){
    if(!props.CanShow){
        return null;
    }

    return(
        <div className="dropdown-menu-sm-left text-white" style={{height: '100vh', width: '20rem', backgroundColor: '#343a40'}}>
            <div className="HeaderProfile">
                <div className="ProfilieIcon">
                    O
                </div>
                <div className="UserName">Oscar</div>                
                <div className="UserAddress">worell-oscar@hotmail.com.br</div>
            </div>
            <OptionList/>
        </div>
    )
}

function OptionList(props){
    return(
    <div className="Options">
        <ul className="navbar-nav mr-auto"> 
            <OptionListItem icon='./../../img/Account_Icon' name='Account' />
            <OptionListItem icon='./../../img/Settings_Icon' name='Settings' />
            <OptionListItem icon='./../../img/Logout_Icon' name='Logout' />
        </ul>    
    </div>        
    )
}

function OptionListItem(props){
    return(
    <li className='nav-item'>
        <div className='col' style={{maxWidth: '30%', marginLeft: '1rem'}}>
            <img src={props.icon} alt='' className={props.name+"_Icon"}/>
        </div>
        <div className='col'>
            <Link to={'/'+props.name} onClick={props.onClick}>{props.name}</Link>
        </div>
    </li>
    )
}