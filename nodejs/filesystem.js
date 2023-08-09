const fs = require("fs");

fs.writeFile("message.txt", "This is lame.\nYou are lame.\nWorld is lame.", (writedata) => {
    if (writedata) throw writedata;
    console.log(writedata);
});

fs.readFile("./message.txt",'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});
