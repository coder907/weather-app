import Snapshot from '../models/weather/Snapshot';
// import logger from '../utils/logger';

const weatherService = {
  requestData,
}

export default weatherService;

const appId = '3ccbdea52230974079124e584dbbbb86';

function url(city) {
  return `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appId}`
}

function requestData(city) {
  return new Promise(function (resolve, reject) {
    if (!city) {
      reject("Parameter 'city' must be defined.");
      return;
    }

    city = city.trim().toLowerCase();

    if (city === '') {
      reject("Parameter 'city' must not be empty.");
      return;
    }

    fetch(url(city))
      .then(
        response => response.json()
      )
      .then(obj => {
        if (obj.cod) {
          obj.cod = parseInt(obj.cod);
        }        
        if (obj.cod === 200) {
          const snapshot = new Snapshot(obj);
          // logger.logPretty(obj, snapshot);
          resolve(snapshot);
        } else {
          obj.city = city;
          reject(obj);
        }
      })
      .catch(
        error => reject(error)
      );
  });
}
