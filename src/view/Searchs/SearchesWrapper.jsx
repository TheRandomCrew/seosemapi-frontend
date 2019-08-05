import React from 'react'
import { Box, Heading, Grid, FormField, DataTable } from 'grommet'
import { Search } from 'grommet-icons';
import DatePicker from './DatePicker';

const SearchWrapper = ({
    KeywordInput,
    Localization,
    ErrorMsg,
    IsOrganic,
    IsPaid,
    TotalResults,
    SearchButton,
    children=undefined
}) => {

    return (
        <Box align="center" justify="center" pad="small" direction="row-responsive">
      <Box align="stretch" justify="center" pad="small" fill="horizontal">
        <Heading textAlign="start" level="3" color="brand">
          BÚSQUEDAS 
        </Heading>
        <Grid columns={["small","small","auto"]}>
        <DatePicker 
                name={'Desde'}  
                onChange={()=>console.log('datepicker')} 
                />
          <DatePicker 
                name={'Hasta'}  
                onChange={()=>console.log('datepicker')} 
                />
          <Box align="center" justify="center" pad="small" />
        </Grid>
        <DataTable columns={[{"header":"Fecha de Consulta","property":"consultation_date","primary":true,"sortable":true},{"header":"Tipo de Busqueda","property":"query_type"},{"header":"Palabra Clave","property":"keyword","search":true}]} data={[{"query_id":"d44e1793-b332-4e00-b2c3-81d00dd67017","consultation_date":"30-07-2019 05:40:07 ","query_type":"Single Search","search_domain":"www.google.com","country_code":"US","location":null,"keyword":"hotel canfali","result_url":"https://www.google.com/search?q=hotel+canfali&gl=us","user_id":"6d7306d3-3fbd-4273-b22d-6256bb9b57dc"},{"query_id":"0e2ed9c6-af59-4fd3-aab4-75e4e66857cf","consultation_date":"30-07-2019 05:40:30 ","query_type":"Single Search","search_domain":"www.google.com","country_code":"US","location":null,"keyword":"playa terranova","result_url":"https://www.google.com/search?q=playa+terranova&gl=us","user_id":"6d7306d3-3fbd-4273-b22d-6256bb9b57dc"},{"query_id":"2887a47f-59d3-4162-b26f-535c21acd950","consultation_date":"30-07-2019 05:41:27 ","query_type":"Single Search","search_domain":"www.google.com","country_code":"US","location":null,"keyword":"rh hoteles","result_url":"https://www.google.com/search?q=rh+hoteles&gl=us","user_id":"6d7306d3-3fbd-4273-b22d-6256bb9b57dc"},{"query_id":"1d4bc808-5213-4b52-9f60-5e4830d79295","consultation_date":"30-07-2019 05:41:30 ","query_type":"Single Search","search_domain":"www.google.com","country_code":"US","location":null,"keyword":"hotel rh gijon","result_url":"https://www.google.com/search?q=hotel+rh+gijon&gl=us","user_id":"6d7306d3-3fbd-4273-b22d-6256bb9b57dc"},{"query_id":"be1338a6-8edd-4881-9df1-3d14552d5a8c","consultation_date":"30-07-2019 05:41:33 ","query_type":"Single Search","search_domain":"www.google.com","country_code":"US","location":null,"keyword":"rh princesa benidorm","result_url":"https://www.google.com/search?q=rh+princesa+benidorm&gl=us","user_id":"6d7306d3-3fbd-4273-b22d-6256bb9b57dc"},{"query_id":"fda31d24-8e91-44d1-bfb5-3477e4509420","consultation_date":"30-07-2019 05:41:52 ","query_type":"Single Search","search_domain":"www.google.com","country_code":"US","location":null,"keyword":"hotel rh peÃ±iscola","result_url":"https://www.google.com/search?q=hotel+rh+pe%C3%83%C2%B1iscola&gl=us","user_id":"6d7306d3-3fbd-4273-b22d-6256bb9b57dc"},{"query_id":"7141ca8e-0ea6-4bb7-a9e4-d8909f6e116a","consultation_date":"30-07-2019 05:42:51 ","query_type":"Single Search","search_domain":"www.google.com","country_code":"US","location":null,"keyword":"hoteles en peÃ±iscola","result_url":"https://www.google.com/search?q=hoteles+en+pe%C3%83%C2%B1iscola&gl=us","user_id":"6d7306d3-3fbd-4273-b22d-6256bb9b57dc"},{"query_id":"45a79811-5b86-4e39-95f0-461fb0360782","consultation_date":"30-07-2019 05:43:05 ","query_type":"Single Search","search_domain":"www.google.com","country_code":"US","location":null,"keyword":"rh hoteles","result_url":"https://www.google.com/search?q=rh+hoteles&gl=us","user_id":"6d7306d3-3fbd-4273-b22d-6256bb9b57dc"},{"query_id":"afbd7013-5949-4be5-b5ce-c1fcba1c66c5","consultation_date":"30-07-2019 05:43:08 ","query_type":"Single Search","search_domain":"www.google.com","country_code":"US","location":null,"keyword":"hoteles en benidorm","result_url":"https://www.google.com/search?q=hoteles+en+benidorm&gl=us","user_id":"6d7306d3-3fbd-4273-b22d-6256bb9b57dc"},{"query_id":"d0c3bd4e-b57d-4a03-8c60-83ad8ea4634c","consultation_date":"30-07-2019 05:44:26 ","query_type":"Single Search","search_domain":"www.google.com","country_code":"US","location":null,"keyword":"hoteles en peÃ±iscola","result_url":"https://www.google.com/search?q=hoteles+en+pe%C3%83%C2%B1iscola&gl=us","user_id":"6d7306d3-3fbd-4273-b22d-6256bb9b57dc"}]} resizeable={true} />
      </Box>
    </Box>
        // <Box style={{ "height": "100vh" }} fill>
        //     <Box align="center" justify="start" pad="small" animation="zoomIn" fill="vertical"gap="xsmall">
        //         <Heading>
        //             Buscar Palabra Clave
        //         </Heading>
        //         <Grid columns={["xsmall", "medium", "medium"]} align="center" alignContent="center" justify="center" >
        //             <Search />
        //             {KeywordInput}
        //             {Localization}
        //         </Grid>
        //         {ErrorMsg}
        //         <Grid columns={["small", "small", "medium"]}>
        //             {IsOrganic}
        //             {IsPaid}
        //             {TotalResults}
        //         </Grid>
        //         <DatePicker 
        //         name={'Desde'}  
        //         onChange={()=>console.log('datepicker')} 
        //         />
        //         {SearchButton}
        //         {children}
        //     </Box>
        // </Box>
    )
}

export default SearchWrapper;