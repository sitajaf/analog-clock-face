var ClockException = require('./exceptions/ClockException.js');

module.exports = ClockBuilder;

function ClockBuilder() {
}

ClockBuilder.prototype.get = function (timeString) {
    var time = timeString.split(":");
    var hour = Number(time[0]);
    var minutes = time[1];

    if (isNaN(hour) || hour < 0 || hour > 23 || time[0].length !== 2) {
        throw new ClockException("Invalid hour!");
    }

    if (isNaN(minutes) || minutes < 0 || minutes > 59) {
        throw new ClockException("Invalid minutes!");
    }

    var clock = ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o"];

    var hourPosition2 = hourPosition(hour);
    clock[hourPosition2] = "h";
    var minutePosition2 = minutePosition(minutes);
    clock[minutePosition2] = "m";

    return clock;
};

function hourPosition(hour) {
    return hour > 12 ? hour - 12 : hour;
}

function minutePosition(minutes) {
    return (minutes - (minutes % 5)) / 5;
}


