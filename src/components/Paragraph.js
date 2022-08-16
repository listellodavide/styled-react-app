import React from 'react';
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {Typography, TextField} from '@mui/material';
import Kaushan from "../fonts/KaushanScript-Regular.ttf";

const themeThree = createTheme({
  typography: {
    fontFamily: "Kaushan Script"
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "@font-face": {
          fontFamily: "Kaushan Script",
          src: `url(${Kaushan}) format("truetype")`
        },
        body: {
          fontSize: "3rem",
          color: "purple"
        }
      }
    }
  }
});

const Paragraph = () => {
    return(
      <div>
        <ThemeProvider theme={themeThree}>
            <CssBaseline />
            <Typography variant="h1">Hello World h1</Typography>
            <Typography variant="body1">Some text here as body1</Typography>
            <div>Some body text</div>
            <TextField placeholder="Name" variant="outlined"/>
        </ThemeProvider>
      </div>
    ); 
}

export default Paragraph;