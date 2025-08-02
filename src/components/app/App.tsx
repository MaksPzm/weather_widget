import './index.scss';
import LocationSearch from '../searchLocation/SearchlLocation';
import Location from '../location/Location';
import WeatherToday from '../weatherToday/WeatherToday';
import API from '../../api';
import { geocodingAPI } from '../../api';

geocodingAPI();
API()
// const newTemp = API();
let currentTemp = localStorage.getItem('tempReadings');
// console.log('currentTemp: ', currentTemp);
let tempReadings: number | string = localStorage.getItem('temp') ? Number(localStorage.getItem('temp')) : "Данные не найдены";
let tempMax: number | string = localStorage.getItem('tempMax') ? Number(localStorage.getItem('tempMax')) : "Данные не найдены";
let tempMin: number | string = localStorage.getItem('tempMin') ? Number(localStorage.getItem('tempMin')) : "Данные не найдены";

// if (newTemp == undefined) {
//   tempReadings = Number(localStorage.getItem('temp'));
// }


// console.log('newTemp: ', newTemp);





function App() {
  return (
    <div className='app'>
      <section className='wrapper'>
        <header className='header'>
          <LocationSearch />
          <Location />
        </header>
        <div className='wrap'>
          <aside className='aside'>

          </aside>
          <main className='weather'>
            <WeatherToday temp={tempReadings} tempMax={tempMax} tempMin={tempMin}/>
          </main>
        </div>
        
        <footer className='footer'>

        </footer>

      </section>
    </div>
  );
}

export default App;
