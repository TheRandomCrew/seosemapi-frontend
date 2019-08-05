import React from 'react'
import { Box, Heading, Grid, FormField } from 'grommet'
import DatePicker from './DatePicker';

  const SearchWrapper = ({
    setFrom, setTo, from, to,
    SearchButton,
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
        </Box>
    )
}

export default SearchWrapper;