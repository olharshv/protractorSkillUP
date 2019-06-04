
// _____________________ Object
const obj = {
  key: 'value',
  key1: 'value1',
  key2: 'value2'
}

// get property via "."

// get property via "[]"

// Object.keys
// console.log(Object.keys(obj))

// _____________________ Array
const arr = [1, 'string', true, null, {a: 1}]

// array.length vs index

// get array element by index 

// for
// for (let i = 0; i < 10; i++) {
//   console.log(`Iterating on ${i}`)
// }

// for on array
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i])
// }

// for-of
// for (const value of arr) {
//   console.log(value)
// }

// _____________________ Iterate over an object 

// for (const key of Object.keys(obj)) {
//   console.log(obj[key])
// }

// Iterate over own object properties
// const Page = {
//   elem1: 'i am elem 1',
//   elem2: 'i am elem 2',
//   elem3: 'i am elem 3',
//   elem4: 'i am elem 4',

//   showElems(elemsToShow) {
//     for (const key of Object.keys(elemsToShow)) {
//       console.log(this[key])
//     }
//   }
// }
// const iWantElements = {
//   elem1: null,
//   elem2: null
// }
// Page.showElems(iWantElements)

// ________________________ PO click
// PO click 
// const iWantClickElements = {
//   elem1: null,
//   elem4: null
// }
// const Page1 = {
//   elem1: {click(){console.log('click on elem1')}},
//   elem2: {click(){console.log('click on elem2')}},
//   elem3: {click(){console.log('click on elem3')}},
//   elem4: {click(){console.log('click on elem4')}},

//   clickElems(dataObj) {
//     for (const key of Object.keys(dataObj)) {
//       this[key].click()
//     }
//   }
// }

// Page1.clickElems(iWantClickElements)

// ________________________ PO Set data

// const iWantSetDataToElements = {
//   elem1: 'this will set to elem1',
//   elem3: 'this will set to elem3'
// }
// const Page2 = {
//   elem1: {setData(data){console.log(`Setting data to elem1 and the data is - ${data}`)}},
//   elem2: {setData(data){console.log(`Setting data to elem2 and the data is - ${data}`)}},
//   elem3: {setData(data){console.log(`Setting data to elem3 and the data is - ${data}`)}},
//   elem4: {setData(data){console.log(`Setting data to elem4 and the data is - ${data}`)}},

//   setElems(dataObj) {
//     for (const key of Object.keys(dataObj)) {
//       this[key].setData(dataObj[key])
//     }
//   }
// }

// Page2.setElems(iWantSetDataToElements)
