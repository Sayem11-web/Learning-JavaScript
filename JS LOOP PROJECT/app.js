// Guess The Number Function 
function guessTheNumber(difficulty){
  let randomNumber;
  let attempts = 0;
  let maxAttempts;
  let range ;

  // Set Difficulty-based parameters 
  switch(difficulty){
    case 'easy':
      range= 10;
      maxAttempts = 5;
      randomNumber = Math.floor(Math.random() * 10)+1; // Range= 1-10
      console.log(randomNumber);
      break;
    case 'medium':
      range = 100;
      maxAttempts = 7;
      randomNumber = Math.floor(Math.random() * 100)+1; // Range= 1-100
      console.log(randomNumber);
      break;
    case 'hard':
      range = 500;
      maxAttempts = 10;
      randomNumber = Math.floor(Math.random() * 500)+1; // Range= 1-500
      console.log(randomNumber); 
      break;
    default:
      console.error('Invalid Difficulty Level');   
  }

  // Get user input  difficulty
  while (attempts < maxAttempts){
    let guess = parseInt(prompt(`Guess a number between 1 and ${range} (Inclusive). You have ${maxAttempts - attempts
    } attempts left`));
    attempts++;

    if (guess===randomNumber){
      console.log('Congratulations!! You guessed the number in', attempts, 'attempts');
      break;
    } else if(guess< randomNumber){
      console.log("Too Low. Try Again");
    } else {
      console.log('Too High. Try Again');
    }
    // console.log(guess); 
  }
  
  if (maxAttempts=== attempts){
    console.log('Sorry, You ran out of attemptss. The actual Number was', randomNumber);
  }



}



// Get User Input Difficulty 
let difficulty = prompt('Choose difficulty(easy, medium, hard)').toLowerCase();
guessTheNumber(difficulty);

// console.log(difficulty); 