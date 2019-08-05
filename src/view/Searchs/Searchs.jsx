import React from 'react'
import { Box, TextInput, DataTable, Select, CheckBox, Button } from 'grommet'
import { Search, Grommet } from 'grommet-icons';
import SearchWrapper from './SearchesWrapper';

const Searchs = ({
    error,
    tableData,
    loading,
    onSearch,
    keyword, setKeyword,
    localization, setLocalization,
    organic, setOrganic,
    paid, setPaid,
    total, setTotal
}) => {

    return (
        <SearchWrapper
            KeywordInput={<TextInput
                placeholder="Busca una palabras"
                value={keyword}
                onChange={({ target }) => setKeyword(target.value)}
            />}
            Localization={<Select
                options={["ES,Spanish", "AR,Spanish"]}
                searchPlaceholder="ES, Spanish"
                placeholder="Busca tu Pais e Idioma"
                value={localization}
                onChange={({ option }) => setLocalization(option)}
            />}
            ErrorMsg={error.server && <p style={{ color: 'red' }}>{error.server}</p>}
            IsOrganic={<CheckBox
                label="Organic"
                checked={organic}
                onChange={({ target }) => setOrganic(target.checked)}
            />}
            IsPaid={<CheckBox
                label="Paid"
                checked={paid}
                onChange={({ target }) => setPaid(target.checked)}
            />}
            TotalResults={<TextInput
                type='number'
                min={4}
                max={99}
                placeholder="Resultados Totales (default 10)"
                value={total}
                onChange={({ target }) => setTotal(target.value)}
            />}
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
                columns={[{ "header": "No.", "property": "result_position", "primary": true, "sortable": true, "align": "center" }, { "header": "Titulo", "property": "result_title", "search": true }, { "property": "result_snippet", "header": "Descripcion", "search": true }, { "property": "result_url", "header": "URL" }]}
                data={tableData}
            />
        </SearchWrapper>
    )
}

export default Searchs;