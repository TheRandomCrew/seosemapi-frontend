import React, { useState } from 'react';

/** Import logic components */
import { useFetch } from "../util/hooks";

/** Import view components */
import { SignUp as SignUpView } from '../../view';

const SignUp = () => {
    /** Hooks States */
    const [email, setEmail] = useState('');
    const [username, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const [layer, setLayer] = useState(false);
    const [error, setError] = useState('')

    const [data, { loading, setStart }] = useFetch(`http://54.39.176.127:35566/user/create?email=${encodeURIComponent(email)}&username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}&secret_key=${encodeURIComponent("OHLuUV~L0jci+=_qw`d=|b?lc`p?'b")}`);

    const onLogIn = () => {
        if (!username) { return setError({ username: 'Debe ingresar un usuario' }) }
        if (!email) { return setError({ email: 'Debe ingresar un email' }) }
        if (!password) { return setError({ password: 'Debe ingresar una contraseña' }) }
        if (!passwordConfirm) { return setError({ passwordConfirm: 'Debe ingresar una contraseña de confirmacion vacio' }) }
        if (password !== passwordConfirm) { return setError({ passwordConfirm: 'Las constraseñas no coinciden' }) }
        
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