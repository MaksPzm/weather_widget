import styles from "./location.module.scss"
import location from "./images/svg/location.svg"

function Location() {
    return (
            <button className={styles.blockLocation__location}>
                <img 
                    src={location}
                    className={styles.blockLocation__location_img}
                    alt="location"
                />
                <span className={styles.blockLocation__location_placeholder}>Выберите свой город</span>
            </button>
    )
}

export default Location;