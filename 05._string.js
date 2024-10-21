"hello"+ "world" // print hello world

const name ="Dilip"
const repoCount = 10

// console.log(name + repoCount); // print is Dilip 10 basically  isko modern day se andar isko use nahi karte hai iska like ka tarika kuch is tarah hai =>

    // modern ways
    
    console.log(`hello my name is ${name} and my repoCount is ${repoCount}`);

    // print is hello my name is Dilip and my repoCount is 10

    // kuch ye tarika jisse string ko declared  kar skte hai 

    const gameName = new String('hello')

    console.log(gameName[0]); // print is "h" beacuse ye ab object hai na ki array 
    // agar hum iske prototyoes chack karna hai to 
    console.log(gameName.__proto__); // isme sare prototypes ko access kar skte hai 

    /// all string methods  jyada use hote hai basically 

    console.log(gameName.length);  // ab hme iski length show hogi jese is word ke andar kitne letter   hai (8)
    
    console.log(gameName.toUpperCase()); // print is "HELLO" ab ye name captial me print hoga beacuse ye ek function hai or ha sath hi hme ye bhi dhiyan rakhna hai ye original value ko change nahi karta hai beacuse ye ek primitive data types  hai 

    console.log(gameName.charAt(3));// isme basically ye pta chlta hai  itne number ka charchetr [ar kon hai jese mene console log me 23 likha hia to hme ye pta chalega ki is number par konsa chahhchter exist kar rha hai
    
    console.log(gameName.indexOf('o')); // isme basically hme ye pta lagta hai ye jo character  kis number ya postion par exist kar rha hai

    // substring methods  
    // console.log(gameName.substring(start, end )); isme hme start or end number value deni padti hai jo aap dege utna aapko return karke dega
    console.log(gameName.substring(0,3)); // print is Dil yha tak isne print karke dia

    // trim() iska use wese jo string ke andar jo space hota hai use remove kar deta hai jese "  dilip  " print is dilip
    // replace() iska use wese hum tab use karte hai yese koi line ho jiske andar se hum koi ketter ya word ko change karna chahte hai usko () andar likh ke uski jagah koi or likh skte hai
    
    
    
    
    
    
    
    
     


