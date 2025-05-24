const arguments = process.argv

if (arguments.length < 5){
    console.log(`${arguments[2]} is ${arguments[3]}`);
}else if (arguments.length < 4){
    console.log(`${arguments[2]} is ${arguments[3]}`);
}else{
    console.log(`${arguments[2]} is ${arguments[3]}`);
}