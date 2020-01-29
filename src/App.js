import React from 'react';
import './App.css';
import MenuSuperior from "./components/MenuSuperior/MenuSuperior";
import Sessao1 from "./components/Sessao1/Sessao1";
import Sessao2 from "./components/Sessao2/Sessao2";
import Sessao3 from "./components/Sessao3/Sessao3";
import { Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App" style={{height: '100vh'}}>
      <div className='row' style={{marginRight: '0'}}>
        <div className='col' style={{padding: '0'}}>
          <MenuSuperior/>
        </div>
      </div>
      <div className='container-fluid' id='content' style={{height: '100%'}}>
        <div className='row' style={{height: '80%'}}>
          <div className='col'>         
            <Switch>
              <Route path='/Sessao1' component={Sessao1}/>
              <Route path='/Sessao2' component={Sessao2}/>
              <Route path='/Sessao3' component={Sessao3}/>
            </Switch>
          </div>
        </div>        
       </div>
    </div>
  );
}

export default App;
