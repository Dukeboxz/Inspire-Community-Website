function addQuestions(){



  var page = document.getElementsByClassName("page")[0];

  for(var i = 0 ; i < volunteerQuestions.questions.length; i++){
    var questionContainer = document.createElement("div");
    questionContainer.className = "questionContainer";
    page.appendChild(questionContainer);
    var question = document.createElement("div");
    question.id = "question" + i;
    question.innerHTML = volunteerQuestions.questions[i].qText;

    var answer = document.createElement("div");
    answer.style.display = "none";
    answer.id = "answer";
    answer.innerHTML = volunteerQuestions.questions[i].qAnswer

    questionContainer.appendChild(question);
    question.appendChild(answer);

    $(question).click(function() {
      $(this).children().slideToggle();
    });
  }
  }
