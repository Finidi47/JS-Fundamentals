const arguments = process.argv

let number = parseInt(arguments[2]);

if (isNaN(number)){
    console.log('Not a number');
} else {
    console.log(`My number: ${number}`);
}