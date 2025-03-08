// 1. Deposit some money
// 2. Determine number of lines to bet on
// 3. Collect a bet amount
// 4. Spin the slot machine
// 5. check if the user won
// 6. give the user their winnings
// 7. play again


const prompt = require("prompt-sync")();

const ROWS = 3;
const COLLS = 3;

const SYMBOLS_COUNT = {
  A: 2,
  B: 4,
  C: 6,
  D: 8,
};

const SYMBOL_VALUES = {
  A: 5,
  B: 4,
  C: 3,
  D: 2,
};

const deposit = () => {
 while (true){
  const depositAmount = prompt('Enter a deposit amount: ');
  const numberdepoAmount = parseFloat(depositAmount);

  if (isNaN(numberdepoAmount) || numberdepoAmount <= 0){
    console.log("Invalid deposit Amount, Please Try Again.");
  } else{
    return numberdepoAmount;
  }
 }
};

const getNumofLines = () =>{
  while (true){
    const lines = prompt('Enter the number of lines to bet on (1-3): ');
    const numberOfLines = parseFloat(lines);
  
    if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines>3){
      console.log("Invalid number of lines, Please Try Again.");
    } else{
      return numberOfLines;
    }
   }
};

const getBet = (balance, lines)=> {
  while (true){
    const bet = prompt('Enter the bet per line: ');
    const numberOfBet = parseFloat(bet);
  
    if (isNaN(numberOfBet) || numberOfBet <= 0 || numberOfBet> balance / lines){
      console.log("Invalid bet, Please Try Again.");
    } else{
      return numberOfBet;
    }
   }
};

const spin = () => {
  const symbols = [];
  for (const[symbol, count] of Object.entries(SYMBOLS_COUNT)){
    for(let i = 0; i < count; i++){
      symbols.push(symbol);
    }
  }
  const reels = [];
  for (let i = 0; i < COLLS; i++){
    reels.push([]);
    const reelSymbols = [...symbols];
    for (let j = 0; j< ROWS; j++){
      const randomIndex = Math.floor(Math.random()* reelSymbols.length);
      const selectedSymbol = reelSymbols[randomIndex];
      reels[i].push(selectedSymbol);
      reelSymbols.splice(randomIndex, 1);
    }
  }
  return reels
   
};

const transpose = (reels)=> {
  const rows  = [];

  for (let i= 0; i < ROWS; i++){
    rows.push([]);
    for(let j=0; j< COLLS; j++){
      rows[i].push(reels[j][i]);
    }
  }
  return rows;
};

const printRows = (rows)=> {
  for(const row of rows){
    let rowStrings = "";
    for ( const[i, symbol] of row.entries()) {
      rowStrings += symbol
      if (i != row.length - 1){
        rowStrings += " | "
      }
    }
    console.log(rowStrings);
  }
};

const getWinnings = (rows, bet, lines) =>{
  let winnings= 0;

  for  (let row =0; row< lines; row++){
    const symbols = rows[row];
    let allSame = true;

    for (const symbol of symbols){
      if (symbol != symbols[0]){
        allSame= false;
        break;
      }
    }
    if (allSame){
      winnings += bet* SYMBOL_VALUES[symbols[0]];
    }
  }
  return winnings;
};
const game = ()=> {
 let balance = deposit();

while (true) {

  console.log("You have a balance $" + balance);
  const numberOfLines = getNumofLines();
  const bet = getBet(balance, numberOfLines);
  balance -= bet * numberOfLines;
  const reels = spin();
  const rows= transpose(reels);
  printRows(rows);
  const winnings= getWinnings(rows, bet, numberOfLines);
  balance += winnings;
   console.log("you Won, $" + winnings.toString());

  if (balance <= 0){
  console.log("You ran out of Money!!");
  break;
}
  const againPlay = prompt("Do you want to play Again (Yes/No)?? ");

if (againPlay != "Yes") break;
}
};

game();