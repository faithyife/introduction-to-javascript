/*Random Number Guessing Game: Develope a program that generates a random number between 1 and 100.
 Allow the user to guess the number and provide feedback on whether the guess is too high, too low, or correct*/

function guessNum(guess) {
  let randomNum = Math.floor(Math.random() * 100 + 1);

  if (guess > randomNum) {
    return "Too high! Try again.";
  } else if (guess < randomNum) {
    return "Too low! Try again.";
  } else {
    return "you guessed right, congratulations!!!";
  }
}
let finalGuess = guessNum(10);
console.log(finalGuess);
