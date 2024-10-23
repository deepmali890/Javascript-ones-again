const marvel_heros = ['thor', 'Ironman', 'Spiderman']
const dc_heros = ['superman', 'flash', 'batman']

// marvel_heros.push(dc_heros)
// console.log(marvel_heros); // print is array ke andar array print ho gyya hai jyadatar ye situaion jum nahi chate hai

const all_heros = marvel_heros.concat(dc_heros)  // isme hum marvel hero ko dchero ko jod dia ab ye sari values jo single array me print ho gai hai

console.log(all_heros); // print is ['thor', 'Ironman', 'Spiderman','superman', 'flash', 'batman'] isse hum multiple array ko single aaray me convert kar skte hai

//but but but hum modern ways me sprad methods use karte hai [...]

const allheros = [...marvel_heros, ...dc_heros]

console.log(allheros); // same print wese isko jyada tar code me ese hi use karte hai

// flat methods => agar array ke andar multiple  array jo or uske andar bhi or array hai or agar hum usko flat ya ek hi array me lena chahte ho to iska use kar skte hai 

const anthor_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [5, 8]]]
const new_anthor_array= anthor_array.flat(Infinity)

console.log(new_anthor_array); // print is [ 1, 2, 3, 4, 5,6, 7, 6, 7,5,8]  ab ye sabko ek hi array me print kar dia hai

console.log(Array.isArray("Dilip")) // isse hum ouch skte hai kya ye aaray hai ya nahi ye true false answer dega  so answer is "false"

// agar ise array me convert karna hota to hum from ka use karte hai

console.log(Array.from("Dilip"))  // print is [ 'D', 'i', 'l', 'i', 'p' ] ab ye siko array me convert kar dia

console.log(Array.from({name: "Dilip"})); // print is [] ab ye hme blank array return karega kyoki ise ab pta nhai hai  kisko convert karna hai aaray ke andar


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // print is [100, 200, 300] of se bhi kisi ko array me covert kar skte hai diffrient verebails hai fir bhi value