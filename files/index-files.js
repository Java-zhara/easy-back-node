const fs = require("fs");

//TODO: асинхронная
fs.readFile("some.txt", "utf-8", (err, data) => {
  fs.writeFile("some.txt", data + "\nAll Right!", (err, data) => {
    console.log("All Right!");
  });
});

//TODO: синхронная
// fs.readFileSync("some.txt", "utf-8");
// fs.writeFileSync("some.txt", read + "\nBe HAPPY!");
