import { useState } from "react";
import { TextField } from "@mui/material";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import { DatePicker, LocalizationProvider } from "@mui/lab";
import DateFnsUtils from "@date-io/date-fns";
import Typography from "@mui/material/Typography";
import "./app.css";
import {ButtonCustom} from 'components/common';

import CssBaseline from "@mui/material/CssBaseline";
import darkScrollbar from "@mui/material/darkScrollbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { fontWeight } from "@mui/system";
import Paragraph from "./Paragraph";
import Silkscreen from "../fonts/Silkscreen-Regular.ttf";
import NotoSans from "../fonts/NotoSans-Regular.ttf";
/* import moment from "moment"; */

const themeTwo = createTheme({
  typography: {
    fontFamily: "Silkscreen Regular"
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "@font-face": {
          fontFamily: "Silkscreen Regular",
          src: `url(${Silkscreen}) format("truetype")`
        },
        body: {
          fontSize: "3rem",
          color: "#1E90FF"
        }
      }
    }
  }
});

const themeOne = createTheme({
  typography: {
    fontFamily: "NotoSans Regular"
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "@font-face": {
          fontFamily: "NotoSans Regular",
          src: `url(${NotoSans}) format("truetype")`
        },
        body: {
          fontSize: "3rem",
          color: "#1E90FF"
        }
      }
    }
  }
});

export default function App() {
  return (
    <div className="App">
      <ThemeProvider theme={themeOne}>
        <CssBaseline />
        <Typography variant="caption">This is a sentence with custom fonts</Typography>
        <Button variant="outlined" startIcon={<DeleteIcon />}>
          Delete
        </Button>
        <Button variant="contained" endIcon={<SendIcon />}>
          Send
        </Button>
        <ButtonCustom>test</ButtonCustom>
        <LocalizationProvider dateAdapter={DateFnsUtils}>
          <CustomDatePicker />
        </LocalizationProvider>
      </ThemeProvider>
    </div>
  );
}

function CustomDatePicker() {
  const [date, setDate] = useState(new Date());

  return (
    <>
      <DatePicker
        inputFormat="dd.MM.yyyy"
        value={date}
        onChange={(value) => setDate(value)}
        renderInput={(params) => <TextField {...params} />}
      />
      <DatePicker
        inputFormat="dd.MM.yyyy"
        value={date}
        onChange={(value) => setDate(value)}
        renderInput={(params) => <TextField {...params} fullWidth />}
      />
      <Paragraph></Paragraph>
    </>
  );
}