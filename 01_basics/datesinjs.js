const myDate =new Date()
// console.log(myDate.toTimeString()); // string ke bahut sare methods hai date ke anadar to sabko ek bar use kare for test    

// const myCreateDate= new Date(2022, 0, 23)
// console.log(myCreateDate.toDateString()); /// khud ke date bhi bna sakte hai javascript me  ***** or ha sath hi ye bat ka bhi dhiyan rakhna hai ki date ka type hmesha object formet me hota hai

// const myCreateDate= new Date(2022, 0, 23, 5, 3) // with date and time
// const myCreateDate= new Date("2023-01-14") // yy-mm-dd formet me
const myCreateDate= new Date("01-14-2005") // mm-dd-yy formet me basicily undian formet me

let myTimeStamp = Date.now()
// console.log(myTimeStamp); // print big number value
// console.log(myCreateDate.getTime()); // time different 

console.log(Math.floor(Date.now()/1000));






