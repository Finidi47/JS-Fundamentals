const arguments = process.argv

let value_1 = parseInt(arguments[2]);
const language = 'C is fun';

if (isNaN(value_1)){
    console.log('Missing number of occurrences');
} 

for(i=0; i < value_1; i++){
        console.log(language);
    }