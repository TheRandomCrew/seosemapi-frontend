import React from "react";
import { Route, Switch } from "react-router-dom";

import { Search, Errors, Overview } from '../../data';

import { Box, Grid } from "grommet";
import { Search, Overview } from '../../data';
import Sidebar from "./Sidebar";
import Header from "./Header";

const Dashboard = ({ email, path }) => {
  const [sidebar, setSidebar] = React.useState(true);
  /** This Dashboard contain a dashboard route */
  return (
    <Wrapper>
      <Header setSidebar={setSidebar} sidebar={sidebar} email={email} />
      <Sidebar sidebar={sidebar} path={path} />
      <Box gridArea="main" justify="center" align="center">
        <Switch>
          <Route path={`${path}/`} exact render={(props) => <Overview {...props} email={email} />} />
          <Route path={`${path}/searches`} component={Search} />
          <Route
            path={path + '/*'}
            render={(props) => <Overview {...props} email={email} />}
          />
        </Switch>
      </Box>
    </Wrapper>
  )
};

export default Dashboard;

const Wrapper = ({children=undefined, ...rest}) => (
  <Grid
      fill
      rows={["auto", "flex"]}
      columns={["auto", "flex"]}
      areas={[
        { name: "header", start: [0, 0], end: [1, 0] },
        { name: "sidebar", start: [0, 1], end: [0, 1] },
        { name: "main", start: [1, 1], end: [1, 1] }
      ]}
      {...rest}
    >
      {children}
    </Grid>
);