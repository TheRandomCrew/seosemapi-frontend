import React from "react";
import { Route, Switch } from "react-router-dom";

/** Import logic components */
import { Search, Overview, Errors } from '../../data';

/** Import view components */
import Sidebar from "./Sidebar";
import Header from "./Header";

import { Box, Grid } from "grommet";

const Dashboard = ({ email, path }) => {
  const [sidebar, setSidebar] = React.useState(true);
  /** This Dashboard contain a dashboard route */
  return (
    <Wrapper>
      <Header setSidebar={setSidebar} sidebar={sidebar} email={email} />
      <Sidebar sidebar={sidebar} path={path} />
      <Box gridArea="main" justify="center" align="center">
        <DashboardRouter email={email} path={path} />
      </Box>
    </Wrapper>
  )
};

export default Dashboard;

const Wrapper = ({ children = undefined, ...rest }) => (
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

const DashboardRouter = ({ path, email }) => (
  <Switch>
    <Route path={`${path}/`} exact render={(props) => <Overview {...props} email={email} />} />
    <Route path={`${path}/busquedas`} render={(props) => <Search {...props}/>} />
    <Route path={`${path}/errores`} render={(props) => <Errors {...props}/>} />
    <Route
      path={path + '/*'}
      render={(props) => <Overview {...props} email={email} />}
    />
  </Switch>
)