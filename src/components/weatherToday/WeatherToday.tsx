import React from "react";
import styles from "./WeatherToday.module.scss"
import { useState, useEffect } from "react";
import { imgWeather } from "../app/App";

const list = {
  0: {main: 0}
};
const weather = [{
  description: ""
}]


function WeatherToday(props: any): React.JSX.Element {
    const date =new Date;
    const [data, setData] = useState<{list:any}>({list});
    const [boolean, setBoolean] = useState(false)
    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${props.lat}&lon=${props.lon}&appid=7a7246067a4dacd8861ed493fa0284f1&lang=ru&units=metric`)
            .then((response) => response.json())
            .then((result) => {
                setData(result)
                setBoolean(true)
            console.log("APIdata", result);
            })
            .catch(err => {
                console.log("Ошибка запроса");
            })
    }, [props])
        
    return (
        <div className={styles.section}>
            <h2 className={styles.section__date}>Погода на: {date.toLocaleDateString()}</h2>
            <div className={styles.section__weather}>
                <div className={styles.section__weather_day}>
                    <div className={styles.section__weather_day_block}>
                        {Math.floor(boolean == false ? 0 : data.list[0].main.temp)}
                        <div className={styles.section__weather_day_block_deg}>°C</div>
                        <img className={styles.section__weather_day_block_imgWeather} src={boolean == false ? "" : imgWeather[data.list[0].weather[0].description]} alt="погода"/>
                    </div>
                    <div className={styles.section__weather_day_block}>
                        {Math.floor(boolean == false ? 0 : data.list[4].main.temp)}
                        <div className={styles.section__weather_day_block_deg}>°C</div>
                        <img className={styles.section__weather_day_block_imgWeather} src={boolean == false ? "" : imgWeather[data.list[4].weather[0].description]} alt="погода"/>
                    </div>
                </div>
                <div className={styles.section__weather_wind}>
                    <span>Ветер</span>
                    <div className={styles.section__weather_wind_block}>
                        <div className={styles.section__weather_wind_block_res}>
                            <span>Градусы:</span>
                            {Math.floor(boolean == false ? 0 : (data.list[0].wind.deg)/33.8)}
                        </div>
                        <div className={styles.section__weather_wind_block_res}>
                            <span>Порыв:</span>
                            {boolean == false ? 0 : (data.list[0].wind.gust)}
                        </div>
                        <div className={styles.section__weather_wind_block_res}>
                            <span>Скорость:</span>
                            {boolean == false ? 0 : (data.list[0].wind.speed)}

                        </div>
                    </div>
                </div>
            </div>
        </div>    
    );
}

export default WeatherToday;