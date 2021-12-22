//Omar Alvarado JavaScript Practice
//Whale Talk
/*Take a phrase like ‘turpentine and turtles’ and translate it into its “whale talk” equivalent: ‘UUEEIEEAUUEE’.

There are a few simple rules for translating text to whale language:

There are no consonants. Only vowels excluding “y”.
The u‘s and e‘s are extra long, so we must double them in our program.*/

//Create a variable named input that is equal to any phrase you’d like. This variable will contain the text you want to translate into “whale talk”.

const input = 'a whale of a deal!';

//Whales only speak in vowels so you need an array of vowels to be extracted from the input variable. Set the array equal to a variable named vowels that will not be updated.
const vowels = ['a', 'e', 'i', 'o', 'u'];

let resultArray = [];

//Create a loop to iterate through each letter of the input variable text. In a later step, we will compare each letter with our vowels array.
for (let i = 0; i < input.length; i++){
  for(let j = 0; j < vowels.length; j++) {
    if (vowels[j] === input[i]) {
      //Whales double their e‘s and the u‘s in their language.
      if (input[i] === 'e'){
        resultArray.push(input[i]);
        resultArray.push(input[i]);
      }
      else if (input[i] === 'u'){
        resultArray.push(input[i]);
        resultArray.push(input[i]);
      }
      else {
        resultArray.push(input[i]);
      }
    }
  }
}
//To produce proper whale language, we want to capitalize the array elements and put them together as one string.
console.log(resultArray.join('').toUpperCase());