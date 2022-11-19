const fs = require('fs');

//TODO: добавлять папку
// fs.mkdir("./text-files/text.txt", () => {
//   fs.writeFile("./text-files/text.txt", "Hello", () => {});
// });

//TODO: удалять папку(сначала файл, потом папку)
fs.unlink('./text-files/text.txt', () => {
  fs.rmdir('./text-files', () => {});
});
