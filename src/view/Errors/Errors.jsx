import React from 'react'
import { Box, Calendar, DataTable, TextInput, Button, Select } from 'grommet'
import { Search, Cycle } from 'grommet-icons';
import ErrorWrapper from './ErrorWrapper';


const Errors = ({
  startDate, setStartDate,
  endDate, setEndDate,
  targetEmail = '', setTargetEmail,
  tableData,
  loading, onSearch, isQuery, setIsQuery
}) => {
  
  return (
    <ErrorWrapper
      IsQuerySelect={<Select
        placeholder="Error"
        value={isQuery ? 'Query' : 'Error'}
        options={["Query", "Error"]}
        onChange={({ option }) => {
          if (option === 'Query') { setIsQuery(true) }
          else { setIsQuery(false) }
        }}
      />}
      EmailInput={<TextInput
        placeholder="Pon el email a verificar"
        value={targetEmail}
        onChange={({ target }) => setTargetEmail(target.value)}
      />}
      CalendarStart={<Calendar size="small" date={startDate} onSelect={setStartDate} />}
      CalendarEnd={<Calendar size="small" date={endDate} onSelect={setEndDate} />}
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
        }} ><Cycle color='brand' /></Box> : <Search color='white' />}
        onClick={() => onSearch()}
      />}
      ResultsTable={<DataTable
        columns={isQuery ? QueryTableColums : ErrorsTableColums}
        data={tableData}
        resizeable={true}
        sortable={false}
      />}
    />
  )
}
const ErrorsTableColums = [{
  header: "Error", property: "error_id", primary: true, align: "start"
}, {
  header: "Fecha", property: "error_time", align: "center", sortable: true, search: false
}, {
  header: "Descripcion", property: 'error_description'
}]
const QueryTableColums = [{
  header: "Fecha", property: "consultation_date", primary: true, align: "start", sortable: true
}, {
  header: "Palabra", property: "keyword", align: "center", search: true
}, {
  header: "Tipo de Busqueda", property: 'query_type'
}]
export default Errors;