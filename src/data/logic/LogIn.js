import React, { useState } from 'react';
import { Redirect } from 'react-router-dom'
import { history } from '../../router/router'

/** Import logic functions */
import { useFetch } from "../util/hooks";
import tokenService from '../../router/token'

/** Import view components */
import { LogIn as LoginView } from '../../view';

const LogIn = () => {
    /** Hooks States */
    const [localEmail, setEmail] = useState('');
    const [localPassword, setPassword] = useState('');
    const [error, setError] = useState({})

    const [data, { loading, setStart }] = useFetch(`https://data.seosemapi.com/auth/login?email=${encodeURIComponent(localEmail)}&password=${encodeURIComponent(localPassword)}`);

    const onLogIn = () => {
        /** Verifies the form fields and active the hook state "start" of useFetch*/
        if (!localEmail) setError({ email: 'Email no puede estar vacio' });
        if (!localPassword) setError({ email: 'Password no puede estar vacio' });
        
        setStart(true);
    };

    React.useLayoutEffect(() => {
        /** Check if the user has already logged or if there was an error */
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
        return () => {setStart(false)};
    }, [data, setStart, localEmail, localPassword]);

    React.useEffect(() => {
        /** If the user is registered replace the browsing history to the user's dashborad */
        if (localStorage.hasOwnProperty('lscache-seosemapi')) {
            try {
                history.replace(`/dashboard/${encodeURIComponent(localEmail.split('@')[0])}`)
            } catch (e) {
                console.error(e)
            }
        }
    })
    return tokenService.get() ? (
        /** If the user is logged redirect to the user's dashboard */
        <Redirect to={`/dashboard/${encodeURIComponent(localEmail.split('@')[0])}`} />
    ) : (
        /** If the user is not logged show the Login Form */
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