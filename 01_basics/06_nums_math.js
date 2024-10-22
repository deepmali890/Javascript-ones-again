const score = 400

// console.log(score)

const balance = new Number(100)
// console.log(balance)
//  console.log(  balance.toString().length)
//  console.log(  balance.toFixed(2))


 const otherNumber = 1223.1131

//  console.log(otherNumber.toPrecision(4))


 const hundreds  = 1000000

//  console.log(hundreds.toLocaleString('en-IN')) // ye ,,,, return karta hai number ke sath en-IN ye hme indian ruppes valur=e return karte hai


 // ++++++++++++++++++++++++++++++++++++++++ MATHS ++++++++++++++++++++++++++++++++++++++++++ //

//  console.log(Math)

// console.log(Math.abs(-4)) // print is 4 kyuki abs jo hai wo number ka sign change kar deta hai matalab agar (-4) dala to wo usko change karke 4 me convert kar deta but but but ye only negative value ko positive karti hai positive  ko nagative nahi karti hai 

// console.log(Math.round(2.3)) // print is 2 ye kisi number ko round karke deta hai agar 5 se kam hai to purani value dega agar 5 se upar hoga to wo new value round karke dega 

// console.log(Math.ceil(2.3)) // print is 3 kyuki ye jo hai wo hmesha ny=umber ki upar ki value return karega 
// console.log(Math.floor(4.9)) // print is 4 ye hamesha number ki niche ki value return karta hai
// console.log(Math.min(4,8,5,2)) // print is 2 kyuki ye minimum  yani ki sabse chota number print karke dega
// console.log(Math.max(4,8,5,2)) // print is 8 kyuki ye sabse bada number konsa hai wo print karke deta hai

console.log(Math.random()) // ye hamesha 0-1 ke bich ka number return karta hai wo bhi har bar random

console.log(Math.random()*10) // ye ab hme 0-10 ke bich ki value hme print karke dega 
console.log((Math.random()*10+1)) // ab hme 1-10 ki bich ki value show hogi
console.log(Math.floor((Math.random()*10)+1))  // ab ye value jo 1-10 tak and sath ab iski value jo hai point me nahi aaegi

const min = 10
const mix = 20

console.log ((Math.floor(Math.random() * (mix-min + 1)) + min))   // ab isme 1 se jyada and sath 10-20 ki bich me number print hoga 