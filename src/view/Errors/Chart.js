import React from 'react';

import { BarChart, BarSeries, PointSeries } from 'reaviz';

import getDatesArray from './getDatesArray';
import { Box, Text } from 'grommet';
import { useFetch } from '../../data/util/hooks';

const Chart = ({ email, from, to }) => {
    const [tableData, setTableData] = React.useState([]);

    const [data, { loading, setStart }] = useFetch(`https://data.seosemapi.com/error_search/error_search?start_date=${encodeURIComponent(from)}&end_date=${encodeURIComponent(to)}&target_email=${encodeURIComponent(email)}&api_key=${encodeURIComponent('dad92e94-4728-47aa-8489-7006974d8411')}`);

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
    console.log(tableData)
    return (
        <Box align="center" justify="center" pad="small" fill="horizontal" background={{ "color": "light-1" }} round="xsmall" elevation="xsmall" >
            <Box align="start" justify="start" pad="small" fill="horizontal" direction="row-responsive" border={{ "side": "all" }}>
                <Text weight="bold">
                    Errorres en las Búsquedas Mensuales:
                    </Text>
                {/* <Select options={["", "Febrero"]} searchPlaceholder="Selecciona un mes" /> */}
            </Box>

            {loading && 'Loading...'}
            <BarChart
                data={tableData}
                height={250}
                series={<BarSeries interpolation={'smooth'} colorScheme={['#418AD7']} symbols={<PointSeries show={true} />} />}
            />
        </Box>
    )
};

export default Chart;