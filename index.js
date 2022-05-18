// Code your solution in this file!

const returnFirstTwoDrivers = (newArr) => newArr.slice(0, 2);

const returnLastTwoDrivers = (newArr) => newArr.slice(2, 4);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (fare) => {
    return function(num) {
        return (num * fare);
    }
}

const fareDoubler = (fare) => {
    return (fare * 2);
}

const fareTripler = (fare) => {
    return (fare * 3);
}

const selectDifferentDrivers = (drivers, arrFunct) => {
    return arrFunct(drivers);
}