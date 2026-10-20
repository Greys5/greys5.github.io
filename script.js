const questions = [
  'Does it work, or does it just look green?',
  'What are we assuming here?',
  'Could the next time take fewer steps?',
  'What happens if we connect these two things?',
  'What would actually prove this works?',
];

let questionIndex = 0;
const question = document.querySelector('#curiosity-question');
const nextQuestion = document.querySelector('#new-question');
nextQuestion.addEventListener('click', () => {
  questionIndex = (questionIndex + 1) % questions.length;
  question.textContent = questions[questionIndex];
});
