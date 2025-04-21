const quizData = [
    {
      question: "What does HTML stand for?",
      options: ["Hyper Text Makeup Language", "HighText Machine Language", "HyperText Markup Language", "None"],
      answer: "HyperText Markup Language"
    },
    {
      question: "Which language is used for styling web pages?",
      options: ["HTML", "CSS", "Python", "Java"],
      answer: "CSS"
    },
    {
      question: "Which is not a JavaScript framework?",
      options: ["React", "Angular", "Django", "Vue"],
      answer: "Django"
    },
    {
      question: "Which keyword is used to declare a variable in JavaScript?",
      options: ["var", "int", "float", "string"],
      answer: "var"
    }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  const questionEl = document.getElementById("question");
  const optionsEl = document.getElementById("options");
  const nextBtn = document.getElementById("nextBtn");
  const resultContainer = document.getElementById("result");
  const scoreText = document.getElementById("scoreText");
  const resultGif = document.getElementById("resultGif");
  
  function loadQuestion() {
    const current = quizData[currentQuestion];
    questionEl.textContent = current.question;
    optionsEl.innerHTML = "";
  
    current.options.forEach(option => {
      const btn = document.createElement("button");
      btn.classList.add("option-btn");
      btn.textContent = option;
      btn.onclick = () => {
        if (option === current.answer) {
          score++;
        }
        nextQuestion();
      };
      optionsEl.appendChild(btn);
    });
  }
  
  function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
      loadQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    questionEl.classList.add("hidden");
    optionsEl.classList.add("hidden");
    nextBtn.classList.add("hidden");
    resultContainer.classList.remove("hidden");
  
    scoreText.textContent = `You scored ${score} out of ${quizData.length}`;
  
    if (score >= quizData.length / 2) {
      resultGif.src = "https://media.giphy.com/media/111ebonMs90YLu/giphy.gif"; // 🎉 Winner GIF
    } else {
      resultGif.src = "https://media.giphy.com/media/3o6ZtaO9BZHcOjmErm/giphy.gif"; // 😢 Try again GIF
    }
  }
  
  nextBtn.onclick = nextQuestion;
  
  // Load first question
  loadQuestion();
  