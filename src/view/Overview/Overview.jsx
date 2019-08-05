import React from 'react';
import { UtilizationCard } from '../Dashboard/UtilizationCard'
import OverviewWrapper from './OverviewWrapper';

var ourDate = new Date();
const pastMonth = ourDate.getMonth() - 1;
ourDate.setDate(pastMonth);

var tomorrow = new Date();
const modifier = tomorrow.getDate() + 1;
tomorrow.setDate(modifier);

var date_sort_asc = function (item1, item2) {
    const date1 = item1.consultation_date;
    const date2 = item2.consultation_date;
    if (date1 > date2) return 1;
    if (date1 < date2) return -1;
    return 0;
};

const Overview = ({
    email, tableData, loading
}) => {
    const [chartData, setChartData] = React.useState([])

    var getDateArray = function (start, end) {

        var
            arr = {},
            dt = new Date(start);

        while (dt <= end) {
            const thisDate = new Date(dt).toDateString();
            arr[thisDate] = 0
            dt.setDate(dt.getDate() + 1);
        }

        return arr;

    }

    React.useLayoutEffect(() => {
        if (tableData.length > 0) {
            tableData.sort(date_sort_asc);
            let correctDate = tableData.map(item => {
                const date = item.consultation_date
                    .split(' ')[0]
                    .split('-')
                    .reverse()
                    .join('-');
                item.consultation_date = new Date(date).toDateString();
                return item;
            });
            let filtered = {};
            let last = '';
            correctDate.map((item) => {
                if (filtered[item.consultation_date]) {
                    if (item.consultation_date === last) {
                        filtered[item.consultation_date]++;
                    }
                } else {
                    filtered[item.consultation_date] = 1;
                    last = item.consultation_date;
                }
                return item
            })

            const month = getDateArray(ourDate, tomorrow);

            const preFinal = { ...month, ...filtered }
            const final = Object.entries(preFinal).map((item, id) => {
                return { key: new Date(item[0]), data: item[1], id: id.toString() }
            })
            setChartData(final)
        }
    }, [tableData])

console.log(tableData)
    return (
        <OverviewWrapper
            PlanUse={<UtilizationCard data={{ name: 'Plan Developer', value: 250000, used: true, usedValue: 23123, available: true, availableValue: 250000 - 23123, percent: (23123 / 250000) * 100 }} />}
            email={email}
            chartsData={chartData}
            loading={loading}
        />
    )
}
export default Overview;