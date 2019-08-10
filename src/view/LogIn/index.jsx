import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './styles.css'

const LogIn = ({ error = { server: null, email: null, password: null }, loading, setEmail, setPassword, onLogIn }) => {
  const [emailF, setEmailF] = useState(false)
  const [passwordF, setPasswordF] = useState(false)

  const onChange = (e) => {
    const { target: { value, name } } = e;
    if (name === 'email') setEmail(value);
    else if (name === 'password') setPassword(value)
  }

  return (
    <main className={`SEO-blue-b login-background`}>
      <div className="container">
        <div className="row tete justify-content-center">

          
          <HeaderLogin className="p-5"/>

            <form className="p-sm-3 p-md-5 align-items-center login-form ">
              <h1>Ingresar</h1>
              <div className="txtb">
                <input name="email" className={emailF ? `focus` : ``} type='email' error={error.email}
                  onBlur={({ target }) => target.value === '' ? setEmailF(false) : null}
                  onFocus={() => setEmailF(true)}
                  onChange={onChange}
                />
                <span className={`labelHolder`} data-placeholder="Correo"></span>
              </div>
              <div className="txtb">
                <input name="password" className={passwordF ? `focus` : ``} type='password' error={error.password}
                  onBlur={({ target }) => target.value === '' ? setPasswordF(false) : null}
                  onFocus={() => setPasswordF(true)}
                  onChange={onChange}
                />
                <span data-placeholder="Contraseña"></span>
              </div>
              <input type="submit" className="logbtn" value="Ingresar" onClick={() => onLogIn()} />
              {error.server && <p style={{ color: 'red' }}>{error.server}</p>}
              <div className="bottom-text">
                No tienes una cuenta ? <Link to="./inscribete">Registrate</Link>
                <br /><br />
                Olvidaste tu Contraseña? <Link to="/recuperar" >Recuperala</Link>
              </div>
              <div className="bottom-text">
              </div>
            </form>
          
          
        </div>
      </div>
    </main>
  )
}

const HeaderLogin = () => (
  <div className="contHeader">
    <h1 className="SEO-text-pulse">Entra a <span style={{ color: '#FFD063' }}>Seosemapi</span><span style={{ color: '#3b5998' }}>!</span></h1>
    <p className="SEO-text-center">Ingresa tus credenciales:</p>
  </div>
);

export default LogIn;