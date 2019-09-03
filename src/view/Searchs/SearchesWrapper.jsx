import React from 'react'
import { Box, Heading, Grid,  Text } from 'grommet'
import DatePicker from './DatePicker';
import Chart from './Chart';
const SearchWrapper = ({
    setFrom, setTo, from, to, email,
    SearchButton, 
    children = undefined
}) => {

    return (
        <Box style={{ "height": "100vh" }} fill>
            <Box align="center" justify="start" pad="xsmall" animation="zoomIn" fill='horizontal' gap="xsmall">
                <Heading textAlign="start" level="3" color="brand">
                    BÚSQUEDAS
                </Heading>
                <Grid columns={["small","auto", "small"]}>
                    <DatePicker
                        name={'Desde'}
                        value={from}
                        onChange={({ value }) => setFrom(value)}
                    />
                    <Text> hasta </Text>
                    <DatePicker
                        name={'Hasta'}
                        value={to}
                        onChange={({ value }) => setTo(value)}
                    />
                    <Box align="center" justify="center" pad="small" >.</Box>
                </Grid>
                {SearchButton}
                {children}
            </Box>
            <Chart email={email} from={from} to={to} />
        </Box>
    )
}

export default SearchWrapper;