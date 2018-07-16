// Code your solution in this file.
function lowerCaseDrivers(drivers) {
    return drivers.map((driver)=>driver.toLowerCase())
}

function nameToAttributes(drivers) {
    return drivers.map((driver)=>{
        space_index = driver.indexOf(" ")
        return {
            firstName: driver.slice(0,space_index),
            lastName: driver.slice(space_index+1,driver.length)
        }
    })
}

function attributesToPhrase(drivers) {
    return drivers.map((driver)=>{
        return `${driver['name']} is from ${driver['hometown']}`
    })
}