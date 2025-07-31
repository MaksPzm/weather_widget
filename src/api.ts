export default function API() {
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=55.7504461&lon=37.6174943&appid=7a7246067a4dacd8861ed493fa0284f1&lang=ru')
        .then((response) => response.json())
        .then(result)
        .catch(err => {
            console.log('Ошибка запроса');
        })
}

function geocodingAPI() {
    fetch('http://api.openweathermap.org/geo/1.0/direct?q=Ульяновск,643&limit=1&appid=7a7246067a4dacd8861ed493fa0284f1')
        .then((response) => response.json())
        .then(resultGeocoding)
        .catch(err => {
            console.log('Ошибка запроса');
        })
}
export { geocodingAPI };
 
function result(data: any) {
    let resultAPI = data;
    console.log("resultAPI", resultAPI);
}
function resultGeocoding(data: any) {
    let resultAPIG = data;
    console.log("resultAPIG", resultAPIG);
}