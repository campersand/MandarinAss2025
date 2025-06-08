let shuffled = [];
let current = 0;
let score = 0;

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function startQuiz() {
  shuffled = shuffle(questions).slice(0, 20);
  current = 0;
  score = 0;
  showQuestion();
}

function showQuestion() {
  const q = shuffled[current];
  const questionText = q.word || q.sentence;

  document.getElementById("question-number").innerText = `Soal ${current + 1}`;
  document.getElementById("question-text").innerText = questionText;

  const choicesDiv = document.getElementById("choices");
  choicesDiv.innerHTML = "";

  q.choices.forEach((choice) => {
    const btn = document.createElement("button");
    btn.textContent = choice;
    btn.onclick = () => selectAnswer(btn, q.answer);
    choicesDiv.appendChild(btn);
  });

  document.getElementById("next-btn").disabled = true;
}

function selectAnswer(button, correctAnswer) {
  const allButtons = document.querySelectorAll("#choices button");
  allButtons.forEach(btn => btn.disabled = true);

  if (button.textContent === correctAnswer) {
    score++;
    button.style.backgroundColor = "green";
  } else {
    button.style.backgroundColor = "red";
  }

  document.getElementById("next-btn").disabled = false;
}

document.getElementById("next-btn").addEventListener("click", () => {
  current++;
  if (current < 20) {
    showQuestion();
  } else {
    showResult();
  }
});

function showResult() {
  document.getElementById("quiz-container").style.display = "none";
  const resultDiv = document.getElementById("result");
  resultDiv.style.display = "block";
  resultDiv.innerHTML = `<h2>Skor Akhir: ${Math.round((score / 20) * 100)}%</h2>`;
}

window.onload = startQuiz;
