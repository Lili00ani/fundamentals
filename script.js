let playerScore = 0;
let sum = 0;
let gameMode = "name";
let userName = "";

let rand = function () {
  return Math.floor(Math.random() * 3);
};

let hand = function (index) {
  if (index == 0) {
    return "scissors";
  } else if (index == 1) {
    return "paper";
  } else {
    return "stone";
  }
};

let emoji = function (hand) {
  if (hand == "scissors" || hand == "reversed scissors") {
    return "✂️";
  } else if (hand == "paper" || hand == "reversed paper") {
    return "🗒";
  } else {
    return "✊";
  }
};

let condition = function (user, computer) {
  if (
    ((user == "scissors" || user == "reversed scissors") &&
      computer == "scissors") ||
    ((user == "paper" || user == "reversed paper") && computer == "paper") ||
    ((user == "stone" || user == "reversed stone") && computer == "stone")
  ) {
    return 0;
  } else if (
    ((user == "scissors" || user == "reversed scissors") &&
      computer == "paper") ||
    ((user == "paper" || user == "reversed paper") && computer == "stone") ||
    ((user == "stone" || user == "reversed stone") && computer == "scissors")
  ) {
    return 1;
  } else {
    return -1;
  }
};

let statement = function (index) {
  if (index == 0) {
    return "Draw";
  } else if (index == 1) {
    return "You won!";
  } else {
    return "You lose!";
  }
};

let score = function (index) {
  if (index == 1) {
    playerScore++;
  }
};

let main = function (input) {
  if (gameMode == "name") {
    userName = input;
    gameMode = "game";
    return `Hello ${userName}. Type scissors, reversed scissors, paper, reversed paper, stone, or reversed stone to start.<br>`;
  }
  if (gameMode == "game") {
    let computerHand = hand(rand());
    let text = "";
    if (input == "scissors" || input == "paper" || input == "stone") {
      sum++;
      text += `You choose ${input}${emoji(input)}`;
      text += `<br>Computer choose ${computerHand}${emoji(computerHand)}`;
      text += `<br><br>${statement(condition(input, computerHand))}`;
      score(condition(input, computerHand));
      text += `<br><br>Your score is ${playerScore}/${sum}`;
      text += `<br><br>You can type "scissors" "paper" or "stone" to play another round!`;
      return text;
    } else if (
      input == "reversed scissors" ||
      input == "reversed paper" ||
      input == "reversed stone"
    ) {
      sum++;
      text += `You choose ${input}${emoji(input)}`;
      text += `<br>Computer choose ${computerHand}${emoji(computerHand)}`;
      text += `<br><br>${statement(condition(input, computerHand) * -1)}`;
      score(-1 * condition(input, computerHand));
      text += `<br><br>Your score is ${playerScore}/${sum}`;
      text += `<br><br>You can type "scissors" "paper" or "stone" to play another round!`;
      return text;
    } else {
      return "Invalid input. Please type scissors, paper, or stone to play the game";
    }
  }
};
