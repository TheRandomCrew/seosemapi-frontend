import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import SEO from './styles/styles.module.css'
import SP from './styles/spinner.module.css'

const Forgot = ({ error = { server: null, email: null }, loading }) => {
  const [email, setEmail] = React.useState(false);
  const [emailF, setEmailF] = useState(false)
  const onConfirm = () => {
    console.log('Well Done', email)
  }

  const onChange = (e) => {
    const { target: { value, name } } = e;
    if (name === 'email') setEmail(value);
  }
  
  return (
    <main className={`SEO-blue-b ${SEO.background}`}>
      <div className="container">
        <div className="row justify-content-center">

          <HeaderRemember error={error.server} />

          <form onSubmit={e => e.preventDefault()} className={`p-sm-3 p-md-5 align-items-center ${SEO.lForm}`}>
            <h1>Recuperar contrase;a</h1>
            <div className={SEO.textLabel}>
              <input name="email" className={emailF ? `${SEO.focus}` : ``} type='email' error={error.email}
                onBlur={({ target }) => target.value === '' ? setEmailF(false) : null}
                onFocus={() => setEmailF(true)}
                onChange={onChange}
              />
              <span className={`labelHolder`} data-placeholder="Correo"></span>
            </div>
            <button type="submit" className={`${SEO.btnSubmit} ${loading ? SEO.btnLoad: null}`} onClick={() => onConfirm()}>
              {loading ? <Spinner/> : 'Recuperar'}
            </button>
            <div className={SEO.linkTo}>
              ¿ Ya tienes una cuenta ? <Link to="./entra">Ingresa</Link>
            </div>
            
          </form>

        </div>
      </div>
    </main>
  )
}

const HeaderRemember = ({ error }) => {
  /** Hook State */
  const [errorEfect, setErrorEfect] = useState('d-none')
  console.log(error);
  useEffect(()=>{
    if( error !== null && error !== undefined && error !== false && error.length !== 0 ) 
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
        <h1 className={`SEO-text-center ${SEO.textPulse}`}><span style={{ color: '#FFD063' }}>Seosemapi</span><span style={{ color: '#3b5998' }}>!</span></h1>
        <p className="SEO-text-center">Enviaremos un link de recuperación a tu correo</p>
      </div>
    </Fragment>
  )
}

const Spinner = () =>(
  <Fragment>
      <div className={SP.ldsRoller}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
  </Fragment>
);

export default Forgot;