/**
 * Created by heyso on 11/25/2016.
 */
var fs = require("fs");
console.log("Starting");
var pathFile = "data.txt";
fs.watchFile(pathFile, function(current, previous){
    console.log("Old : ", current);
    console.log("New : ", previous);
});