import React from 'react';
import './Login.css';
import Api from '../../Api';

export default ({ onReceive }) => {
    const handleFacebookLogin = async () => {
        let result = await Api.fbPopup();

        if(result) {
            onReceive(result.user);
        } else {
            alert("Erro na autenticação");
        }
    }

    return (
        <div className="login">
            <div className="login--title">Clique para acessar</div>
            <button onClick={ handleFacebookLogin }>Logar com o Facebook</button>
        </div>
    );
}
