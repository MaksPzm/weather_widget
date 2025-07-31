import './index.scss';
import LocationSearch from '../searchLocation/SearchlLocation';
import Location from '../location/Location';
import WeatherToday from '../weatherToday/WeatherToday';
import API from '../../api';
import { geocodingAPI } from '../../api';

// geocodingAPI();
// API();

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
            <WeatherToday />
          </main>
        </div>
        
        <footer className='footer'>

        </footer>

      </section>
    </div>
  );
}

export default App;
