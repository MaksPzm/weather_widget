import './index.scss';
import LocationSearch from '../searchLocation/SearchlLocation';
// import Location from '../location/Location';
import WeatherToday from '../weatherToday/WeatherToday';
import API from '../../api';
import { geocodingAPI } from '../../api';

geocodingAPI();
API()
let tempReadings: number | string = localStorage.getItem('temp') ? Number(localStorage.getItem('temp')) : "Данные не найдены";
let tempMax: number | string = localStorage.getItem('tempMax') ? Number(localStorage.getItem('tempMax')) : "Данные не найдены";
let tempMin: number | string = localStorage.getItem('tempMin') ? Number(localStorage.getItem('tempMin')) : "Данные не найдены";
let description: string = localStorage.getItem('description') ? String(localStorage.getItem('description')) : "";
console.log('description: ', description);

const imgWeather: any = {
  "переменная облачность": '../../../images/svg/weather/облачно.svg',
  "пасмурно": '../../../images/svg/weather/пасмурно.svg',
  "небольшой дождь": '../../../images/svg/weather/дождь.svg',
  "ясно": '../../../images/svg/weather/солнечно.svg' 
};
console.log('imgWeather: ', imgWeather[description]);
function App() {
  return (
    <div className='app'>
      <section className='wrapper'>
        <header className='header'>
          <LocationSearch />
        </header>
        <div className='wrap'>
          <aside className='aside'>

          </aside>
          <main className='weather'>
            <WeatherToday temp={tempReadings} tempMax={tempMax} tempMin={tempMin} description={imgWeather[description]}/>
          </main>
        </div>
        
        <footer className='footer'>

        </footer>

      </section>
    </div>
  );
}

export default App;
