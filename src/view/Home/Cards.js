import React from 'react';
import { Box } from 'grommet';
import { Favorite, Analytics, Database } from 'grommet-icons'

function Cards() {
    return (
        <CardDeck>
            <Card background="dark-3">
                <Box
                    animation={{
                        "type": "jiggle",
                        "delay": 1000,
                        "duration": 10000,
                        "size": "large"
                    }}
                >
                    <Analytics size="large" color="lime" />
                </Box>
                <p>Metricas que necesitas</p>
            </Card>
            <Card
                background={{ color: "light-2", opacity: "strong" }}
            >
                <Box
                    animation={{
                        "type": "pulse",
                        "delay": 100,
                        "duration": 800,
                        "size": "large"
                    }}
                >
                    <Favorite size="large" color='red' />
                </Box>
                <p>Cuidadosamente diseñado pensando en ti</p>
            </Card>
            <Card background="brand">
                <Box
                    animation={'jiggle'}
                >
                    <Database size="large" color="navy" />
                </Box>
                <p>Datos seguros y confiables</p>
            </Card>
        </CardDeck>
    )
}

export default Cards;

const CardDeck = ({ children = undefined, ...rest }) => (
    <Box
        direction="row-responsive"
        align="center"
        {...rest}
    >
        {children}
    </Box>
)

const Card = ({ children = undefined, background, ...rest }) => (
    <Box
        pad="large"
        align="center"
        width='small'
        round
        gap="small"
        background={background}
        {...rest}
    >
        {children}
    </Box>
)