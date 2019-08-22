import React from "react"
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid"
import './App.css';
import { Typography } from "@material-ui/core";

interface EachDay {
    name: string;
    temperature: string;
    img: string;
    onSelect(): void;
}

const EachDay: React.FC<EachDay> = ({ name, temperature, img, onSelect }) => {

    return (
        <Grid container className="day" onClick={onSelect}>
            <Typography variant="h5" component="h2" color="textSecondary" className="name">
                {name}
            </Typography>
            <Grid item className="weather-icon">
                <img src={img} alt="weather" style={{ maxWidth: "300px", maxHeight: "300px" }} />
            </Grid>
            <Typography variant="body2" color="textPrimary" className="temp">
                {temperature}
            </Typography>
        </Grid>
    )
}

export default EachDay;

