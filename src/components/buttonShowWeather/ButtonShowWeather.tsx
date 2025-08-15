import React from "react";
import styles from "./buttonShowWeather.module.scss";
import { useState } from "react";


export default function ButtonShowWeathet(props:any): React.JSX.Element {
    const text = "Показать погоду на 5 дней";
    const newText = "Показать погоду только на сегодня";
    const [boolean, setBoolean] = useState<boolean>(true);
    const showWeather = (e:any) => { 
        boolean === true ?  setBoolean(false) :  setBoolean(true);
        props.buttonPress(boolean);
        e.target.innerText === text ? e.target.innerText = newText : e.target.innerText = text;
    }
    return (
        <button className={styles.btn} onClick={showWeather}>{text}</button>
    )
}