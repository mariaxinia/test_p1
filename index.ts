const fs = require('fs');
//read
let fileText = fs.readFileSync('data.json');
let jsonParsed = JSON.parse(fileText);
console.log(jsonParsed);

//add
var newPet =  {
    "name": "Luna",
    "animal": "Hamster",
    "color": "Yellow"
};
jsonParsed.push(newPet);
console.log(jsonParsed);

//update

let index=1;
let newName="Mimi";
let newAnimal="Frog";
let newColor="Green";
jsonParsed[index].name = newName;
jsonParsed[index].animal = newAnimal;
jsonParsed[index].color = newColor;
console.log(jsonParsed);

//delete
let j=3;
jsonParsed.splice(j,1);
console.log(jsonParsed);

//put all in json
//fs.writeFileSync('data.json', JSON.stringify(jsonParsed));
console.log("You did it!");
