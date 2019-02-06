import Snapshot from '../models/weather/Snapshot';

const weatherService = {
  requestData,
}

export default weatherService;

const urlBase = 'https://api.openweathermap.org/data/2.5/weather';
const appId = '3ccbdea52230974079124e584dbbbb86';

function urlLocation(location) {
  return `${urlBase}?q=${location}&appid=${appId}`;
}

function urlId(id) {
  return `${urlBase}?id=${id}&appid=${appId}`;
}

function requestData(location) {
  return new Promise(function (resolve, reject) {
    if (!location) {
      reject("Parameter 'location' must be defined.");
      return;
    }

    let url;

    if (location.id) {
      url = urlId(location.id);

    } else if (location.city) {
      url = urlLocation(location.city);

    } else {
      reject("Either location id or city must be specified.");
      return;
    }

    fetch(url)
      .then(
        response => response.json()
      )
      .then(obj => {
        if (obj.cod) {
          obj.cod = parseInt(obj.cod);
        }

        if (obj.cod === 200) {
          const snapshot = new Snapshot(obj);
          resolve(snapshot);

        } else {
          obj.location = location;
          reject(obj);
        }
      })
      .catch(
        error => reject(error)
      );
  });
}
