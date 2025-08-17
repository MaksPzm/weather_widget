import React from "react"
import styles from "./location.module.scss"
import location from "./images/svg/location.svg"
import { useState, useEffect } from "react"

interface ComponentProps {
    state: string | null,
    saveCity: string[],
    geolocationCity: Function,
    
}
function Location(props: ComponentProps): React.JSX.Element {
    const [isActive, setActive] = useState<boolean>(false);
    const showSaveCity = (e:any) => {
        setActive(current => !current);
        showCity()
    }
    useEffect(() => {
        if (isActive == true) {
            setTimeout(() => {setActive(false)}, 6000); 
        }
    }, [showSaveCity])
    const [city, setCity] = useState<any>("");
    const showCity = () => {
        setCity(props.saveCity)
    }
    const selectCityList = (e:any) => {
        props.geolocationCity(e.target.innerText);
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
                {city.length > 0 ? 
                    city.map((value:string, index:number) => 
                    <span key={index} onClick={selectCityList} className={styles.blockLocation__state_active_city}>
                        {value}
                    </span>) : 
                    ""}
            </div>
        </div>    
    )
}

export default Location;

