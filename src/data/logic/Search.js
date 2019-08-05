import React, {useState} from 'react';
import { useFetch } from "../util/hooks";
import Searchs from '../../view/Searchs/Searchs';

import tokenService from '../../router/token';


const Search = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [tableData, setTableData] = useState([]);
    const [keyword, setKeyword] = useState('');
    const [localization, setLocalization] = useState('ES,Spanish');
    const [organic, setOrganic] = useState(true);
    const [paid, setPaid] = useState(false);
    const [total, setTotal] = useState(10);
    const [error, setError] = useState({})

    const [data, { loading, setStart }] = useFetch(`https://data.seosemapi.com/search/single?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}&keyword=${encodeURIComponent(keyword)}&organic=${encodeURIComponent(organic)}&paid=${encodeURIComponent(paid)}&country_code=${encodeURIComponent(localization.split(',')[0])}&language=${encodeURIComponent(localization.split(',')[1])}&mode=PC&total_results=${encodeURIComponent(total)}`);

    const onSearch = () => {
        setStart(true);
    }
    React.useLayoutEffect(() => {
        try {
            if (data.length > 0 || data[1] === 200) {
                setStart(false);
                const { results } = data[0];
                console.log(data)
                setTableData(results.organic);
            } else {
                if (data.detail) {
                    console.log('data:\n ', data)
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
        if (localStorage.hasOwnProperty('lscache-seosemapi')) {
            const { email, password } = tokenService.get().token;
            setEmail(email);
            setPassword(password)
      }
    },[])
    
    return (
        <Searchs
            error={error}
            tableData={tableData}
            loading={loading}
            onSearch={onSearch}
            keyword={keyword}
            setKeyword={setKeyword}
            localization={localization}
            setLocalization={setLocalization}
            organic={organic}
            setOrganic={setOrganic}
            paid={paid}
            setPaid={setPaid}
            total={total}
            setTotal={setTotal}
        />
    )
}

export default Search