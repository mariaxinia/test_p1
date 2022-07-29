interface Dog {
  name: string,
  age: number 
}

interface Dog2 {
    name: string,
    age: string 
}

type Dog3 = Dog & Dog2;

const obj : Dog3 ={
name:"hki",
age: 25
}

console.log(obj)