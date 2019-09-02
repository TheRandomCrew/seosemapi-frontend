import React, {useState} from 'react';
import { useFetch } from "../util/hooks";

import Searchs from '../../view/Searchs/Searchs';

import tokenService from '../../router/token';

var byMonth = new Date(); // last month date
const pastMonth = byMonth.getMonth() - 1;
byMonth.setMonth(pastMonth);


var tomorrow = new Date();
const modifier = tomorrow.getDate() + 1;
tomorrow.setDate(modifier);

const Search = () => {
    const [email, setEmail] = useState('');
    const [from,setFrom] = useState(byMonth.toString());
    const [to, setTo] = useState(tomorrow.toString());
    const [tableData, setTableData] = useState([]);
    const [error, setError] = useState({})

    const [data, { loading, setStart }] = useFetch(`https://data.seosemapi.com/query_search/query_search?start_date=${encodeURIComponent(byMonth)}&end_date=${encodeURIComponent(tomorrow)}&target_email=${encodeURIComponent(email)}&api_key=${encodeURIComponent('dad92e94-4728-47aa-8489-7006974d8411')}`);

    const onSearch = () => {
        setStart(true);
    }
    React.useLayoutEffect(() => {
        try {
            if (data.length > 0 || data[1] === 200) {
                if(data[0].result){
                    const {result} = data[0];
                    if(typeof(result)==="object"){
                        setTableData(result);
                    }
                    else{console.error(result)}
                }
            } else {
                if (data.detail) {
                    setError({ server: data.detail.message });
                }
            }
        } catch (error) {
            console.log(error)
        }
        
        return () => {
            setStart(false);
        };
    }, [data, setStart]);

    React.useEffect(() => {
        if (localStorage.hasOwnProperty('seosemapi')) {
            const { email  } = tokenService.get().token;
            setEmail(email);
      }
    },[])

    return (
        <Searchs
            error={error}
            from={from}
            to={to}
            tableData={tableData}
            loading={loading}
            onSearch={onSearch}
            setFrom={setFrom}
            setTo={setTo}
        />
    )
}

export default Search