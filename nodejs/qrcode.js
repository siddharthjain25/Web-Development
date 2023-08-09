import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';
console.log('Hi, welcome to QR-Generator');
inquirer
  .prompt([
    {
        message: "Type the URL:",
        name: "URL",
    },
  ])
  .then((answers) => {
    const url = answers.URL;
    var jpeg = qr.image(url);
    jpeg.pipe(fs.createWriteStream('qrcode.jpeg'));
  })
