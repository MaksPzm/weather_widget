import React from "react"
import styles from "./location.module.scss"
import location from "./images/svg/location.svg"

function Location(props: any): React.JSX.Element {
    const showSaveState = () => {
        
    }
    return (
        <>
            <button className={styles.blockLocation__location} onClick={showSaveState}>
                <img 
                    src={location}
                    className={styles.blockLocation__location_img}
                    alt="location"
                />
                <span className={styles.blockLocation__location_placeholder}>{props.state}</span>
            </button>
            <div className={styles.blockLocation__state_none}>
                <span>Москва</span>
                {
                    props.saveState.forEach((value: string) => {
                        <span>`${value}`</span>
                    })
                }
            </div>
        </>    
    )
}

export default Location;