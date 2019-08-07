import React from 'react';
import { UtilizationCard } from '../Dashboard/UtilizationCard'
import OverviewWrapper from './OverviewWrapper';
import getDatesArray from './getDatesArray';

const Overview = ({
    email, tableData, loading
}) => {
    const [chartData, setChartData] = React.useState([])

    React.useLayoutEffect(() => {
        if (tableData.length > 0) {
            const final = getDatesArray(tableData)
            setChartData(final)
        }
    }, [tableData])

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