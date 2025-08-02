import styles from "./weatherToday.module.scss";

function WeatherToday(props: any) {
    return (
        <div className={styles.weather__weatherToday}>
            <div className={styles.weather__weatherToday__tempReadings}>
                {props.temp}
                <div className={styles.weather__weatherToday__tempReadings__C}>
                    °C
                </div>
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
        </div>
    )
}

export default WeatherToday;