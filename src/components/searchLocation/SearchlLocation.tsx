import React from 'react';
import styles from "./searchLocation.module.scss"
import search from "./images/svg/search.svg";
import { ChangeEvent, useState } from "react";
import Location from '../location/Location';


let stateArr: string[] = [];

function LocationSearch(): React.JSX.Element {
    
    
    
    const [inputValue, setInputValue] = useState<string>("");
    const [state, setState] = useState<string | null>("Москва");

   const handleChang = (event: ChangeEvent<HTMLInputElement>) => {
       if (state) {
           setState("Москва");
       }
       setInputValue(event.target.value);
   }
   const handlerKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
       const { key } = event;
       if (key === 'Enter') {
            setState(inputValue);
            stateArr.push(inputValue);
            setInputValue('');
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
                    // <span className={styles.blockSearch__search_placeholder}>Поиск своего местоположения</span>
                />
            </div>
            <Location state={state} saveState={stateArr}/>
        </>    
    )
}

export default LocationSearch;

function clickBlockSearch(event: any) {
    console.log('event: ', event);
    event.stopPropagation();
    event.preventDefault();
    const { target } = event;
    const input = target.querySelector('input');
    console.log('input: ', input);
    // event.preventDefault();
    if (input !== null) {
        input.focus()
    } else {
        return 
    }
}



const searchState = (e: any) => {
    e.stopPropagation();
    e.preventDefault();
    let { target } = e;
    let state = target;
    console.log('state: ', state);
}