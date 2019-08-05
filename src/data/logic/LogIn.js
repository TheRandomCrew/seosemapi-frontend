import React, { useState } from 'react';
import { Redirect } from 'react-router-dom'
import { useFetch } from "../util/hooks";
import tokenService from '../../router/token'
import { history } from '../../router/router'
import { LogIn as LoginView } from '../../view';


const LogIn = () => {
    const [localEmail, setEmail] = useState('');
    const [localPassword, setPassword] = useState('');
    const [error, setError] = useState({})
    const [
        data, { loading, setStart }
    ] = useFetch(`https://data.seosemapi.com/auth/login?email=${encodeURIComponent(localEmail)}&password=${encodeURIComponent(localPassword)}`);

    const onLogIn = () => {
        if (!localEmail) setError({ email: 'Email no puede estar vacio' });
        if (!localPassword) setError({ email: 'Password no puede estar vacio' });
        setStart(true);
    };

    React.useLayoutEffect(() => {
        if (data.length > 0 || data[1] === 200) {
            tokenService.set({ email:localEmail, password:localPassword })
            setStart(false);
            history.replace(`/dashboard/${encodeURIComponent(localEmail.split('@')[0])}`)
        } else {
            if (data.detail) {
                console.log('data:\n ', data)
                setError({ server: data.detail.message });
            }
        };
        return () => {
            setStart(false);
        };
    }, [data, setStart, localEmail, localPassword]);

    React.useEffect(() => {
        if (localStorage.hasOwnProperty('lscache-seosemapi')) {
            try {
                history.replace(`/dashboard/${encodeURIComponent(localEmail.split('@')[0])}`)
            } catch (e) {
                console.error(e)
            }
        }
    })
    return tokenService.get() ? (
        <Redirect to={`/dashboard/${encodeURIComponent(localEmail.split('@')[0])}`} />
    ) : (
            <LoginView
                loading={loading}
                error={error}
                email={localEmail}
                password={localPassword}
                onLogIn={onLogIn}
                setEmail={setEmail}
                setPassword={setPassword}
            />
        )
}

export default LogIn