import { Children, ReactElement } from "react";
import styles from "./weatherToday.module.scss";

function WeatherToday(props: any) {
    const date = new Date;
    return (
        <div className={styles.weather__weatherToday}>
            <div className={styles.weather__weatherToday__tempReadings}>
                {props.temp}
                <div className={styles.weather__weatherToday__tempReadings__C}>
                    °C
                </div>
                <img src={props.description} className={styles.weather__weatherToday__tempReadings_img} alt="погода" />
            </div>
            <div className={styles.weather__weatherToday__temp}>
                <div className={styles.weather__weatherToday__temp_maxMin}>
                    {props.tempMax}
                    <div className={styles.weather__weatherToday__tempReadings__C_blockTemp}>
                        °C
                    </div>
                    <span className={styles.weather__weatherToday__temp_maxMin_text}>днем</span>
                </div>
                <div className={styles.weather__weatherToday__temp_maxMin}>
                    {props.tempMin}
                    <div className={styles.weather__weatherToday__tempReadings__C_blockTemp}>
                        °C
                    </div>
                    <span className={styles.weather__weatherToday__temp_maxMin_text}>ночью</span>
                </div>
            </div>
            <div className={styles.weather__weatherToday_date}>
                {date.toLocaleDateString()}
            </div>
        </div>
    )
}

export default WeatherToday;