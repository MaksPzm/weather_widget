import React from 'react';
import styles from "./searchLocation.module.scss"
import search from "./images/svg/search.svg";
import { ChangeEvent, useState } from "react";
import Location from '../location/Location';

let cityArr: string[] = [];

function LocationSearch(props: any): React.JSX.Element {
    const [inputValue, setInputValue] = useState<string>("");
    const [city, setCity] = useState<string | null>(props.newCity);

   const handleChang = (event: ChangeEvent<HTMLInputElement>) => {
       if (city) {
           setCity(props.newCity !== null ? props.newCity : "Москва");
       }
       setInputValue(event.target.value);
   }
   const handlerKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
       const { key } = event;
       if (key === 'Enter') {
            setCity(inputValue);
            cityArr.push(inputValue);
            setInputValue('');
            props.geocodingCity(inputValue);
       }
   }
   
    return (
        <>
            <div className={styles.blockSearch} onClick={clickBlockSearch}>
                <img 
                    src={search}
                    className={styles.blockSearch__search_img}
                    alt="search"
                />
                <input className={styles.blockSearch__search}
                        placeholder="Введите нужный город"
                        type="text"
                        onChange={handleChang}
                        onKeyDown={handlerKeyPress}
                        value={inputValue}
                />
            </div>
            <Location state={city} saveCity={cityArr}/>
        </>    
    )
}

export default LocationSearch;

function clickBlockSearch(event: any) {
    event.stopPropagation();
    event.preventDefault();
    const { target } = event;
    const input = target.querySelector('input');
    if (input !== null) {
        input.focus()
    } else {
        return 
    }
}
