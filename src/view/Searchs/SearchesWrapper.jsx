import React from 'react'
import { LineChart, LineSeries, PointSeries } from 'reaviz';
import { Box, Heading, Grid, FormField,Text } from 'grommet'
import DatePicker from './DatePicker';

  const SearchWrapper = ({
    setFrom, setTo, from, to,
    SearchButton, chartsData, loading,
    children=undefined
}) => {

    return (
        <Box style={{ "height": "100vh" }} fill>
            <Box align="center" justify="start" pad="xsmall" animation="zoomIn" fill='horizontal' gap="xsmall">
            <Heading textAlign="start" level="3" color="brand">
           BÚSQUEDAS 
         </Heading>
         <Grid columns={["small","small","auto"]}>
         <FormField label="Desde"  >
         <DatePicker 
                 name={'Desde'}  
                 value={from}
                 onChange={({value})=>setFrom(value)} 
                 />
                 </FormField>
                 <FormField label="Desde"  >
           <DatePicker 
                 name={'Hasta'}  
                 value={to}
                 onChange={({value})=>setTo(value)} 
                 />
                 </FormField>
           <Box align="center" justify="center" pad="small" />
         </Grid>
                {SearchButton}
                {children}
            </Box>
            <Box align="center" justify="center" pad="small" fill="horizontal" background={{ "color": "light-1" }} round="xsmall" elevation="xsmall" >
                <Box align="start" justify="start" pad="small" fill="horizontal" direction="row-responsive" border={{ "side": "all" }}>
                    <Text weight="bold">
                        Búsquedas Mensuales:
                </Text>
                    {/* <Select options={["", "Febrero"]} searchPlaceholder="Selecciona un mes" /> */}
                </Box>

                {loading && 'Loading...'}
                <LineChart
                    data={chartsData}
                    series={<LineSeries interpolation={'smooth'} colorScheme={['#418AD7']} symbols={<PointSeries show={true} />} />}
                />
            </Box>
        </Box>
    )
}

export default SearchWrapper;