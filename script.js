let shuffled = [];
let current = 0;
let score = 0;

function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
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
  document.getElementById("next-btn").disabled = true;

  const feedbackImage = document.querySelector("img.feedback");
  if (feedbackImage) feedbackImage.remove();

  const shuffledChoices = shuffle(q.choices);
  shuffledChoices.forEach((choice) => {
    const btn = document.createElement("button");
    btn.textContent = choice;
    btn.onclick = () => selectAnswer(btn, q.answer);
    choicesDiv.appendChild(btn);
  });
}

function selectAnswer(button, correctAnswer) {
  const allButtons = document.querySelectorAll("#choices button");
  allButtons.forEach(btn => {
    btn.disabled = true;
    if (btn.textContent === correctAnswer) {
      btn.classList.add("correct");
    }
  });

  const feedback = document.createElement("img");
  feedback.classList.add("feedback");

  if (button.textContent === correctAnswer) {
    score++;
    feedback.src = "correct.png"; // gambar jawaban benar
  } else {
    button.classList.add("incorrect");
    feedback.src = "wrong.png"; // gambar jawaban salah
  }

  document.getElementById("choices").appendChild(feedback);
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
