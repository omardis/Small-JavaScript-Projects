//Omar Alvarado Practice of Array Methods
//Mini Linter
//In this project, you will use what you know about iterating over arrays to improve the quality of a paragraph and gather some information about that paragraph.

let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

//separates all the words into different strings of the array.
const storyWords = story.split(' ');

//variable to storage the amount of words in the story
let numOfWords = 0;

//A loop that adds all the words
for(let i = 0; i < storyWords.length; i++){
  numOfWords += 1;
}

//we log how many words are in the story
console.log(`The story has ${numOfWords} words`);

//A variable filtering most important words
let betterWords = storyWords.filter(word => word.length > 2 && word != 'the' && word != 'was' && word!= 'The');

//A variable to storage the amount of words that are over used
let numOverUsed = 0;
//Function to add to the numOverUsed counter every time one of the 3 words appears
let overUsedFunction = word => {
  if (word === 'really') {
    numOverUsed += 1;
  }
  else if (word === 'very') {
    numOverUsed += 1;
  }
  else if (word === 'basically') {
    numOverUsed += 1;
  }
}

//Check each word to find the repeated words from the function
let overUsedNum = betterWords.forEach(overUsedFunction);
//We log the amount of Over used words
console.log(`There are ${numOverUsed} OverUsed Words`);

//Variable to storage the amount of Paragraphs
let numOfSen = 0;
//Function to find the paragraph by looking for words ending with . or !
let findSentence = word => { 
  if (word.includes('.')) {
    numOfSen += 1;
  }
  else if (word.includes('!')){
    numOfSen += 1;
  }
}

// Function that iterates thru the array and applys the function
let numOfParaCheck = betterWords.forEach(findSentence);
//We log the amount of paragraphs
console.log(`There are ${numOfSen} setences`);

//Now, log the betterWords array to the console as a single string.
console.log(betterWords.join(' '))



