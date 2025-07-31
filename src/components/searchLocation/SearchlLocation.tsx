import styles from "./searchLocation.module.scss"
import search from "./images/svg/search.svg";

function LocationSearch() {
    return (
        <div className={styles.blockSearch} onClick={clickBlockSearch}>
            <img 
                src={search}
                className={styles.blockSearch__search_img}
                alt="search"
            />
            <input className={styles.blockSearch__search}
                    placeholder="Поиск своего местоположения"
                    type="text"
                // <span className={styles.blockSearch__search_placeholder}>Поиск своего местоположения</span>
            />
        </div>
    )
}

export default LocationSearch;

function clickBlockSearch(event: any) {
    const { target } = event;
    const input = target.querySelector('input');
    console.log('input: ', input);
    // event.preventDefault();
    input.focus()
}