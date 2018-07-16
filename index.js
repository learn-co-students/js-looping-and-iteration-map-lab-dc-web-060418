// Code your solution in this file.
function lowerCaseDrivers(drivers) {
    return drivers.map(
        function(driver) {
            return driver.toLowerCase();
        }
    );
}


function nameToAttributes(drivers) {
    return drivers.map(
        function(driverName) {
            const names = driverName.split(" ");
            return {firstName: names[0], lastName: names[1]};
        }
    );
}

function attributesToPhrase(driverArray) {
    return driverArray.map(
        function(driverObject) {
            return `${driverObject.name} is from ${driverObject.hometown}`;
        }
    );
}