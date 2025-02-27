// const randomQuote = [
//   'Quality is not an act, it is a habit',
//   'Believe in yourself! Have faith in your abilities! Without a humble but reasonable confidence in your own powers you cannot be successful or happy.',
//   'Life is 10% what happens to you and 90% how you react to it.',
//   'If you are going through hell, keep going.',
//   'Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better.',
//   'With the new day comes new strength and new thoughts.',
//   'There is no substitute for hard work. ...',
//   'The expert in anything was once a beginner.'

// ];


// !through Array 
// const quoteElement= document.querySelector('#quote');
// const authorElement= document.querySelector('#author');
// const button= document.querySelector('#btn');

// function anyQuote(){
//   const quoteIndex = Math.floor(Math.random()*randomQuote.length)
 // console.log(quoteIndex);  
//   quoteElement.textContent = randomQuote[quoteIndex];
// }

// anyQuote();
// button.addEventListener('click',anyQuote);


//! through Object

// const randomQuotes = [
//   {
//     quote: 'Quality is not an act, it is a habit',
//     author: '"Aristotle"',
//   },
//   {
//     quote:
//       'Believe in yourself! Have faith in your abilities! Without a humble but reasonable confidence in your own powers you cannot be successful or happy.',
//     author: '"Norman Vincent Peale"',
//   },
//   {
//     quote: 'Life is 10% what happens to you and 90% how you react to it.',
//     author: '"Charles R. Swindoll"',
//   },
//   {
//     quote: 'If you are going through hell, keep going.',
//     author: '"Winston Churchill"',
//   },
//   {
//     quote:
//       'Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better.',
//     author: '"Samuel Beckett"',
//   },
//   {
//     quote: 'With the new day comes new strength and new thoughts.',
//     author: '"Eleanor Roosevelt"',
//   },
//   {
//     quote: 'Only put off until tomorrow what you are willing to die having left undone.',
//     author: '"Pablo Picasso"',
//   },
//   {
//     quote: 'All our dreams can come true, if we have the courage to pursue them.',
//     author: '"Walt Disney"',
//   },
// ];

// const quoteElement= document.querySelector('#quote');
// const authorElement= document.querySelector('#author');
// const button= document.querySelector('#btn');

// function anyQuote(){
//   const quoteIndex = Math.floor(Math.random()*randomQuotes.length)
//  // console.log(quoteIndex);  
//   quoteElement.textContent = randomQuotes[quoteIndex].quote;
//   authorElement.textContent = randomQuotes[quoteIndex].author;
// }

// anyQuote();
// button.addEventListener('click',anyQuote);


//!through API 
const quoteElement= document.querySelector('#quote');
const authorElement= document.querySelector('#author');
const button= document.querySelector('#btn');

const urlAPI= 'https://api.api-ninjas.com/v1/quotes';
const keyAPI= "kZLpWtD8ZfGqPpDq+hehgA==NlzqyZwdC4QmDdbY";

const getQuote= () => {
  fetch(urlAPI, {
    headers: { 'X-Api-Key':keyAPI},
  })
  .then(data=> data.json())
  .then(element => {
    // console.log(element[0]); 
    quoteElement.textContent = element[0].quote;
    authorElement.textContent = element[0].author;
  })
  .catch(error => {
    console.error('Error Fetching Quotes', error);
  });
};
getQuote();
button.addEventListener('click', getQuote);
