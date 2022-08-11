function findMatching(drivers, name){
    return drivers.filter(function (driverName){
        return driverName.toLowerCase() === name.toLowerCase()
    })
}

function fuzzyMatch(drivers, string){
    return drivers.filter((driverName) => driverName[0].toLowerCase() === string[0].toLowerCase())
}

function matchName(drivers, string){
    return drivers.filter((driver) => driver.name.toLowerCase() === string.toLowerCase())
}
