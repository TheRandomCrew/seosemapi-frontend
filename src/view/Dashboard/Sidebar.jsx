import React from 'react';
import { Link } from "react-router-dom";

import { Box, Button } from "grommet";

const links = [
  { label: "Dashboard API", path: '/home' }, 
  { label: "Buscar", path: '/searches' }, 
  { label: "Verificar", path: '/errores' }, 
  { label: 'Documentacion', path: '/documentacion' }
]

function Sidebar({ sidebar, path }) {
  return sidebar && (
    <Aside>
      {links.map((name, id) => (
        <Link to={`${path}${name.path}`} key={name.label + id}>
          <Button fill hoverIndicator label={name.label} primary color='brand' style={{ borderRadius: '0px' }} />
        </Link>
      ))}
    </Aside>
  )
}

export default Sidebar;

const Aside = ({ children = undefined, ...rest }) => (
  <Box
    as='aside'
    gridArea="sidebar"
    background="brand"
    width="small"
    animation={[
      { type: "fadeIn", duration: 300 },
      { type: "slideRight", size: "xlarge", duration: 150 }
    ]}
    {...rest}
  >
    {children}
  </Box>
);