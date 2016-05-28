const printer = require('./printer.js');
const ClockBuilder = require('./ClockBuilder.js');
const readline = require('readline');

const readLine = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

readLine.question('Enter time? ', (time) => {
    try {
        printer.print(new ClockBuilder().get(time));
    }catch(error){
        console.log(error.message);
    }
    readLine.close();

});