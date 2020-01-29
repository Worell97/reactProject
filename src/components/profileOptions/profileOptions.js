import React from 'react';
import { Link } from 'react-router-dom';

const AccountIcon = '../../img/Account_Icon.png';
const SettingsIcon = '../../img/Settings_Icon.png';
const ExitIcon = '../../img/Exit_Icon.png';  


export default function ProfileOptions(props){
    return(
        <div className='form rounded-lg' style={{margin: '1rem', width: '155px', height: '340px'}}>
            <div className='row' style={{width: '298.11px', marginLeft: '0'}}>
            </div>
            <div className="row">
                <div className="UserName">Oscar</div>     
            </div> 
            <OptionList onClickLogout={props.onClick}/>
        </div>
    );
}


function OptionList(props){
    return(
    <div className="row">
            <OptionListItem name='Account'/>
            <OptionListItem name='Settings'/>
            <OptionListItem name='Exit' onClick={props.onClickLogout}/>
    </div>        
    )
}

function OptionListItem(props){
    return(
    <div className='row' style={{width: '100%'}}>            
        <div className='col' style={{maxWidth: '30%', marginLeft: '1rem'}}>
            <ImgIcons IconName={props.name}/>
        </div>
        <div className='col'>
            <Link to={props.name === 'Sair' ? '/':'/'+props.name} onClick={props.onClick}>{props.name}</Link>
        </div>
    </div>
    )
}

function ImgIcons(props){ 
    switch (props.IconName) {
        case 'Account':
            return <img src={AccountIcon} className={props.IconName+'_Icon'}alt=''/>;  
        case 'Settings':
            return <img src={ SettingsIcon} className={props.IconName+'_Icon'}alt=''/>;  
        case 'Exit':
            return <img src={ ExitIcon} className={props.IconName+'_Icon'}alt=''/>;  
        default:
            return null;
    }
}