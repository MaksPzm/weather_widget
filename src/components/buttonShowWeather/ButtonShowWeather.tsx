import React from "react";
import styles from "./buttonShowWeather.module.scss";


export {};
function ButtonShowWeathet(): React.JSX.Element {
    const text = "Показать погоду на 5 дней";
    const newText = "Показать погоду только на сегодня";
    const showWeather = () => {
        
    }
return (
    <button onClick={showWeather}>`${text}`</button>
)
}