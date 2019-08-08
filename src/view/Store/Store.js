import React from 'react';
import { Box, Grid, Text, Button } from 'grommet';
import Checkout from "./Checkout";
import { Mail } from 'grommet-icons'
import { Redirect } from 'react-router-dom'
import StripeImage from './constants/blue-on-dark.png'
function Store() {
    const [redirect, setRedirect] = React.useState(false)
    return (
        <Box>
            Prueba nuestra conexion con Stripe
            <a href='https://connect.stripe.com/oauth/authorize?response_type=code&client_id=ca_FSFiZyon5BeQnDUaQJtWNOG5LUCxiQmd&scope=read_write' >
                <input type="image" name="<Name of the image button >" src={StripeImage} border="border of the image" alt="text" />
            </a>
        <Grid columns={['small', 'small', 'small', 'small']} >
            {redirect && <Redirect to='/inscribete' />}
            <Box
                pad="large"
                align="center"
                width='small'
                background="green"
                gap="small"
            >
                <Text alignSelf='center' color='white'>Plan Gratuito</Text>
                <Text color='white'>funciones basicas</Text>
                <Button
                    hoverIndicator={{
                        background: 'status-ok',
                        textColor: 'white'
                    }}
                    primary
                    style={{ borderRadius: '0' }}
                    icon={<Mail />}
                    label='Suscribete'
                    onClick={() => setRedirect(true)}
                />
            </Box>
            <Box
                pad="large"
                align="center"
                width='small'
                background="blue"
                gap="small"
            >
                <Text alignSelf='center' color='white'>Plan Developer</Text>
                <Text color='white'>solo 50€ al mes</Text>
                <Checkout
                    name='plan Developer'
                    description='50€/mes'
                    amount={50}
                />
            </Box>
            <Box
                pad="large"
                align="center"
                width='small'
                background="red"
                gap="small"
            >
                <Text alignSelf='center' color='white'>Plan StartUp</Text>
                <Text color='white'>120€ al mes</Text>
                <Checkout
                    name='Plan StartUp'
                    description='120€/mes'
                    amount={120}
                />
            </Box>
            <Box
                pad="large"
                align="center"
                width='small'
                background="purple"
                gap="small"
            >

                <Text alignSelf='center' color='white'>Plan Business</Text>
                <Text color='white'>210€ al mes</Text>
                <Checkout
                    name='Plan Business'
                    description='210€/mes'
                    amount={210}
                />
            </Box>
        </Grid>
        </Box>
    )
}

export default Store;