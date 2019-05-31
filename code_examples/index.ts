//npm run ts-node code_examples/index.ts 
//npm run my script which is in folder - ts-node - auto compilator
//console.log('hello')

const obj = {
  key: 'value',
  key1: 'value1',
  key2: 'value2'

}

const human = {
  name: 'my name',
  secondName: "my surname",
  age: 12
}

for (const key of (Object.keys(human))) {
console.log(key + human[key])
}

console.log (Object.keys(human))


//1st variant
console.log(obj.key);
//2nd variant
console.log(obj['key'])
const propName = 'key2'
console.log(obj[propName])

//global object
console.log(Object.keys(obj))
console.log(Object.values(obj))



//myKeys = Object.keys(obj)

 
//arrays >>> array.length
const arr = [1, 'string', true, null, {a: 1}]


const iamString ='abcd'
const iamString1 = 'ewewe'
const iamTemplateString = `aadsfd ${iamString}` //for concatenating strings

//for

const arr1 = [5, 6, 7]

for (let i = 0; i < arr1.length; i++){ //let or const
  console.log (arr1[i])
}


//other variant for of

for (const a of arr) {
  console.log(a)
}





export {
}