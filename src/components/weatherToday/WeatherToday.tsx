import React from "react";
import styles from "./WeatherToday.module.scss"
import { useState, useEffect } from "react";

interface ComponentProps {
    lat: number,
    lon: number
}

function WeatherToday(props: ComponentProps): React.JSX.Element {
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
            <h2 className={styles.section__date}>Погода на: {date.toLocaleDateString()}</h2>
            <div className={styles.section__weather}>
                <div className={styles.section__weather_day}>
                    <div className={styles.section__weather_day_block}>
                        {Math.floor(boolean == false ? 0 : data.daily.data[0].all_day.temperature_max)}
                        <div className={styles.section__weather_day_block_deg}>°C</div>
                        <img className={styles.section__weather_day_block_imgWeather} src={boolean == false ? (`../../../images/png/weather/big/1.png`) : (`../../../images/png/weather/big/${data.daily.data[0].icon}.png`)} alt="погода"/>
                    </div>
                    <div className={styles.section__weather_day_block}>
                        {Math.floor(boolean == false ? 0 : data.daily.data[0].all_day.temperature_min)}
                        <div className={styles.section__weather_day_block_deg}>°C</div>
                        <img className={styles.section__weather_day_block_imgWeather} src={boolean == false ? (`../../../images/png/weather/big/1.png`) : (`../../../images/png/weather/big/${data.daily.data[0].icon}.png`)} alt="погода"/>
                    </div>
                </div>
                <div className={styles.section__weather_wind}>
                    <span>Ветер</span>
                    <div className={styles.section__weather_wind_block}>
                        <div className={styles.section__weather_wind_block_res}>
                            <span>Скорость:</span>
                            {(boolean == false ? 0 : (data.daily.data[0].all_day.wind.speed))}
                        </div>
                        <div className={styles.section__weather_wind_block_res}>
                            <span>Направление:</span>
                            {boolean == false ? 0 : (data.daily.data[0].all_day.wind.dir)}
                        </div>
                        <div className={styles.section__weather_wind_block_res}>
                            <span>Угол:</span>
                            {boolean == false ? 0 : (data.daily.data[0].all_day.wind.angle)}

                        </div>
                    </div>
                </div>
            </div>
        </div>    
    );
}

export default WeatherToday;