import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Grid, Text } from 'grommet';
import { Login } from 'grommet-icons';
import Cards from './Cards'

const Home = () => (
    <Grid fill rows={["auto", "flex", 'auto']} id='Home'>
        <NavHome>
            <Text size="large">SEOSEMAPI LOGO</Text>

            <Grid columns={['auto', 'flex']}>
                <Login /> <Link to='./entra'>Ingresa</Link>

            </Grid>
        </NavHome>

        <BodyHome>
            <h1>
                Somos SEOSEMAPI
            </h1>

            <p>
                Es la Mejor Alternativa para el Planificador de Palabras Claves de Googgle y Otras Herramientas de Palabra Claves.
            </p>
            <Cards />
            <p>
                Para tener acceso a todas nuestras caracteristicas, ingresa  o crea tu cuenta.
            </p>

            <p>
                Visita nuestra Tienda: 
            </p>
            <a href='https://server.seosemapi.com/' >
                SEOSEMAPI Store
            </a>
            {/* <Store /> */}
        </BodyHome>
        <FooterHome>
            <Text weight="bold" size="large" color='violet'>
                SEOSEMAPI
            </Text>
        </FooterHome>
    </Grid>
)

export default Home;

const NavHome = ({ children = undefined }) => (
    <Box
        tag='nav'
        direction="row"
        align="center"
        justify="between"
        pad={{ horizontal: "medium", vertical: "small" }}
        background="brand"
    >
        {children}
    </Box>
);

const BodyHome = ({ children = undefined }) => (
    <Box direction="row" justify="center" tag='main'>
        <Box overflow="auto" width="large">
            <Grid fill>
                {children}
            </Grid>
        </Box>
    </Box>
);

const FooterHome = ({ children = undefined }) => (
    <Box tag="footer" pad="0" margin='0' background="dark-1" fill>
        {children}
    </Box>
);