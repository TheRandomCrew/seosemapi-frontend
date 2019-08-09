import React from 'react'

import { Box, Button, CheckBox } from 'grommet'
import { Login, Cycle } from 'grommet-icons'

import InputForm from './InputForm'
import LogInWrapper from './LogInWrapper';

const LogIn = ({ error = { server: null, email: null, password: null }, loading, setEmail, setPassword, onLogIn }) => {
  const [checked, setChecked] = React.useState(false);
  
  const onConfirm = () => {
    onLogIn()
  }

  return (
    <LogInWrapper
      ErrorMsg={error.server && <p style={{ color: 'red' }}>{error.server}</p>}
      InputEmail={<InputForm type='email' getValue={setEmail} error={error.email} />}
      InputPassword={<InputForm type='password' getValue={setPassword} error={error.password} checked={checked}/>}
      RememberPassword={<CheckBox
        toggle
        checked={checked}
        label="Recordar contraseña?"
        onChange={(event) => setChecked(event.target.checked)}
      />}
      ConfirmButton={<Button
        style={{ borderRadius: '0' }}
        fill
        label={loading ? 'Cargando' : 'Confirmar'}
        color="status-ok"
        primary={true}
        reverse={loading}
        hoverIndicator={{ background: 'status-ok' }}
        icon={loading ? <Box animation={{
          "type": "jiggle",
          "delay": 100,
          "duration": 1000,
          "size": "large"
        }} ><Cycle /></Box> : <Login />}
        onClick={() => onConfirm()}
      />}
    />
  )
}
export default LogIn;