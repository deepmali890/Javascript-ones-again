// OBJECT LITERALS

const Jsuser = {
    name: "dilip mali",
    age: 18,
    location: "jaipur",
    email: "deepmali89@gmail.com",
    isLoggednIn: true,
    lastLoginDays: ["Monday", "Saturday"]
}
console.log(Jsuser);
console.log(Jsuser.email);
console.log(Jsuser["email"]);

// print  is 
//{
//   name: 'dilip mali',
//   age: 18,
//   location: 'jaipur',
//   email: 'deepmali89@gmail.com',
//   isLoggednIn: true,
//   lastLoginDays: [ 'Monday', 'Saturday' ]
// }
// deepmali89@gmail.com
// deepmali89@gmail.com

// or ha hme ye dhiyan rakhna hai jab key ko hum string me rakhte hai to kabhi bhi hum dot se (.) se use access nahi kar skte hai  

// or hum jab symbol ko declare  karna hai to or use object ke andar print karwana hai to ki tarah hoga ye jyadatar interviews me pucha jata hai


const mySymbol = Symbol("key1")
const Jsuser2 = {
    name: "dilip mali",
    [mySymbol] :"mykey1",
    age: 18,
    location: "jaipur",
    email: "deepmali89@gmail.com",
    isLoggednIn: true,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(Jsuser2[mySymbol]);  // kuch is tarah print hoga "mykey1"

// change object value  
Jsuser2.email= "deepmaliiii@google.com" // change emial value 
// freeze object 
// Object.freeze(Jsuser2) // ab se object freeze ho chuka hai iske andar ki value ko change nahi kar skte 


Jsuser2.greeting = function(){
    console.log(`hello js user ${this.name}`);
}

console.log(Jsuser2.greeting());  // this keyword ka kam ye hota hai object ke andar ke jo properties  uskkoget karne ka kam karta hai