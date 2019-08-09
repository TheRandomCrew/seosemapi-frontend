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
    <form class="login-form">
      <div className="txtb">
        <input name="email" type='email' onChange={onChange} error={error.email} />
        <span data-placeholder="email"></span>
      </div>

      <div className="txtb">
        <input name="password" type='password' onChange={onChange} error={error.password} />
        <span data-placeholder="password"></span>
      </div>

      <input type="submit" className="logbtn" value="Ingresar" />

      <div className="bottom-text">
        Don't have account ? <Link to="./inscribete">Registrate</Link>
      </div>
    </form>  
  )
}

// const HeaderLogin = ({ error = { server: null, email: null, password: null }})=>{
//   <div className="seo-alternative-b">
//       <div className="continer-fluid ">
//         <h1>Entra a SEOSEMAPI!</h1>
//         <p>Para entrar a SEOSEMAPI ingresa tus credenciales:</p>
//       </div>
//       {error.server && <p style={{ color: 'red' }}>{error.server}</p>}

//       <button onClick={() => onLogIn()}></button>
//       <Link to="/recuperar" style={{color:'white'}}>Olvidaste tu Contraseña?</Link>
//     </div>
// };

export default LogIn;