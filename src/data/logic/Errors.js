import React, { useState } from 'react';
import { useFetch } from "../util/hooks";
import { Errors as ErrorsView } from '../../view'
import tokenService from '../../router/token';

var ourDate = new Date();
const pastDate = ourDate.getDate() - 7;
ourDate.setDate(pastDate);

var tomorrow = new Date();
const modifier = tomorrow.getDate() +1;
tomorrow.setDate(modifier);

const Errors = () => {
    const [startDate, setStartDate] = useState(ourDate.toDateString());
    const [endDate, setEndDate] = useState(tomorrow.toDateString());
    const [targetEmail, setTargetEmail] = useState(tokenService.get().token.email);
    const [tableData, setTableData] = React.useState([])
    const [isQuery, setIsQuery] = React.useState(true)
    const [
        data, { loading, setStart }
    ] = useFetch(`https://data.seosemapi.com/${isQuery?'query_search/query_search':'error_search/error_search'}?start_date=${encodeURIComponent(startDate)}&end_date=${encodeURIComponent(endDate)}&target_email=${encodeURIComponent(targetEmail)}&api_key=${encodeURIComponent('dad92e94-4728-47aa-8489-7006974d8411')}`);

    const onSearch = () => {
        setStart(true)
    }

    React.useLayoutEffect(() => {
        if (data.length > 0 || data[1] === 200) {
            setStart(false);
            console.log(data)

            if(data[0].result){
                const {result} = data[0];
                if(typeof(result)==="object"){
                    setTableData(result);
                }
                else{console.error(result)}
            }
        }
        return () => {
            setStart(false);
        };
    }, [data, setStart]);

    return (
        <ErrorsView
            startDate={startDate}
            endDate={endDate}
            targetEmail={targetEmail}
            data={data}
            onSearch={onSearch}
            loading={loading}
            tableData={tableData}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
            setTargetEmail={setTargetEmail}
            isQuery={isQuery}
            setIsQuery={setIsQuery}
        />
    )
}

export default Errors