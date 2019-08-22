import { createMuiTheme } from "@material-ui/core";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import React from "react";

export const light = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#faeaff',
    },
    secondary: {
      main: '#68b0be',
    },
  },
});

export const dark = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#373746',
    },
    secondary: {
      main: '#0f2024',
    },
  },
})

export enum AppTheme {
  light,
  dark
}

const SetTheme: React.FC<{ setTheme: (theme: AppTheme) => void, currentTheme: AppTheme }> = ({ setTheme, currentTheme }) => {

  return (
    <FormControlLabel
      control={
        <Switch
          checked={currentTheme === AppTheme.light}
          onChange={(e) => setTheme(e.target.checked ? AppTheme.light : AppTheme.dark)}
          color="secondary"
        />
      }
      label="Change theme"
    />
  )
}

export default SetTheme