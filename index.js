// Code your solution in this file.


function lowerCaseDrivers(drivers){
  // takes in an array of drivers and makes all of them lowercase using map
  const result = drivers.map(function(driver){
    return driver.toLowerCase();
  });
  return result;
}

function nameToAttributes(drivers){
  // takes in an array of drivers with their name seperated from first and last by a space and returns an array of objects with firstName and lastName attributes
  const result = drivers.map(function(driver){

    const nameArray = driver.split(" ");
    const driverObject = {
      firstName: nameArray[0],
      lastName: nameArray[1],
    };
    return driverObject;
  });
  return result;
}

function attributesToPhrase(drivers){
  // drivers is the result of nameToAttributes and returns a string saying "name of driver is from hometown"

  const result = drivers.map(function(driver){
    return `${driver.name} is from ${driver.hometown}`;
  });
  return result;
}
