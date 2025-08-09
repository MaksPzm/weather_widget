import React from "react"
import styles from "./location.module.scss"
import location from "./images/svg/location.svg"
import { useState } from "react"

function Location(props: any): React.JSX.Element {
    const [isActive, setActive] = useState(false);
    const showSaveCity = () => {
        setActive(current => !current);
        showCity()
    }
    const [city, setCity] = useState<any>("");
    const showCity = () => {
        setCity(props.saveCity)
    }
    
    return (
        <div className={styles.blockLocation}>
            <button className={styles.blockLocation__location} onClick={showSaveCity}>
                <img 
                    src={location}
                    className={styles.blockLocation__location_img}
                    alt="location"
                />
                <span className={styles.blockLocation__location_placeholder}>{props.state}</span>
            </button>
            <div className={isActive ? styles.blockLocation__state_active : styles.blockLocation__state_none}>
                <span>Уже искали:</span>
                {city.length == 0 && " Данные не найдены"}
                {city.length > 0 ? city.map((value:string, index:number) => <span key={index} className={styles.blockLocation__state_active_city}>{value}</span>) : ""}
            </div>
        </div>    
    )
}

export default Location;