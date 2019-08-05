import React from 'react'
import { Box, Button } from 'grommet'
import { Cycle, Alert } from 'grommet-icons'
import InputForm from './InputForm'
import ForgotWrapper from './ForgotWrapper';

const Forgot = ({ error = { server: null, email: null }, loading }) => {
  const [email, setEmail] = React.useState(false);
  const onConfirm = () => {
    console.log('Well Done',email)
  }

  return (
    <ForgotWrapper
      ErrorMsg={error.server && <p style={{ color: 'red' }}>{error.server}</p>}
      InputEmail={<InputForm type='email' getValue={setEmail} error={error.email} />}
      ConfirmButton={<Button
        style={{ borderRadius: '0' }}
        fill
        label={loading ? 'Cargando' : 'Enviame una nueva Contraseña'}
        color="status-ok"
        primary={true}
        reverse={loading}
        hoverIndicator={{ background: 'status-ok' }}
        icon={loading ? <Box animation={{
          "type": "jiggle",
          "delay": 100,
          "duration": 1000,
          "size": "large"
        }} ><Cycle /></Box> : <Alert />}
        onClick={() => onConfirm()}
      />}
    />
  )
}
export default Forgot;