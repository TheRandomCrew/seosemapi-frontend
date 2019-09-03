import React from 'react'
import { Box, Heading, Grid, Text } from 'grommet'
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
                <Chart email={email} from={from} to={to} pad='small' />
                <Heading textAlign="start" level="3" color="brand">
                    BÚSQUEDAS
                </Heading>
                <Grid columns={["small", "auto", "small"]}>
                    <DatePicker
                        name={'Desde'}
                        value={from}
                        style={{ zIndex: '9999' }}
                        onChange={({ value }) => setFrom(value)}
                    />
                    <Text> hasta </Text>
                    <DatePicker
                        name={'Hasta'}
                        value={to}
                        style={{ zIndex: 10 }}
                        onChange={({ value }) => setTo(value)}
                    />
                    <Box align="center" justify="center" pad="small" >.</Box>
                </Grid>
                {SearchButton}
                {children}
            </Box>
        </Box>
    )
}

export default SearchWrapper;