// Code your solution here

function findMatching(drivers, name) {
    // Convert the search name and driver names to lowercase for case-insensitive comparison
    const lowerCaseName = name.toLowerCase();
  
    // Use the filter method to find matching drivers
    const matchingDrivers = drivers.filter(function(driver) {
        const lowerCaseDriverName = driver.toLowerCase();

        return lowerCaseDriverName === lowerCaseName;
    });
  
    return matchingDrivers;
}


function fuzzyMatch(drivers, query) {
    const lowerCaseQuery = query.toLowerCase();
    return drivers.filter(function(driver) {
        const lowerCaseDriverName = driver.toLowerCase();
        return lowerCaseDriverName.startsWith(lowerCaseQuery);
    });
}
  

function matchName(drivers, name) {
    return drivers.filter(function(driver) {
      return driver.name === name;
    });
}
  