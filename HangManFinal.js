// IMPORTANT MESSAGE ! IMPORTANT MESSAGE ! IMPORTANT MESSAGE ! IMPORTANT MESSAGE !
//--------------------------------------------------------------------------------
//|     PLEASE NOTE THAT I HAVE USED NODE.JS LIBARIES INSTALLED                  |
//|     THE LIBARIES INSTALLED ARE:                                              |
//|    -FIGLET (AS WRITTEN IN THE TASK DESCRIPTION) (npm install figlet)         |
//|    -PROMPT (npm install prompt)                                              |
//|    -SAVE PROMPT-SYNC (npm install --save prompt-sync)                        |
//|                                                                              |
//|     MAKE SURE THESE PACKAGES ARE INSTALLED BEFORE RUNING!                    |
//-------------------------------------------------------------------------------
// IMPORTANT MESSAGE ! IMPORTANT MESSAGE ! IMPORTANT MESSAGE ! IMPORTANT MESSAGE !

const prompt = require('prompt-sync')();
var figlet = require('figlet');
//Words Inventory.
let words=['apple','seeds','game','task','orange','blue','purple','honey','sugar','avocado','guitar','music','art'];
//Generating random index to pick word fron 'words' array.
const getRandomWord = (words) => {
    let randomIndex = Math.floor(Math.random() * (words.length -0) +0);
    return(words[randomIndex]);
}
//Create Hidden Word
 const createHiddenWord = (word) => {
    let hiddenWordFunc = word.split('').map(char => {return '*' });
    return (hiddenWordFunc);
}
//Cheking for valid input - if special char/number OR more then one letter => FALSE, if letter (capital/lowercase) returs lowercase letter
function inputCheck (inputText) {
    const specialCharsAndNumbers = /[^A-z][\\\^]?/g
    const found = inputText.match(specialCharsAndNumbers);
    if (found) {
        console.log('-----Please try again, enter a valid input (letters only - no numbers or special char)-----\n');
        return(false);
    }
    else if (inputText.length >1) {
        console.log('-----Please try again, enter a valid input (input must contain one letter only)-----\n');
        return (false);
    }
    else {
        inputText = inputText.toLowerCase();
        return (inputText);
    }
}
//Game Variables
let randomWord = getRandomWord(words);
let hiddenWord = createHiddenWord(randomWord);
const maxTurns=10; //Setting maxTurns as variable (const) so number of turns allowed can be changed easily later
let currentTurn=0; //keeping track of how many turns passed
let userGuess = ''; //initial user guess
let strikeCounter=0; //for finding out when did the user win strikeCount=length of word
//Gams start function
const startGame = () => {
    //Using Figlet Node.js libery
    console.log(figlet.textSync('Hang-Man!', {
        font: 'Standard',
        horizontalLayout: 'default',
        verticalLayout: 'default',
        width: 80,
        whitespaceBreak: true
    }));
    console.log('');
    console.log('*******************************************************')
    console.log('* Welcome To the HangMan game - Made by Meir J Cohen  *')
    console.log('*******************************************************')
    console.log('*----------------------THE RULES----------------------*')
    console.log('* -On each turn you must guess a single letter        *')
    console.log('* -your goal is to reveal the secret word             *')
    console.log('* -you have ' + maxTurns + ' turns to revel all the letters         *')
    console.log('* or you will fail !  !   !                *')
    console.log('*******************************************************')
    //console.log(randomWord); //this is for testing only
    console.log('\nG O O D   L U C K  !')
    
}
startGame();
//console.log(hiddenWord.join('')); //this is for testing only
//Here the real fun Begins!
for (currentTurn=0; currentTurn<maxTurns; currentTurn++)
{
    console.log('\nYou have ' + (maxTurns-currentTurn) + ' guesses');
    //the join is to display the hidden word as a string an not in as array.
    console.log('The word is:\n' + hiddenWord.join(''));
    userGuess = prompt('What is your guess?');
    if (inputCheck(userGuess) == false) {
        currentTurn--;
        continue;
    } else {userGuess=inputCheck(userGuess);}
    //console.log('the user guess as it is after input check: ' + userGuess); //this is for testing
    for (let i=0; i<randomWord.length; i++){
        if (hiddenWord[i]==userGuess) {
            console.log('-----You allready guessed that letter, Please pick a new one----- \n');
            currentTurn--;
            break;
        }
        else if(userGuess == randomWord[i]) {
            hiddenWord[i]=userGuess;
            strikeCounter++;
        }}
        
    if(strikeCounter==randomWord.length) {
        console.log('\nThe word is:\n' + hiddenWord.join('').toUpperCase());
        console.log('\nWow You are good!!!\n'); 
        break;}
}
if (currentTurn==maxTurns) {
    console.log('You Faild!!!');
}




//  let randomWord = getRandomWord(words);
//  let hiddenWord = createHiddenWord(randomWord);
//  let hiddenWord2 = createHiddenWord(randomWord);
// console.log(randomWord);
// console.log(hiddenWord);
// console.log(hiddenWord2);