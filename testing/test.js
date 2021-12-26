// this will take argument from terminal and first commnad was the path of node and second of file path 
// it will recieve as many as argument 
// ex - node test.js prashant maneesh ajeet
// output - 
// 0: C:\Program Files\nodejs\node.exe
// 1: C:\Users\Hp\OneDrive\Desktop\github\Learning-Node\testing\test.js
// 2: prashant
// 3: maneesh
// 4: ajeet
// print process.argv
process.argv.forEach((val, index) => {
    console.log(`${index}: ${val}`);
  });