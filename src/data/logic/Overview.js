import React from 'react';
import { useFetch } from "../util/hooks";
import { Overview as OverviewView } from '../../view'

var ourDate = new Date();
const pastMonth = ourDate.getMonth() - 1;
ourDate.setMonth(pastMonth);

var tomorrow = new Date();
const modifier = tomorrow.getDate() + 1;
tomorrow.setDate(modifier);

const Overview = ({ email }) => {
    /** Hook State */
    const [tableData, setTableData] = React.useState([])
    
    const [ data, { loading, setStart }] = useFetch(`https://data.seosemapi.com/query_search/query_search?start_date=${encodeURIComponent(ourDate)}&end_date=${encodeURIComponent(tomorrow)}&target_email=${encodeURIComponent(email)}&api_key=${encodeURIComponent('dad92e94-4728-47aa-8489-7006974d8411')}`);

    React.useLayoutEffect(() => {
        /** If the fetch is correct then loaded the info in the hook state */
        if (data.length > 0 || data[1] === 200) {
            setStart(false);
            if (data[0].result) {
                const { result } = data[0];
                if (typeof (result) === "object") {
                    setTableData(result);
                }
            }
        }
        return () => {
            setStart(false);
        };
    }, [data, setStart]);

    React.useEffect(() => {
        setStart(true)
        return () => {
            setStart(false)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [email])

    return (
        <OverviewView
            email={email}
            tableData={tableData}
            loading={loading}
        />
    )
}

export default Overview;