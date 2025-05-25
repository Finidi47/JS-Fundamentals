const arguments = process.argv

let value_1 = parseInt(arguments[2]);

if (isNaN(value_1)){
    console.log('Missing number of occurrences');
} else {
    for(let i = 0; i < value_1; i++){
        console.log('C is fun');
    }
}
