import React from 'react'
import { Box, DataTable, Button } from 'grommet'
import { Search, Grommet } from 'grommet-icons';
import SearchWrapper from './SearchesWrapper';

const Searchs = ({
    error, email,
    from, to,
    tableData,
    loading,
    onSearch,
    setFrom,
    setTo
}) => {

    return (
        <SearchWrapper
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
                step={50}
                columns={[{ "header": "Fecha de Consulta", "property": "consultation_date", "primary": true, "sortable": true }, { "header": "Tipo de Busqueda", "property": "query_type" }, { "header": "Palabra Clave", "property": "keyword", "search": true }, { "property": "query_id", "header": "query_id" }, { "property": "search_domain", "header": "search_domain" }, { "property": "country_code", "header": "country_code" }, { "property": "result_url", "header": "result_url" }]}
                data={tableData}
            />
        </SearchWrapper>
    )
}

export default Searchs;