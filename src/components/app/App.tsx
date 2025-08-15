import './index.scss';
import LocationSearch from '../searchLocation/SearchlLocation';
import WeatherNow from '../weatherNow/WeatherNow';
import { useState, useEffect, use } from 'react';
import WeatherToday from '../weatherToDay/WeatherToday';
import ButtonShowWeathet from '../buttonShowWeather/ButtonShowWeather';
import WeatherFiveDays from '../weatherFiveDays/WeatherFiveDays';


let tempReadings: number | string = localStorage.getItem('temp') ? Number(localStorage.getItem('temp')) : "Данные не найдены";
let tempMax: number | string = localStorage.getItem('tempMax') ? Number(localStorage.getItem('tempMax')) : "Данные не найдены";
let tempMin: number | string = localStorage.getItem('tempMin') ? Number(localStorage.getItem('tempMin')) : "Данные не найдены";
let description: string = localStorage.getItem('description') ? String(localStorage.getItem('description')) : "";

const imgWeather: any = {
  "переменная облачность": '../../../images/svg/weather/облачно.svg',
  "пасмурно": '../../../images/svg/weather/пасмурно.svg',
  "небольшой дождь": '../../../images/svg/weather/дождь.svg',
  "ясно": '../../../images/svg/weather/солнечно.svg',
  "небольшая облачность": '../../../images/svg/weather/небольшая облачность.svg',
  "облачно с прояснениями": '../../../images/svg/weather/небольшая облачность.svg',
  "дождь": '../../../images/svg/weather/дождь.svg' 
};

function App() {
  const main = {temp: tempReadings, temp_max: tempMax, temp_min: tempMin};
  const weather = [{description: description}];
  const [geocoding, setGeocoding] = useState<any>({});
  const [resultAPI, setResultApi] = useState<{main: any, weather: any}>({main, weather})
  const [lat, setLat] = useState<number>(55.7505412);
  const [lon, setLon] = useState<number>(37.6174782);
  const [titleCity, setTitleCity] = useState(localStorage.getItem('city') ? localStorage.getItem('city') : "Москва")
  const geocodingCity = (data:string) => {
    setTitleCity(data);
    localStorage.setItem("city", data);
  }
  const [boolean, setBoolean] = useState<boolean>(false);
  const buttonPress = (res:boolean) => {
    setBoolean(res)
  }
  useEffect(() => {
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${titleCity},643&limit=1&appid=7a7246067a4dacd8861ed493fa0284f1`)
        .then((response) => response.json())
        .then((data) => {
          setGeocoding(data);
          setLat(data[0].lat);
          setLon(data[0].lon);
        })
        .catch(err => {
            console.log('Ошибка запроса');
        })
  }, [titleCity])
  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=7a7246067a4dacd8861ed493fa0284f1&lang=ru&units=metric`)
        .then((response) => response.json())
        .then((data) => {setResultApi(data)
        })
        .catch(err => {
            console.log('Ошибка запроса');
        });
  }, [geocoding])
  return (
    <div className='app'>
      <section className='wrapper'>
        <header className='header'>
          <LocationSearch newCity={titleCity} geocodingCity={geocodingCity}/>
        </header>
        <div className='wrap'>
          <main className='weather'>
            <ButtonShowWeathet buttonPress={buttonPress}/>
            <section className='weather__section'>  
              <WeatherNow 
                temp={resultAPI.main.temp ? Math.round(resultAPI.main.temp) : 0} 
                tempMax={Math.ceil(resultAPI.main.temp_max)} 
                tempMin={Math.floor(resultAPI.main.temp_min)} 
                description={imgWeather[resultAPI.weather[0].description]}/>
                {boolean === false ? 
                  <WeatherToday 
                    lat={lat}
                    lon={lon}
                  /> :
                  <WeatherFiveDays
                    lat={lat}
                    lon={lon}
                  />}
            </section>      
          </main>
        </div>
      </section>
    </div>
  );
}

export default App;

