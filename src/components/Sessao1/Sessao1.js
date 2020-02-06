import React, { Component } from 'react';
import Img1 from '../../img/ImgExemplo1.jpg'


class Sessao1 extends Component{
    render(){
        return(
        <form> 
            <div className='card'>
                <div className='card-header'>
                    Imagem de exempro
                </div>
                <div className='card-body'>
                    <img src={Img1} alt=''></img>
                </div>
                <div className='card-footer'>
                    Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado.
                </div>
            </div>           
        </form>
        );
    }
}

export default Sessao1;