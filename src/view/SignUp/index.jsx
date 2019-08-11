import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

import ModalSignup from './ModalSignup';

import SEO from './styles/styles.module.css';
import SP from './styles/spinner.module.css';

const SignUp = ({ error, onLogIn, loading, username, layer, setUser, setEmail, setPassword, setPasswordConfirm, setLayer, data }) => {
    const [emailF, setEmailF] = useState(false)
    const [passwordF, setPasswordF] = useState(false)
    const [cPasswordF, setCPasswordF] = useState(false)
    const [userF, setUserF] = useState(false)

    const onChange = (e) => {
        const { target: { value, name } } = e;
        if (name === 'user') setUser(value)
        else if (name === 'email') setEmail(value)
        else if (name === 'password') setPassword(value)
        else if (name === 'cPassword') setPasswordConfirm(value)
    }
    return (
        <Fragment>
            <main className={`SEO-blue-b ${SEO.background}`}>
                <div className="container">
                    <div className="row justify-content-center">

                        <HeaderSignup layer={layer} error={error} />

                        <form onSubmit={e => e.preventDefault()} className={`${layer ? `d-none`:`null`} p-sm-3 p-md-5 align-items-center ${SEO.lForm}`}>
                            <h1>Registrate</h1>

                            <div className={SEO.textLabel}>
                                <input name="user" className={userF ? `${SEO.focus}` : ``} type='text' error={error.user}
                                    onBlur={({ target }) => target.value === '' ? setUserF(false) : null}
                                    onFocus={() => setUserF(true)}
                                    onChange={onChange}
                                />
                                <span className={`labelHolder`} data-placeholder="Usuario"></span>
                            </div>
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
                                    onChange={onChange}
                                />
                                <span data-placeholder="Contraseña"></span>
                            </div>
                            <div className={SEO.textLabel}>
                                <input name="cPassword" className={cPasswordF ? `${SEO.focus}` : ``} type='password' error={error.password}
                                    onBlur={({ target }) => target.value === '' ? setCPasswordF(false) : null}
                                    onFocus={() => setCPasswordF(true)}
                                    onChange={onChange}
                                />
                                <span data-placeholder="Confirmar Contraseña"></span>
                            </div>
                            <button type="submit" className={`${SEO.btnSubmit} ${loading ? SEO.btnLoad: null}`} onClick={() => onLogIn()}>
                                {loading ? <Spinner/> : 'Registrarse'}
                            </button>
                            

                            <div className={SEO.linkTo}>
                                ¿ Ya tienes una cuenta ? <Link to="./entra">Ingresa</Link>
                            </div>
                        </form>
                        
                        <ModalSignup layer={layer}/>
                    </div>
                </div>
            </main>
        </Fragment>
    )
}

const HeaderSignup = ({ error, layer }) => {
    /** Hook State */
    const [errorEfect, setErrorEfect] = useState('d-none')

    useEffect(()=>{
        if( error !== undefined && error !== false && error.length !== 0 ) 
        setErrorEfect('d-flex');
    },[error, errorEfect]);
    return (
        <Fragment>
            <div className={`${errorEfect} ${layer ? `d-none`:`null`} justify-content-center align-items-center SEO-text-center ${SEO.error}`}>
                <small>
                    {Object.values(error)[0]}
                </small>
            </div>
            <div className={`${SEO.contHeader}`}>
                <h1 className={SEO.textPulse}>Registrate en <span style={{ color: '#FFD063' }}>Seosemapi</span><span style={{ color: '#3b5998' }}>!</span></h1>
                <p className="SEO-text-center">Ingresa tus credenciales:</p>
            </div>
        </Fragment>
    )
}

const Spinner = () =>(
    <Fragment>
        <div className={SP.ldsRoller}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </Fragment>
);

export default SignUp;