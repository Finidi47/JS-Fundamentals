// Print the value of the argument without using length

const values = process.argv

if (values[2] === undefined){
    console.log('No argument');
} else{
    console.log(values[2]);
}