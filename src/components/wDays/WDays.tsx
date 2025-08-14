import React from "react";
import { useState, useEffect } from "react";
import styles from "./wDays.module.scss"


export default function WDays(props:any): React.JSX.Element {
    return (
        <div className={styles.day}>
            <h2 className={styles.day__date}>Погода на: {props.day} </h2>
            <div className={styles.day__weather}>
                <div className={styles.day__weather_block}>
                    {props.temp_min}
                    <div className={styles.day__weather_block_deg}>°C</div>
                </div>
                <img className={styles.day__weather_imgWeather} src={`../../../images/png/weather/big/${props.weather}.png`} alt="погода"/>
                <div className={styles.day__weather_block}>
                   {props.temp_max}
                    <div className={styles.day__weather_block_deg}>°C</div>  
                </div>
                
            </div>
        </div>    
    );
}