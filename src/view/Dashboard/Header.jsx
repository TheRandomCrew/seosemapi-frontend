import React from 'react';
import { Box, Button, Text, Menu } from "grommet";
import { history } from '../../router/router'
import tokenService from '../../router/token';

function Header({ setSidebar, sidebar, email }) {
  const logOut = () => {
    tokenService.delete()
    history.replace(`/`)
  }

  const toProfile = () => {
    history.replace(`/dashboard/perfil`)
  };

  return (
    <Nav>
      <Button onClick={() => setSidebar(!sidebar)}>
        <Text size="large">SEOSEMAPI LOGO</Text>
      </Button>
      <Menu
        label={email}
        items={[
          { label: 'Perfil', onClick: () => toProfile() },
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