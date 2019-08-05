import React from 'react';
import { Box, Grid, Text, Heading, Accordion, AccordionPanel } from "grommet";
import { LineChart, LineSeries } from 'reaviz';

const OverviewWrapper = ({ CheckMonthly, CheckDayly, email, PlanUse, chartsData, loading }) => {
    return (
        <Box align="center" justify="start" pad="small" animation="zoomIn" fill="horizontal" gap="xsmall">
            <Box align="center" justify="center" pad="small" fill="horizontal" background={{ "color": "light-1" }}>
                <Heading level="1">
                    Credenciales y Consumo
                </Heading>
            </Box>

            <Box align="center" justify="center" pad="small" direction="row-responsive" fill="horizontal" background={{ "color": "light-1" }} >
                <Grid columns={["small", "large"]} >
                    <Text weight="bold">
                        Credenciales
                    </Text>
                    <Accordion multiple>
                        <AccordionPanel
                            label={<Text size="large">API Login email</Text>}
                        >
                            <Box background="light-2" >
                                {email}
                            </Box>
                        </AccordionPanel>
                        {/* <AccordionPanel
                            label={
                                <Text size="xlarge" >
                                    API Key
                                </Text>
                            }
                        >
                            <Box background="light-2">
                                <Text size="small"> lsnel-sdf52sm-sdlasm6577</Text>
                            </Box>
                        </AccordionPanel> */}
                    </Accordion>
                </Grid>
            </Box>
            {PlanUse}
            <Box align="center" justify="center" pad="small" direction="row-responsive" fill="horizontal" background={{ "color": "light-1" }}>
                {CheckMonthly}
            </Box>
            <Box align="center" justify="center" pad="small" direction="row-responsive" fill="horizontal" background={{ "color": "light-1" }}>
                {CheckDayly}
            </Box>
            <Box align="center" justify="center" pad="small" fill="horizontal" background={{ "color": "light-1" }} round="xsmall" elevation="xsmall">
                <Box align="start" justify="start" pad="small" fill="horizontal" direction="row-responsive" border={{ "side": "all" }}>
                    <Text weight="bold">
                        Búsquedas Mensuales:
                </Text>
                    {/* <Select options={["", "Febrero"]} searchPlaceholder="Selecciona un mes" /> */}
                </Box>

                {loading && 'Loading...'}
                <LineChart
                    data={chartsData}
                    series={<LineSeries interpolation={'smooth'} colorScheme={['#418AD7']}/>}
                />
            </Box>
        </Box>
    )
}
export default OverviewWrapper;