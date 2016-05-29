var ClockException = require('./exceptions/ClockException.js');

module.exports = ClockBuilder;

function ClockBuilder() {
}

ClockBuilder.prototype.get = function (timeString) {
    var time = timeString.split(':');
    var hour = Number(time[0]);
    var minutes = time[1];

    if(!timeString.includes(':') || timeString.length !== 5){
        throw new ClockException('Invalid time!')
    }

    if (isNaN(hour) || hour < 0 || hour > 23 || time[0].length !== 2) {
        throw new ClockException('Invalid hour!');
    }

    if (isNaN(minutes) || minutes < 0 || minutes > 59) {
        throw new ClockException('Invalid minutes!');
    }

    return clockArray(hour, minutes);
};

function clockArray(hour, minutes) {
    var clock = ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'];

    var hourPosition = getHourPosition(hour);
    var minutePosition = getMinutePosition(minutes);

    if (hourPosition === minutePosition) {
        clock[hourPosition] = 'x';
    } else {
        clock[hourPosition] = 'h';
        clock[minutePosition] = 'm';
    }

    return clock;
}

function getHourPosition(hour) {
    return hour > 11 ? hour - 12 : hour;
}

function getMinutePosition(minutes) {
    return (minutes - (minutes % 5)) / 5;
}