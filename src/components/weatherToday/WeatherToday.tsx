import React from "react";
import styles from "./WeatherToday.module.scss"
import { useState, useEffect } from "react";
// import { imgWeather } from "../app/App";

const daily = {
  0: {main: 0}
};
const weather = [{
  description: ""
}]


function WeatherToday(props:any): React.JSX.Element {
    const date =new Date;
    const [data, setData] = useState<{daily:any}>({daily});
    const [boolean, setBoolean] = useState(false)
    // useEffect(() => {
    //     fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${props.lat}&lon=${props.lon}&appid=7a7246067a4dacd8861ed493fa0284f1&lang=ru&units=metric`)
    //         .then((response) => response.json())
    //         .then((result) => {
    //             setData(result)
    //             setBoolean(true)
    //         console.log("APIdata", result);
    //         })
    //         .catch(err => {
    //             console.log("Ошибка запроса");
    //         })
    // }, [props])
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






// return (
//         <div className={styles.section}>
//             <h2 className={styles.section__date}>Погода на: {date.toLocaleDateString()}</h2>
//             <div className={styles.section__weather}>
//                 <div className={styles.section__weather_day}>
//                     <div className={styles.section__weather_day_block}>
//                         {Math.floor(boolean == false ? 0 : data.list[0].main.temp)}
//                         <div className={styles.section__weather_day_block_deg}>°C</div>
//                         <img className={styles.section__weather_day_block_imgWeather} src={boolean == false ? null : imgWeather[data.list[0].weather[0].description]} alt="погода"/>
//                     </div>
//                     <div className={styles.section__weather_day_block}>
//                         {Math.floor(boolean == false ? 0 : data.list[4].main.temp)}
//                         <div className={styles.section__weather_day_block_deg}>°C</div>
//                         <img className={styles.section__weather_day_block_imgWeather} src={boolean == false ? null : imgWeather[data.list[4].weather[0].description]} alt="погода"/>
//                     </div>
//                 </div>
//                 <div className={styles.section__weather_wind}>
//                     <span>Ветер</span>
//                     <div className={styles.section__weather_wind_block}>
//                         <div className={styles.section__weather_wind_block_res}>
//                             <span>Градусы:</span>
//                             {Math.floor(boolean == false ? 0 : (data.list[0].wind.deg)/33.8)}
//                         </div>
//                         <div className={styles.section__weather_wind_block_res}>
//                             <span>Порыв:</span>
//                             {boolean == false ? 0 : (data.list[0].wind.gust)}
//                         </div>
//                         <div className={styles.section__weather_wind_block_res}>
//                             <span>Скорость:</span>
//                             {boolean == false ? 0 : (data.list[0].wind.speed)}

//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>    
//     );