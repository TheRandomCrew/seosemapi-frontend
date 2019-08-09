import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

import './styles.css'

const LogIn = ({ error = { server: null, email: null, password: null }, loading, setEmail, setPassword, onLogIn }) => {
  const onChange = (e) => {
    const { target: { value, name } } = e;
    if(name === 'email') setEmail(value);
    else if(name === 'password') setPassword(value)
  }

  return (
    <div className="seo-alternative-b">
      <div className="continer-fluid ">
        <h1>Entra a SEOSEMAPI!</h1>
        <p>Para entrar a SEOSEMAPI ingresa tus credenciales:</p>
      </div>
      {error.server && <p style={{ color: 'red' }}>{error.server}</p>}
      <main className="container-fluid seo-form seo-black-b">
        <form>
          <input name="email" type='email' onChange={onChange} error={error.email} />
          <input name="password" type='password' onChange={onChange} error={error.password} />
        </form>
      </main>

      Si aun no tienes cuenta entra acá:

      <Link to="/inscribete" style={{color:'white'}}>Regístrate</Link>
      <button onClick={() => onLogIn()}>
        Tu siempre
      </button>
      <Link to="/recuperar" style={{color:'white'}}>Olvidaste tu Contraseña?</Link>
    </div>
  )
}

export default LogIn;