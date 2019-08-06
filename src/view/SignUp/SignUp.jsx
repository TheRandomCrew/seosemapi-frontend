import React from 'react'
import { Link } from 'react-router-dom'

import { Box, Heading, Button, Layer,  Text } from 'grommet'
import { FormCheckmark, Disc } from 'grommet-icons'

/** Import view components */
import InputForm from './InputForm'
import SignUpWrapper from './SignUpWrapper';

const SignUp = ({
    username, setUser, layer, error, onLogIn=()=>{}, loading,
    setEmail=()=>{}, setPassword=()=>{}, setPasswordConfirm=()=>{}, setLayer, data
}) => {

    return (
        <SignUpWrapper
            ErrorMsg={error && <p style={{ color: 'red' }}>{error}</p>}
            nameInput={<InputForm type='user' getValue={setUser} />}
            EmailInput={<InputForm type='email' getValue={setEmail} />}
            PasswordInput={<InputForm type='password' getValue={setPassword} />}
            ConfirmInput={<InputForm type='passwordConfirm' getValue={setPasswordConfirm} />}
            LoginButton={<Button
                style={{ borderRadius: '0' }}
                fill
                label={loading ? 'Cargando' : "Confirmar"}
                color="status-ok"
                primary={true}
                reverse={loading}
                hoverIndicator={{ background: 'status-ok' }}
                icon={loading ? <Box animation={{
                    "type": "pulse",
                    "delay": 100,
                    "duration": 500,
                    "size": "large"
                }} ><Disc /></Box> : <FormCheckmark />}
                onClick={() => onLogIn()}
            />}
            PortalLayer={layer && (
                <Layer
                    position="center"
                    modal
                    onEsc={() => setLayer(false)}
                    onClickOutside={() => setLayer(false)}
                >
                    <Box pad="medium" gap="small" width="medium">
                        <Heading level={3}>Bien Hecho {username} </Heading>
                        Guarda la siguiente API KEY que te permitira acceder a todos nuestros servicios. Si la olvidas o pierdes no hay forma de recuperarla
                        <pre>{data.api_key}</pre>
                        <Text>ahora dirigete a:  </Text>
                        <Link to="/entra">Ingreso</Link>
                    </Box>
                </Layer>
            )}
        />
    )
}

export default SignUp;