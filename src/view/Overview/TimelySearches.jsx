import React from 'react';

import { useTimelySearches } from "../../data";

import { Box, Grid, Text, Button } from "grommet";

var byMonth = new Date(); // last month date
const pastMonth = byMonth.getMonth() - 1;
byMonth.setMonth(pastMonth);

var byDay = new Date(); // yesterday date
const yesterday = byDay.getDate() - 1;
byDay.setDate(yesterday);

var tomorrow = new Date();
const modifier = tomorrow.getDate() + 1;
tomorrow.setDate(modifier);

/** Hook Component */
const TimelySearches = ({ isMonthly, email }) => {
    /** Hook States from logic TimelySearches */
    const [{ total, loading, error }, { setStartDate, setEndDate, setTargetEmail, onSearch }] = useTimelySearches();

    /** Init search for month or day */
    const checkSearches = () => {
        if (isMonthly) {
            setStartDate(byMonth);
        } else {
            setStartDate(byDay);
        }
        setTargetEmail(email);
        setEndDate(tomorrow);
        onSearch(true);
    };

    return (
        <Box
            align="center"
            justify="center"
            pad="small"
            direction="row-responsive"
            fill="horizontal"
            background={{ "color": "light-1" }}
        >
            <Grid columns={["small", "large"]}>
                <Text weight="bold">
                    Búsquedas {isMonthly ? 'este mes' : 'hoy'}:
                </Text>
                <Text>
                    {error && error + ' found'}
                    {total}
                </Text>
                <Button
                    onClick={() => checkSearches()}
                    label={loading ? 'Loading...' : 'Consultar'}
                />
            </Grid>
        </Box>
    )
}

export default TimelySearches