import React from "react"
import { useState, useEffect } from "react";
import styles from "./weatherFiveDays.module.scss";
import WDays from "../wDays/WDays";

export default function WeatherFiveDays(props:any): React.JSX.Element {
    const daily = {0: {main: 0}};
    const date =new Date;
    const [data, setData] = useState<{daily:any}>({daily});
    const [boolean, setBoolean] = useState(false);
    useEffect(() => {
        fetch(`https://www.meteosource.com/api/v1/free/point?lat=${props.lat}&lon=${props.lon}&sections=current%2Cdaily&language=en&units=metric&key=0yhpulmq0puhpdn841y7aklgjd638ep6b7ak9exp`)
            .then((response) => response.json())
            .then((result) => {
                setData(result)
                setBoolean(true)
            })
            .catch(err => {
                console.log("Ошибка запроса");
            })
    }, [props])
    return (
        <div className={styles.section}>
            <WDays
                temp_min={boolean == false ? 0 : Math.round(data.daily.data[0].all_day.temperature_min)}
                temp_max={boolean == false ? 0 : Math.round(data.daily.data[0].all_day.temperature_max)}
                weather={boolean == false ? 0 : data.daily.data[0].all_day.icon}
                day={boolean == false ? 0 : date.toLocaleDateString()}/>
            <WDays
                temp_min={boolean == false ? 0 : Math.round(data.daily.data[1].all_day.temperature)}
                temp_max={boolean == false ? 0 : Math.round(data.daily.data[0].all_day.temperature_max)}
                weather={boolean == false ? 0 : data.daily.data[1].all_day.icon}
                day={boolean == false ? 0 : new Date(date.setDate(date.getDate() + 1)).toLocaleDateString()}/>
            <WDays
                temp_min={boolean == false ? 0 : Math.round(data.daily.data[2].all_day.temperature)}
                temp_max={boolean == false ? 0 : Math.round(data.daily.data[0].all_day.temperature_max)}
                weather={boolean == false ? 0 : data.daily.data[2].all_day.icon}
                day={boolean == false ? 0 : new Date(date.setDate(date.getDate() + 1)).toLocaleDateString()}/>
            <WDays
                temp_min={boolean == false ? 0 : Math.round(data.daily.data[3].all_day.temperature)}
                temp_max={boolean == false ? 0 : Math.round(data.daily.data[0].all_day.temperature_max)}
                weather={boolean == false ? 0 : data.daily.data[3].all_day.icon}
                day={boolean == false ? 0 : new Date(date.setDate(date.getDate() + 1)).toLocaleDateString()}/>
            <WDays
                temp_min={boolean == false ? 0 : Math.round(data.daily.data[4].all_day.temperature)}
                temp_max={boolean == false ? 0 : Math.round(data.daily.data[0].all_day.temperature_max)}
                weather={boolean == false ? 0 : data.daily.data[4].all_day.icon}
                day={boolean == false ? 0 : new Date(date.setDate(date.getDate() + 1)).toLocaleDateString()}/>
        </div>    
    );
}