import React from 'react';
import { Box, Button, Text, Menu } from "grommet";
import { history } from '../../router/router'
import tokenService from '../../router/token';
import { globalActionsContext } from '../../data/store/globalContext';

function Header({ setSidebar, sidebar, email }) {
  const dispatch = React.useContext(globalActionsContext);
  const logOut = () => {
    tokenService.delete()
    history.replace(`/`)
  }
  return (
    <Nav>
      <Button onClick={() => setSidebar(!sidebar)}>
        <Text size="large">SEOSEMAPI LOGO</Text>
      </Button>
      <Menu
        label={email}
        items={[
          {label: 'lightTheme', onClick: ()=>dispatch({type: 'SET_THEME', theme: 0})},
          {label: 'DarkTheme', onClick: ()=>dispatch({type: 'SET_THEME', theme: 1})},
          {label: 'hpTheme', onClick: ()=>dispatch({type: 'SET_THEME', theme: 2})},
          { label: 'LogOut', onClick: () => logOut() }
        ]}
      />
    </Nav>
  )
}

export default Header;

const Nav = ({ children = undefined, ...rest }) => (
  <Box
    as='nav'
    gridArea="header"
    direction="row"
    align="center"
    justify="between"
    pad={{ horizontal: "medium", vertical: "small" }}
    background="brand"
    animation='slideDown'
    {...rest}
  >
    {children}
  </Box>
);