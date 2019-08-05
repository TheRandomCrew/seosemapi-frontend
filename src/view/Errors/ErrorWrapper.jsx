import React from 'react'
import { Box, Grid, Heading, Text } from 'grommet'

const ErrorWrapper = ({ IsQuerySelect, EmailInput, CalendarStart, CalendarEnd, SearchButton, ResultsTable }) => (
    <Box style={{ "height": "100vh" }} align="center" justify="start" pad="small" animation="zoomIn" fill="vertical" gap="xsmall">
        <Heading level="1">
            Verificar Errores y Busquedas
          </Heading>
        <Box pad='large'>
            <Text>Selecciona si quieres verificar busquedas o errores</Text>
            {IsQuerySelect}
            <Box background="light-2" >
                {EmailInput}
            </Box>
        </Box>
        <Grid columns={["xsmall", "medium", "xsmall", "medium"]} >
            <Text weight="bold">
                Desde:
            </Text>
            {CalendarStart}
            <Text weight="bold">
                Hasta:
            </Text>
            {CalendarEnd}
        </Grid>
        {SearchButton}  
        {ResultsTable}
    </Box>
)

export default ErrorWrapper;