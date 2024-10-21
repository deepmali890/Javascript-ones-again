// # Primitive => 7 types: String, Number, Boolearn, null, undefined, symbol, BigInt 

//JavaScript  ke andar hum kabhi bhi language ko define nahi karte hai 

// # Reference (Non Primitive Data Types)  
// Array, Objects, Functions 

// const score=100  number
// const value=100.3 is an number
// const isLogedIn=false bOolean
// let oneTamp=null Null
// let userEmail; Undefined
// let id=Symbol('123')
// let anthorId=Symbol('123')
// const bigNumber = 65465465465165854  is a big number

// console.log(id===anthorId);  false  symbol

// ?? Arrays//
// const heros=["shaktiman", "nagraj","doga"]   arrays

// ? objects//


//  let myObj={
//     name:"dilip",
//     age:22,
//     pass:true,
// }  is a Object  {}=>iske andar jo bhi values hai wo sabhi object me hai


// function

// const myFunction=function(){
//     console.log("hello world");
    
// }
// myFunction()


// ++++++++++++++++++++++++++++++++++++ //

// javascript memory - 2 types    1:->   Stack(Primitive) jab bhi stack memory use hote hai wha Primitive data types use hote hai  iski value hmesha copy value milti hai na ki irignial value
// example =>   
    // let myYoutubeName= "codeBook"
    // let anotherName = myYoutubeName
    
    // console.log(anotherName);// abhi ke lie isme value jo hai myYpoutube name wali aaegi and agar ise ->

    //  let anotherName = "codeBookChammel"

    //  console.log(anotherName);  // agar iska agar console log karwaege to iski jo abhi ki value hai wo hi print hogi beacuse stack ya ni ki priitive data ty[es jo hai wo hmesha copy karke vaule return karke deta hai na ki orignial vaule ke sath ched chad karta hai islie agar wapas se myYoutubeNameko console karwaege isme jo auctual data hau wahi print hoga 
     

     


//                                2:->   Heap(NoN-Primitive)  jab bhi Heap memory use hoti hai wha NoN-Primitive data types use hota hai sath iski jo value return hoti hai wo orginial value return hoti  hai 

// example => 
    let useOne = {
        email:"deepmali9090@gmail.com",
        upi:"user@upi"
    }

    let userTwo =  useOne;
    console.log(userTwo);// isme value jp useOne ke andar hai whi print hogi //  matalab hum ye samaj skte hai ki jo userOne ke anadr jo valyue hai whgi value iskke anadr bhi hai 

    //let's agar hum iski value change karte hai 

    userTwo.email= "deepmali9191@gmail.com" // humne ab user two ke email change kar di ya ni ki ab userone ke andar jo data hai email wo bhi change ho gya hai to yhi farak hi (stack)-(Heap) ke andar jo ye jo hai wo orgnial value usko change karta hai  
    