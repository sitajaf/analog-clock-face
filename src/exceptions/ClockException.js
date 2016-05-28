module.exports = ClockException;

function ClockException (message){
    this.name = 'ClockException';
    this.message = message || '';
    Error.call(this, this.name, this.message)
}

ClockException.prototype = Object.create(Error.prototype);
ClockException.prototype.constructor = ClockException;