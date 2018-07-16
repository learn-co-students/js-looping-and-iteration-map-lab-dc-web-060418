function lowerCaseDrivers(drivers) {
  return drivers.map( function(driver) {
    return driver.toLowerCase();
  });
}

function nameToAttributes(drivers) {
  return drivers.map( function(driver) {
    let split_driver = driver.split(" ");
    return {firstName: split_driver[0], lastName: split_driver[1]};
  });
}

function attributesToPhrase(drivers) {
  return drivers.map( function(driver) {
    return `${driver.name} is from ${driver.hometown}`
  });
}
