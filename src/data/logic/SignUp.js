import React, { useState } from 'react';
import { SignUp as SignUpView } from '../../view';
import { useFetch } from "../util/hooks";

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [username, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const [layer, setLayer] = useState(false);


    const [data, { loading, setStart }] = useFetch(`https://data.seosemapi.com/user/create?email=${encodeURIComponent(email)}&username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}&secret_key=${encodeURIComponent("OHLuUV~L0jci+=_qw`d=|b?lc`p?'b")}`);
    const [error, setError] = useState('')

    const onLogIn = () => {
        if (!email) { return setError({ email: 'Email vacio' }) }
        if (!username) { return setError({ username: 'Usuario vacio' }) }
        if (!password) { return setError({ password: 'password vacio' }) }
        if (!passwordConfirm) { return setError({ passwordConfirm: 'Password de confirmacion vacio' }) }
        if (password !== passwordConfirm) { return setError({ passwordConfirm: 'Los password no coinciden' }) }
        setStart(true)
    }

    React.useLayoutEffect(() => {
        if (data.length > 0 || data[1] === 200) {
            setStart(false);
            setLayer(true);
        } else {
            console.log(data)
            if (data.detail) {
                setError(data.detail.message);
            }
        }
        return () => {
            setStart(false);
        };
    }, [data, setStart]);

    return (
        <SignUpView
            email={email}
            username={username}
            password={password}
            passwordConfirm={passwordConfirm}
            data={data}
            loading={loading}
            layer={layer}
            error={error}
            setEmail={setEmail}
            setUser={setUser}
            setPassword={setPassword}
            setPasswordConfirm={setPasswordConfirm}
            onLogIn={onLogIn}
            setLayer={setLayer}
        />
    )
}

export default SignUp