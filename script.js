// HTML elements
const questionElement = document.getElementById("questions");
const inputElement = document.getElementById("input");
const submitButton = document.getElementById("submitBtn");
const messageElement = document.getElementById("message");

// Game Variables
let num1; 
let num2;
let correctAnswer;


function generateQuestion() {
    num1 = Math.floor(Math.random() * 10) + 1;
    num2 = Math.floor(Math.random() * 10) + 1;
    correctAnswer = num1 + num2;

    questionElement.textContent = `${num1} + ${num2} = ?`
    inputElement.value = "";
    messageElement.textContent = "";
}

/*************  ✨ Windsurf Command 🌟  *************/
/**
 * Checks the user's answer and updates the UI with the result.
 * Generates a new question after a delay based on correctness.
 */
submitButton.onclick = function checkAnswer() {
    const userAnswer = Number(inputElement.value);

    // Check if the user's answer is correct
    if (userAnswer === correctAnswer) {
        // Display the correct answer and a success message
        questionElement.textContent = `${num1} + ${num2} = ${correctAnswer}`;
        messageElement.textContent = "✅ Correct!";
        // Generate a new question after a short delay
        questionElement.textContent = `${num1} + ${num2} = ${correctAnswer}`
        messageElement.textContent = "✅ Correct!"
        setTimeout(generateQuestion, 1000);
    } else {
        // Display the correct answer and an error message
        messageElement.textContent = `❌ Wrong! The correct answer was ${correctAnswer}`;
        questionElement.textContent = `${num1} + ${num2} = ${correctAnswer}`;
        // Generate a new question after a longer delay
        messageElement.textContent = `❌ Wrong! The correct answer was ${correctAnswer}`
        questionElement.textContent = `${num1} + ${num2} = ${correctAnswer}`
        setTimeout(generateQuestion, 1500);
    }
}
/*******  9e314934-5fec-4608-aacb-d4a5a39cb940  *******/

generateQuestion();



