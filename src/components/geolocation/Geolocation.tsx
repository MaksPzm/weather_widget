import React from "react";
import styles from "./geolocation.module.scss";
import { useState, useEffect } from "react";
import { click } from "@testing-library/user-event/dist/click";
export default function Geolocation(props:any): React.JSX.Element {
    const [lat, setLat] = useState<number>(55.7505412);
    const [lon, setLon] = useState<number>(37.6174782);
    const [resultApi, setResultApi] = useState<any>("");
    navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords;
        setLat(latitude);
        setLon(longitude);
    });
    useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=7a7246067a4dacd8861ed493fa0284f1&lang=ru&units=metric`)
        .then((response) => response.json())
        .then((data) => {setResultApi(data)
        })
        .catch(err => {
            console.log('Ошибка запроса');
        });
    }, [navigator.geolocation]);      
    const saveCity = (e:any) => {
        props.geolocationCity(e.target.innerText);
    }
    return (
        <div className={styles.geolocation}>
            <label className={styles.geolocation__label}>
                Моё место нахождения:
                <button type="button" className={styles.geolocation__label_btn} onClick={saveCity}>
                    {resultApi.name !== "" ? resultApi.name : "Местоположение не найдено!"}
                </button>
            </label>
        </div>
    )
}