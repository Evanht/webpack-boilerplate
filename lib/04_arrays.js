const beatles = ["paul", "john", "ringo", "george"]

// ES6 Define Function
const elementToUpperCase = (element) => {
  console.log(element.toUpperCase())
}

// ES5 (OLD JS) Define Function
function oldElementToUpperCase(element) {
  console.log(element.toUpperCase())
}


// forEach with ES5 (OLD JS) Anonymous Function as argument
beatles.forEach(function (element) {
  console.log(element.toUpperCase())
})

// forEach with ES6 Anonymous Arrow Function as argument
beatles.forEach((element) => {
  console.log(element.toUpperCase())
})
