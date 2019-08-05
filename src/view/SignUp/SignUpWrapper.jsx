import React from 'react'
import { Box, Grid, Form, Heading, Text } from 'grommet'
import { Link } from 'react-router-dom'


const SignUpWrapper = ({
    ErrorMsg,
    nameInput,
    EmailInput,
    PasswordInput,
    ConfirmInput,
    LoginButton,
    PortalLayer
}) => {
    return (
        <Box
            pad="small"
            alignSelf="stretch"
            basis="full"
            fill="horizontal"
            background={{ "color": "accent-1", "opacity": "medium", "position": "center" }}
        >
            <Grid align="center" alignContent="center" justify="center">
                <Box
                    pad="small"
                    animation={{ "type": "pulse", "size": "small" }}
                >
                    <Heading color="accent-2" textAlign="center">
                        Regístrate en SEOSEMAPI!
                    </Heading>
                    <Text weight="normal" color="dark-3">
                        Para entrar a SEOSEMAPI ingresa las credenciales que usaras:
                    </Text>
                </Box>
                {ErrorMsg}
                <Box
                    pad="small"
                    basis='1/2'
                    width='medium'
                >
                    <Form>
                        <Box
                            align="center"
                            pad="small"
                            round="xsmall"
                            animation="slideUp"
                            background={{ "color": "dark-1", "dark": true, "position": "center" }}
                            elevation="small"
                        >
                            <Grid alignContent="start" columns={{ count: 'fit', size: '1/2' }}>
                                {nameInput}
                                {EmailInput}
                                {PasswordInput}
                                {ConfirmInput}
                            </Grid>
                            <Box align="center" justify="center" pad="small">
                                <Text color='grey'>
                                    Si aun no tienes cuenta entra acá:
                            </Text>
                                <Link to="/entra"  style={{color:'white'}}>Ingreso</Link>
                                <Box
                                    align="center"
                                    justify="between"
                                    pad={{ "top": "medium" }}
                                    direction="row"
                                    wrap={true}
                                    alignSelf="stretch"
                                    gap="medium"
                                >
                                    {LoginButton}
                                    {PortalLayer}
                                </Box>
                            </Box>
                        </Box>
                    </Form>
                </Box>
            </Grid>
        </Box>
    )
}


export default SignUpWrapper;