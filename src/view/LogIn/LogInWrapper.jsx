import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Grid, Form, Heading, Text } from 'grommet';

const LogInWrapper = ({ ErrorMsg, InputEmail, InputPassword, RememberPassword, ConfirmButton }) => {


  return (
    <Main>
      <Box
        align="center"
        justify="center"
        pad="small"
        animation={{ "type": "pulse", "size": "small" }}
      >
        <Heading color="accent-2" textAlign="center">
          Entra a SEOSEMAPI!
          </Heading>
        <Text color="black">
          Para entrar a SEOSEMAPI ingresa tus credenciales:
          </Text>
      </Box>
      {ErrorMsg}
      <FormCentered>
        <Grid alignContent="start">
          {InputEmail}
          {InputPassword}
          {RememberPassword}
        </Grid>
        <Box align="center" justify="center" pad="small">
          <Text color='grey'>
            Si aun no tienes cuenta entra acá:
                </Text>
          <Link to="/inscribete" style={{color:'white'}}>Regístrate</Link>
          <Box
            align="center"
            justify="between"
            pad={{ "top": "medium" }}
            direction="row"
            wrap={true}
            alignSelf="stretch"
            gap="medium"
          >
            {ConfirmButton}
          </Box>
        </Box>
        <Link to="/recuperar" style={{color:'white'}}>Olvidaste tu Contraseña?</Link>
      </FormCentered>
    </Main>
  )
}
export default LogInWrapper;

const Main = ({ children = undefined, ...rest }) => (
  <Centered
    as='main'
    pad="small"
    alignSelf="stretch"
    basis="full"
    fill="vertical"
    background={{ "color": "accent-1", "opacity": "medium", "position": "center" }}
    {...rest}
  >
    <Grid align="center" alignContent="center" justify="center">
      {children}
    </Grid>
  </Centered>
);

const FormCentered = ({ children = undefined, ...rest }) => (
  <Box
    align="center"
    justify="center"
    pad="small"
    basis='1/2'
    width='medium'
  >
    <Form>
      <Box
        align="center"
        justify="center"
        pad="small"
        round="xsmall"
        animation="slideDown"
        background={{ "color": "dark-1", "dark": true, "position": "center" }}
        elevation="small"
      >
        {children}
      </Box>
    </Form>
  </Box>
);

const Centered = ({ children = undefined, ...rest }) => (
  <Box
    align="center"
    justify="center"
    {...rest}
  >
    {children}
  </Box>
);