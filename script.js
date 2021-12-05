let peoples = [
  {name: "pasha", budget: 5000},
  {name: "diman", budget: 9000},
  {name: "turic", budget: 1000},
]

let person = {
  name: 'Alex',
  age: 27,
  shcool: 8
}
let logger = {
  keysValue(){
    console.log(Object.keys(this));
    console.log(Object.values(this));
  }
}

logger.keysValue.call(person)
const {name, age} = person
// console.log(name, age);

// Object.keys(person).forEach(ad=>{
//   console.log('key: ' + ad);
//   console.log('value: ' + person[ad]);
// })


// let allBdget = peoples
// .filter(k=>k.budget>2000)
// .reduce((acc, k)=>{
//   acc+=k.budget
//   return acc
// },0)
// console.log(allBdget);

let num = [1,2,3,4,5,6,7,8,9]

// let numPow = num.map(k=>k**2)
// console.log(numPow);


// console.log(peoples.find(function(p){
//   if(p.budget===0000){
//     return p.name
//   }
// }));
