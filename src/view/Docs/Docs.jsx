import React from 'react'
import { Grommet, grommet, Box, Heading, Markdown} from 'grommet'

const Docs =  React.memo(() => {
    const CONTENT = `
# seosemapi-frontend

React Frontend for https://data.seosemapi.com/
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### \`npm start\`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.
    
  `;
  
    return (
    <Grommet style={{"height":"100vh"}} theme={grommet}>
      <Box align="center" justify="center" pad="small" fill="horizontal" animation="zoomIn">
        <Heading>
          Documentación
        </Heading>
        <Markdown>
         {CONTENT}
        </Markdown>
      </Box>
    </Grommet>
    )
  })
export default Docs;