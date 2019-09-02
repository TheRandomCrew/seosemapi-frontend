import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import SEO from './styles/styles.module.css'
import SP from './styles/spinner.module.css'

/** Hook Component */
const LogIn = ({ error = { server: null, email: null, password: null }, loading, setEmail, setPassword, onLogIn }) => {
  /** Hook States */
  const [emailF, setEmailF] = useState(false)
  const [passwordF, setPasswordF] = useState(false)
  const [rememberCheck, setRememberCheck] = useState(false)

  const onChange = (e) => {
    const { target: { value, name, checked } } = e;
    if (name === 'email') setEmail(value);
    else if (name === 'password') setPassword(value)
    else if (name === "rmb") setRememberCheck(checked)
  }

  return (
    <main className={`SEO-blue-b ${SEO.background}`}>
      <div className="container">
        <div className="row justify-content-center">

          <HeaderLogin className="p-5" error={error.server} />

          <form onSubmit={e => e.preventDefault()} className={`p-sm-3 p-md-5 align-items-center ${SEO.lForm}`}>
            <h1>Ingresar</h1>
            <div className={SEO.textLabel}>
              <input name="email" className={emailF ? `${SEO.focus}` : ``} type='email' error={error.email}
                onBlur={({ target }) => target.value === '' ? setEmailF(false) : null}
                onFocus={() => setEmailF(true)}
                onChange={onChange}
              />
              <span className={`labelHolder`} data-placeholder="Correo"></span>
            </div>
            <div className={SEO.textLabel}>
              <input name="password" className={passwordF ? `${SEO.focus}` : ``} type='password' error={error.password}
                onBlur={({ target }) => target.value === '' ? setPasswordF(false) : null}
                onFocus={() => setPasswordF(true)}
                autoComplete={rememberCheck?'on':'new-password'}
                onChange={onChange}
              />
              <span data-placeholder="Contraseña"></span>
            </div>
            <input type="checkbox" name="rmb" id="rmb" className={SEO.check} onChange={onChange}/>
            <label htmlFor="rmb" className={SEO.checkLabel}>¿Recordar contraseña?</label>
            <button type="submit" className={`${SEO.btnSubmit} ${loading ? SEO.btnLoad: null}`} onClick={() => onLogIn()}>
              {loading ? <Spinner/> : 'Ingresar'}
            </button>
            <div className={SEO.linkTo}>
              ¿ No tienes una cuenta ? <Link to="./inscribete">Registrate</Link>
              <br /><br />
              ¿ Olvidaste tu contraseña ? <Link to="/recuperar">Recuperala</Link>
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}
  
/** Hook  */
const HeaderLogin = ({ error }) => {
  /** Hook State */
  const [errorEfect, setErrorEfect] = useState('d-none')

  useEffect(()=>{
    if( error !== undefined && error !== false && error.length !== 0 ) 
      setErrorEfect('d-flex');
  },[error, errorEfect]);

  return(
    <Fragment>
      <div className={`${errorEfect} justify-content-center align-items-center SEO-text-center ${SEO.error}`}>
        <small>
          {error}
        </small>
      </div>
      <div className={SEO.contHeader}>
        <h1 className={SEO.textPulse}>Entra a <span style={{ color: '#FFD063' }}>Seosemapi</span><span style={{ color: '#3b5998' }}>!</span></h1>
        <p className="SEO-text-center">Ingresa tus credenciales:</p>
      </div>
    </Fragment>
  ); 
}

const Spinner = () =>(
  <Fragment>
      <div className={SP.ldsRoller}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
  </Fragment>
);

export default LogIn;