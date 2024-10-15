import fs from "fs/promises";

let a = await fs.readFile("gnani.txt");

let b = await fs.writeFile("gnani.txt", "\n\nGnani");

console.log(a.toString(), b);
