import { useState } from "react";
import { TextField } from "@mui/material";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import { DatePicker, LocalizationProvider } from "@mui/lab";
import DateFnsUtils from "@date-io/date-fns";
import "./app.css";
import {ButtonCustom} from 'components/common';

import CssBaseline from "@mui/material/CssBaseline";
import darkScrollbar from "@mui/material/darkScrollbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { fontWeight } from "@mui/system";
/* import moment from "moment"; */

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          ...darkScrollbar(),
          color: "#212529",
          backgroundColor: "#E0E0E0",
          "& h1": {
            color: "#FF6666"
          },
          "& p": {
            margin: 0,
            color: "#FF6666",
            typography: {
              fontFamily: ['"Helvetica Neue"',  '"Kaushan Script"'].join(","),
            }
          },
          "& a": {
            fontWeight: "bold"
          }
        }
      }
    }
  }
});

export default function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <p>This is a sentence with custom fonts</p>
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
    </>
  );
}