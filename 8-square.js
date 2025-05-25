const args = process.argv;

let number = parseInt(args[2]);

if (isNaN(number)){
    console.log('Missing size');
} else{
    for (let i = 0; i < number; i++){
        console.log(number ** 2);
    }
}