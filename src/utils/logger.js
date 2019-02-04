const logger = {
  log,
  logPretty,
}

export default logger;

function log(...objects) {
  objects.forEach(
    object => console.log(object)
  );
}

function logPretty(...objects) {
  objects = objects.map(
    object => JSON.stringify(object, null, 2)
  );

  log(...objects);
}
