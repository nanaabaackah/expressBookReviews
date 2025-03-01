//Creating a promise method. The promise will get resolved when timer times out after 6 seconds.
let myPromise1 = new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve("Promise 1 resolved")
    },6000)})
let myPromise2 = new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve("Promise 2 resolved")
    },3000)})
let myPromise3 = new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve("Promise 3 resolved")
    },1500)})
let myPromise4 = new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve("Promise 4 resolved")
    },500)})
//Console log before calling the promise
console.log("Before calling promise");

//Call the promise and wait for it to be resolved and then print a message.
myPromise1.then((successMessage) => {
    console.log("From Callback " + successMessage)
    myPromise2.then((successMessage) => {
      console.log("From Callback " + successMessage)
      myPromise3.then((successMessage) => {
        console.log("From Callback " + successMessage)
        myPromise4.then((successMessage) => {
            console.log("From Callback " + successMessage)
      })
      })
    })
  })

//Console log after calling the promise
  console.log("After calling promise");