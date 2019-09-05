import React from 'react';
import { Box, Grid, Text } from "grommet";
import { useTimelySearches } from "../../data";

var byMonth = new Date(); // last month date
const pastMonth = byMonth.getMonth() - 1;
byMonth.setMonth(pastMonth);

var byDay = new Date(); // yesterday date
const yesterday = byDay.getDate() - 1;
byDay.setDate(yesterday);

var tomorrow = new Date();
const modifier = tomorrow.getDate() + 1;
tomorrow.setDate(modifier);

const TimelySearches = ({ isMonthly, email }) => {
    const [{ total, loading, error }, { setStartDate, setEndDate, setTargetEmail, onSearch }] = useTimelySearches();

    React.useEffect(() => {
        if (isMonthly) {
            setStartDate(byMonth);
        } else {
            setStartDate(byDay);
        }
        if(email){
            setTargetEmail(email);
            setEndDate(tomorrow);
            onSearch(true);
        }
    },[]);

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
                    {loading ? 'Loading...' : null}
                    {total}
                </Text>
                {/* <Button
                    onClick={() => checkSearches()}
                    label={loading ? 'Loading...' : 'Consultar'}
                /> */}
            </Grid>
        </Box>
    )
}

export default TimelySearches