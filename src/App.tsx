import React, { useState } from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles, createStyles, Theme, MuiThemeProvider } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import EachDay from './EachDay';
import SetTheme, { AppTheme, dark, light } from './NightSwitch';

interface EachDaysTemperature {
  name: string;
  temperature: string;
  img: string;
}

const days: EachDaysTemperature[] = [
  {
    name: "Monday",
    temperature: "+25°C / +20°C",
    img: "https://image.flaticon.com/icons/svg/890/890347.svg"
  },
  {
    name: "Tuesday",
    temperature: "+22°C / +19°C",
    img: "https://image.flaticon.com/icons/svg/890/890347.svg"
  },
  {
    name: "Wednesday",
    temperature: "+19°C / +15°C",
    img: "https://image.flaticon.com/icons/svg/252/252035.svg"
  },
  {
    name: "Thursday",
    temperature: "+14°C / +10°C",
    img: "https://image.flaticon.com/icons/svg/414/414974.svg"
  },
  {
    name: "Friday",
    temperature: "+7°C / +4°C",
    img: "https://image.flaticon.com/icons/svg/642/642000.svg"
  }
]

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }),
);

const App: React.FC = () => {
  const [currentTheme, setTheme] = useState<AppTheme>(AppTheme.light)
  return (
    <MuiThemeProvider theme={currentTheme === AppTheme.light ? light : dark}>
      <CssBaseline />
      <body className="App-body">
        <header className="App-header">
          <h1>Weather Forecast</h1>
          <div>
            <SetTheme setTheme={setTheme} currentTheme={currentTheme} />
          </div>
        </header>
        <Grid className="days-container" >
          {days.map(days => 
            <Grid item xs={4} className="eachDay-container" >
              <EachDay  
                name={days.name}
                img={days.img}
                temperature={days.temperature}
                onSelect={() => {
                  // setSelectedItems(addProductsByNotRepeating(selectedItem, item))
                }}
              />
            </Grid>
          )}
        </Grid>
      </body>
    </MuiThemeProvider >
  );
}

export default App;
