import React from 'react';

import { BarChart, BarSeries, PointSeries } from 'reaviz';
import { Box, Grid, Text, Heading } from "grommet";

import tokenService from '../../router/token';

const OverviewWrapper = ({ CheckMonthly, CheckDayly, email, PlanUse, chartsData, loading }) => {

    const { apikey } = tokenService.get().token || 'dad92e94-4728-47aa-8489-7006974d8411';
    console.log(chartsData)
    return (
        <Box align="center" justify="start" pad="small" animation="zoomIn" fill="horizontal" gap="xsmall">
            <Box align="center" justify="center" pad="small" fill="horizontal" background={{ "color": "light-1" }}>
                <Heading level="1">
                    Credenciales y Consumo
                </Heading>
            </Box>

            <Box align="center" justify="center" pad="small" direction="row-responsive" fill="horizontal" background={{ "color": "light-1" }} >
                <Grid container>
                    <Grid columns="medium" >
                        <Text weight="bold">
                            Credenciales
                        </Text>
                        <Text weight="bold">
                            API Login email
                        </Text>
                        <Text>
                            {email}
                        </Text>
                    </Grid>
                    <Grid columns="medium" >
                        <Text weight="bold">
                            API KEY
                        </Text>
                        <Text>
                            {apikey}
                        </Text>
                    </Grid>
                </Grid>
            </Box>
            {PlanUse}
            <Box align="center" justify="center" pad="small" direction="row-responsive" fill="horizontal" background={{ "color": "light-1" }}>
                {CheckMonthly}
            </Box>
            <Box align="center" justify="center" pad="small" direction="row-responsive" fill="horizontal" background={{ "color": "light-1" }}>
                {CheckDayly}
            </Box>
            <Box align="center" justify="center" pad="small" fill="horizontal" background={{ "color": "light-1" }} round="xsmall" elevation="xsmall" >
                <Box align="start" justify="start" pad="small" fill="horizontal" direction="row-responsive" border={{ "side": "all" }}>
                    <Text weight="bold">
                        Búsquedas Mensuales:
                </Text>
                    {/* <Select options={["", "Febrero"]} searchPlaceholder="Selecciona un mes" /> */}
                </Box>

                {loading && 'Loading...'}
            </Box>
                <BarChart
                    height={250}
                    data={chartsData}
                    series={<BarSeries interpolation={'smooth'} colorScheme={['#418AD7']} symbols={<PointSeries show={true} />} />}
                />
        </Box>
    )
}

export default OverviewWrapper;