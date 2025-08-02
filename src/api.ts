export default function API() {
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=55.7504461&lon=37.6174943&appid=7a7246067a4dacd8861ed493fa0284f1&lang=ru&units=metric')
        .then((response) => response.json())
        .then(result)
        .catch(err => {
            console.log('Ошибка запроса');
        });
        let newTemp = tempReadings;
        // return newTemp; 
}

function geocodingAPI() {
    fetch('http://api.openweathermap.org/geo/1.0/direct?q=Ульяновск,643&limit=1&appid=7a7246067a4dacd8861ed493fa0284f1')
        .then((response) => response.json())
        .then(resultGeocoding)
        .catch(err => {
            console.log('Ошибка запроса');
        })
}

let tempReadings: {temp: number, max: number, min: number};

 
function result(data: any) {
    let resultAPI = data;
    const temp: number = Math.round(resultAPI.main.temp);
    const tempMax: number = Math.round(resultAPI.main.temp_max);
    const tempMin: number = Math.round(resultAPI.main.temp_min);
    tempReadings = {temp: temp,
        max: tempMax,
        min: tempMin 
    };
    console.log('tempReadings: ', tempReadings);
    localStorage.setItem("temp", JSON.stringify(temp));
    localStorage.setItem("tempMax", JSON.stringify(tempMax));
    localStorage.setItem("tempMin", JSON.stringify(tempMin));
}
function resultGeocoding(data: any) {
    // let resultAPIG = data;
    // console.log("resultAPIG", resultAPIG);
}

export { geocodingAPI };