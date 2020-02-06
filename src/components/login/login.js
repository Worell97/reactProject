import React from 'react';

function Login(props){
    return(
    <div className='form-row rounded-lg' style={{margin: '1rem', backgroundColor: '#677DB7', width: '298.11px', height: '340px'}}>
        <div className="box-parent-login">
            <div className="well bg-white box-login">
                <h1 className="lg-login-logo">Oscar</h1>
                <form>
                    <fieldset>        
                        <div className="form-group ls-login-user">
                            <label htmlFor="userLogin">Usuário</label>
                            <input className="form-control ls-login-bg-user input-lg" id="userLogin" type="text" aria-label="Usuário" placeholder="Usuário"/>
                        </div>
        
                        <div className="form-group ls-login-password">
                            <label htmlFor="userPassword">Senha</label>
                            <input className="form-control ls-login-bg-password input-lg" id="userPassword" type="password" aria-label="Senha" placeholder="Senha"/>
                        </div>
        
                        <a href="#" className="ls-login-forgot">Esqueci minha senha</a>
        
                        <input type="submit" value="Entrar" className="btn btn-primary btn-lg btn-block" onClick={props.onClick}/>
                        <p className="txt-center ls-login-signup">Não possui um usuário?
                            <a href="#">Cadastre-se agora</a>
                        </p>        
                    </fieldset>
                </form>
            </div>
        </div>
    </div>
    );
}

export default Login;