// This script prints the addition of 2 integers

const arguments = process.argv;

function add(a, b){
    console.log(parseInt(a) + parseInt(b));
}

add(arguments[2], arguments[3]);




