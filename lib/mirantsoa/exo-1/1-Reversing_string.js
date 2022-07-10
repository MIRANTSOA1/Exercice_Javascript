// 1) Reversing string "I am a string"

const reverseString = (someString) => {
   for(let i = someString.length-1; i >= 0; i--){
      console.log(someString[i]);
   }
}
console.log(reverseString("I am a string"));