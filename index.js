// Code your solution here

function findMatching (array, driver) {
    const driverMatch = array.filter(arrayDriver => (arrayDriver.toLowerCase() === driver.toLowerCase()));
    return driverMatch;
}

function fuzzyMatch (array, letter) {
    const letterSplit = letter.split("");
    const letterMatch = array.filter(driver => {
        const driverArray = driver.split("");
        return (driverArray[0] === letter[0]) && (driverArray[1] === letter[1]);
    })
    return letterMatch;
}

function matchName (array, string) {
    const driver = array.filter(object => object.name === string);
    return driver;
}