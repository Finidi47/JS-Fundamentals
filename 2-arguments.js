// This script prints prints a message depending on the number of arguments passed

const read = process.argv;


if (read.length < 3){
    console.log('No argument');
}else if(read.length < 4){
    console.log('Argument found');
} else{
    console.log('Arguments found');
};