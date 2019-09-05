import React from 'react';

import { LineChart, LineSeries, PointSeries } from 'reaviz';

import getDatesArray from './getDatesArray';
import { Box, Text } from 'grommet';
import { useFetch } from '../../data/util/hooks';

const Chart = ({ email, from, to }) => {
    const [tableData, setTableData] = React.useState([{key: new Date(), id: 1, data: 0}]);

    const [data, { loading, setStart }] = useFetch(`https://data.seosemapi.com:35566/query_search/statistics?start_date=${encodeURIComponent(from)}&end_date=${encodeURIComponent(to)}&target_email=${encodeURIComponent(email)}&api_key=${encodeURIComponent('dad92e94-4728-47aa-8489-7006974d8411')}`);

    React.useLayoutEffect(() => {
        /** If the fetch is correct then loaded the info in the hook state */
        if (data.length > 0 || data[1] === 200) {
            setStart(false);
            if (data[0].result) {
                const { result } = data[0];
                if (typeof (result) === "object") {
                    const final = getDatesArray(result)
                    setTableData(final);
                }
            }
        }
        return () => {
            setStart(false);
        };
    }, [data, setStart]);

    /** If hook state email change init fetch */
    React.useEffect(() => {
        setStart(true)
        return () => {
            setStart(false)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [email]);
    
    return (
        <Box align="center" justify="center" pad="small" fill="horizontal" background={{ "color": "light-1" }} round="xsmall" elevation="xsmall">
                {loading && 'Loading...'}
                <LineChart
                    data={tableData}
                    height={200}
                    style={{zIndex:0}}
                    series={<LineSeries interpolation={'smooth'} colorScheme={['#418AD7']} symbols={<PointSeries show={true} />} />}
                />
                <Text weight="bold">
                    Búsquedas Mensuales:
                </Text>
        </Box>
    )
};

export default Chart;