import React from 'react'
import { Box, DataTable, Button } from 'grommet'
import { Search, Grommet } from 'grommet-icons';
import ErrorsWrapper from './ErrorsWrapper';

const Errors = ({
    error, email,
    from, to,
    tableData,
    loading,
    onSearch,
    setFrom,
    setTo
}) => {
console.log(tableData)
    return (
        <ErrorsWrapper
            ErrorMsg={error.server && <p style={{ color: 'red' }}>{error.server}</p>}
            from={from}
            to={to}
            email={email}
            setTo={setTo}
            setFrom={setFrom}
            chartsData={tableData}
            loading={loading}
            SearchButton={<Button
                style={{ borderRadius: '0' }}
                label={loading ? 'Buscando' : 'Buscar'}
                color="status-ok"
                primary={true}
                reverse={loading}
                hoverIndicator={{ background: 'status-ok', textColor: 'white' }}
                icon={loading ? <Box animation={{
                    "type": "pulse",
                    "delay": 100,
                    "duration": 100,
                    "size": "large"
                }} ><Grommet color='brand' /></Box> : <Search color='white' />}
                onClick={() => onSearch()}
            />}
        >
            <DataTable
                resizeable={true}
                step={100}
                columns={[{ "header": "Fecha de Consulta", "property": "error_time", "primary": true, "sortable": true }, { "header": "Tipo de Error", "property": "error_description" }]}
                data={tableData}
            />
        </ErrorsWrapper>
    )
}

export default Errors;