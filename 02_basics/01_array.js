// array topics

const myArray = [0, 1, 2, 3, 4, 5] // array ke andar jo kuch likha hota hai use elements kahte hai or single verebails ke andar collocation of multiple items rakh skte ahi

const myHero = ['shaktiman', 'hanuman', 'nagraj' ]
const myArry2= new Array(1, 2, 3, 4)

console.log(myArry2[0]);


// +++++++++++ Array Methods +++++++++++//

// push methods => array ke last me number add karta hai number jaruri nahi hai kuch bhi kar skta hai

myArry2.push(6) // print is [1, 2, 3, 4, 5]

// pop methods => ye basically array ke anadar jo bhi last wali val;ue hogi use delete kar dega iske argument me kuch likhne ki  jarurat nahi hoti hai

myArry2.pop() // print is [1, 2, 3, 4]


// unshift  method => unshift method jo hai wo array ke starting me elements add kar deta hai jese ->

myArry2.unshift(7) //print is [7, 1, 2, 3, 4]

// shift methods => shift method wo bhi pop ki tarah hi hota hai but wo starting se number ya elements ko delete karta hai

myArry2.shift() // print is [1, 2, 3, 4]


// includes methods => basically includes method jo hai wo Q ,Ans deta hai jese true or false to includes methods aapko array ke anadar jo elements jjo haiu use find karta hai agar isme wo value exists karti hai to true return karega iska matalab wo value uske anadar hai gar nahi to false return karega

console.log(myArray.includes(9));  // print is false
console.log(myArry2.includes(2)) // print is true


// indexOf methods => indexOf methods jo hai wo index number find karke deta hai lekin ye apna answer true or false me nahi deta hai jese agar wo index nahi k=hai to -1 return karega har  bar agar hoga to uska number return karega

console.log(myArry2.indexOf(9))  // print is -1
console.log(myArry2.indexOf(3)); // print is 2 

// join methods => ye basically array ko string formet me change kar deta  

const nrwArr = myArry2.join()

console.log(nrwArr);  // print is 1, 2, 3, 4  yue aaray  ka type string me convert kar dia




//slice , splice methods ++++++++++++++++++++++

// slice methods =>  isme basically hum slice ke perameeter me jo number add karte hai wahi tak hum print karke dega ya ni index number 

//  const myn1 = myArry2.slice(0,3)
 // old values 1,2,3,4
//  console.log(myn1); // print is [1,2,3]

 const myn2 = myArry2.splice(1,3)
 console.log(myn2);
