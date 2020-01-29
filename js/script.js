var q1 = document.getElementById('q1'), //hämta alla cards
  q2 = document.getElementById('q2'),
  q3 = document.getElementById('q3'),
  q4 = document.getElementById('q4'),
  q5 = document.getElementById('q5'),
  q6 = document.getElementById('q6'),
  q7 = document.getElementById('q7'),
  q8 = document.getElementById('q8'),
  q9 = document.getElementById('q9'),
  q10 = document.getElementById('q10'),
  q11 = document.getElementById('q11'),
  q12 = document.getElementById('q12'),
  q13 = document.getElementById('q13'),
  q14 = document.getElementById('q14'),
  q15 = document.getElementById('q15'),
  q16 = document.getElementById('q16'),
  q17 = document.getElementById('q17'),
  q18 = document.getElementById('q18'),
  finish = document.getElementById('finish'),
  q1btn = document.getElementById('q1-btn'), //hämta alla knappar
  q2btn = document.getElementById('q2-btn'),
  q3btn = document.getElementById('q3-btn'),
  q4btn = document.getElementById('q4-btn'),
  q5btn = document.getElementById('q5-btn'),
  q6btn = document.getElementById('q6-btn'),
  q7btn = document.getElementById('q7-btn'),
  q8btn = document.getElementById('q8-btn'),
  q9btn = document.getElementById('q9-btn'),
  q10btn = document.getElementById('q10-btn'),
  q11btn = document.getElementById('q11-btn'),
  q12btn = document.getElementById('q12-btn'),
  q13btn = document.getElementById('q13-btn'),
  q14btn = document.getElementById('q14-btn'),
  q15btn = document.getElementById('q15-btn'),
  q16btn = document.getElementById('q16-btn'),
  q17btn = document.getElementById('q17-btn'),
  q18btn = document.getElementById('q18-btn'),
  q1error = document.getElementById('q1-error'),  //hämta alla p taggar för error-hantering
  q2error = document.getElementById('q2-error'),
  q3error = document.getElementById('q3-error'),
  q4error = document.getElementById('q4-error'),
  q5error = document.getElementById('q5-error'),
  q6error = document.getElementById('q6-error'),
  q7error = document.getElementById('q7-error'),
  q8error = document.getElementById('q8-error'),
  q9error = document.getElementById('q9-error'),
  q10error = document.getElementById('q10-error'),
  q11error = document.getElementById('q11-error'),
  q12error = document.getElementById('q12-error'),
  q13error = document.getElementById('q13-error'),
  q14error = document.getElementById('q14-error'),
  q15error = document.getElementById('q15-error'),
  q16error = document.getElementById('q16-error'),
  q17error = document.getElementById('q17-error'),
  q18error = document.getElementById('q18-error'),
  q1ans = document.getElementById('q1-ans'), //hämta alla rätta svar
  q2ans = document.getElementById('q2-ans'),
  q3ans = document.getElementById('q3-ans'),
  q4ans = document.getElementById('q4-ans'),
  q5ans = document.getElementById('q5-ans'),
  q6ans = document.getElementById('q6-ans'),
  q7ans = document.getElementById('q7-ans'),
  q8ans = document.getElementById('q8-ans'),
  q9ans = document.getElementById('q9-ans'),
  q10ans = document.getElementById('q10-ans'),
  q11ans = document.getElementById('q11-ans'),
  q12ans = document.getElementById('q12-ans'),
  q13ans = document.getElementById('q13-ans'),
  q14ans = document.getElementById('q14-ans'),
  q15ans = document.getElementById('q15-ans'),
  q16ans = document.getElementById('q16-ans'),
  q17ans = document.getElementById('q17-ans'),
  q18ans = document.getElementById('q18-ans'),
  p_points = document.getElementById('p-points'),
  p_points_finish = document.getElementById('p-points-finish'),
  p_finish_comment = document.getElementById('p-finish-comment'),
  points = 0,
  question = 0;


q1btn.addEventListener('click', function() {    //en funktion för varje knapp och fråga
  if (document.querySelectorAll('input[type="radio"][name="q1"]:checked').length == 1) {    //kollar om en checkbox är vald
    if (q1ans.checked) {    //om rätt checkbox är vald får man poäng
      points = points + 1;
    }
    question = question + 1;
    q1.style.display = "none";
    q2.style.display = "block";
    p_points.innerHTML = "Du har " + points + " poäng av " + question + " möjliga."   //om man valt fel så byter den bara fråga och skriver ut hur många poäng man har.
  } else {
    q1error.innerHTML = "Du måste välja ett svarsalternativ.";    //om man inte valt en checkbox kommer ett felmeddelande upp
  }
});
//samma funktion gäller för alla knappar

q2btn.addEventListener('click', function() {
  if (document.querySelectorAll('input[type="radio"][name="q2"]:checked').length == 1) {
    if (q2ans.checked) {
      points = points + 1;
    }
    question = question + 1;
    q2.style.display = "none";
    q3.style.display = "block";
    p_points.innerHTML = "Du har " + points + " poäng av " + question + " möjliga."
  } else {
    q2error.innerHTML = "Du måste välja ett svarsalternativ.";
  }
});

q3btn.addEventListener('click', function() {
  if (document.querySelectorAll('input[type="radio"][name="q3"]:checked').length == 1) {
    if (q3ans.checked) {
      points = points + 1;
    }
    question = question + 1;
    q3.style.display = "none";
    q4.style.display = "block";
    p_points.innerHTML = "Du har " + points + " poäng av " + question + " möjliga."
  } else {
    q3error.innerHTML = "Du måste välja ett svarsalternativ.";
  }
});

q4btn.addEventListener('click', function() {
  if (document.querySelectorAll('input[type="radio"][name="q4"]:checked').length == 1) {
    if (q4ans.checked) {
      points = points + 1;
    }
    question = question + 1;
    q4.style.display = "none";
    q5.style.display = "block";
    p_points.innerHTML = "Du har " + points + " poäng av " + question + " möjliga."
  } else {
    q4error.innerHTML = "Du måste välja ett svarsalternativ.";
  }
});

q5btn.addEventListener('click', function() {
  if (document.querySelectorAll('input[type="radio"][name="q5"]:checked').length == 1) {
    if (q5ans.checked) {
      points = points + 1;
    }
    question = question + 1;
    q5.style.display = "none";
    q6.style.display = "block";
    p_points.innerHTML = "Du har " + points + " poäng av " + question + " möjliga."
  } else {
    q5error.innerHTML = "Du måste välja ett svarsalternativ.";
  }
});

q6btn.addEventListener('click', function() {
  if (document.querySelectorAll('input[type="radio"][name="q6"]:checked').length == 1) {
    if (q6ans.checked) {
      points = points + 1;
    }
    question = question + 1;
    q6.style.display = "none";
    q7.style.display = "block";
    p_points.innerHTML = "Du har " + points + " poäng av " + question + " möjliga."
  } else {
    q6error.innerHTML = "Du måste välja ett svarsalternativ.";
  }
});

q7btn.addEventListener('click', function() {
  if (document.querySelectorAll('input[type="radio"][name="q7"]:checked').length == 1) {
    if (q7ans.checked) {
      points = points + 1;
    }
    question = question + 1;
    q7.style.display = "none";
    q8.style.display = "block";
    p_points.innerHTML = "Du har " + points + " poäng av " + question + " möjliga."
  } else {
    q7error.innerHTML = "Du måste välja ett svarsalternativ.";
  }
});

q8btn.addEventListener('click', function() {
  if (document.querySelectorAll('input[type="radio"][name="q8"]:checked').length == 1) {
    if (q8ans.checked) {
      points = points + 1;
    }
    question = question + 1;
    q8.style.display = "none";
    q9.style.display = "block";
    p_points.innerHTML = "Du har " + points + " poäng av " + question + " möjliga."
  } else {
    q8error.innerHTML = "Du måste välja ett svarsalternativ.";
  }
});

q9btn.addEventListener('click', function() {
  if (document.querySelectorAll('input[type="radio"][name="q9"]:checked').length == 1) {
    if (q9ans.checked) {
      points = points + 1;
    }
    question = question + 1;
    q9.style.display = "none";
    q10.style.display = "block";
    p_points.innerHTML = "Du har " + points + " poäng av " + question + " möjliga."
  } else {
    q9error.innerHTML = "Du måste välja ett svarsalternativ.";
  }
});

q10btn.addEventListener('click', function() {
  if (document.querySelectorAll('input[type="radio"][name="q10"]:checked').length == 1) {
    if (q10ans.checked) {
      points = points + 1;
    }
    question = question + 1;
    q10.style.display = "none";
    q11.style.display = "block";
    p_points.innerHTML = "Du har " + points + " poäng av " + question + " möjliga."
  } else {
    q10error.innerHTML = "Du måste välja ett svarsalternativ.";
  }
});

q11btn.addEventListener('click', function() {
  if (document.querySelectorAll('input[type="radio"][name="q11"]:checked').length == 1) {
    if (q11ans.checked) {
      points = points + 1;
    }
    question = question + 1;
    q11.style.display = "none";
    q12.style.display = "block";
    p_points.innerHTML = "Du har " + points + " poäng av " + question + " möjliga."
  } else {
    q11error.innerHTML = "Du måste välja ett svarsalternativ.";
  }
});

q12btn.addEventListener('click', function() {
  if (document.querySelectorAll('input[type="radio"][name="q12"]:checked').length == 1) {
    if (q12ans.checked) {
      points = points + 1;
    }
    question = question + 1;
    q12.style.display = "none";
    q13.style.display = "block";
    p_points.innerHTML = "Du har " + points + " poäng av " + question + " möjliga."
  } else {
    q12error.innerHTML = "Du måste välja ett svarsalternativ.";
  }
});

q13btn.addEventListener('click', function() {
  if (document.querySelectorAll('input[type="radio"][name="q13"]:checked').length == 1) {
    if (q13ans.checked) {
      points = points + 1;
    }
    question = question + 1;
    q13.style.display = "none";
    q14.style.display = "block";
    p_points.innerHTML = "Du har " + points + " poäng av " + question + " möjliga."
  } else {
    q13error.innerHTML = "Du måste välja ett svarsalternativ.";
  }
});

q14btn.addEventListener('click', function() {
  if (document.querySelectorAll('input[type="radio"][name="q14"]:checked').length == 1) {
    if (q14ans.checked) {
      points = points + 1;
    }
    question = question + 1;
    q14.style.display = "none";
    q15.style.display = "block";
    p_points.innerHTML = "Du har " + points + " poäng av " + question + " möjliga."
  } else {
    q14error.innerHTML = "Du måste välja ett svarsalternativ.";
  }
});

q15btn.addEventListener('click', function() {
  if (document.querySelectorAll('input[type="radio"][name="q15"]:checked').length == 1) {
    if (q15ans.checked) {
      points = points + 1;
    }
    question = question + 1;
    q15.style.display = "none";
    q16.style.display = "block";
    p_points.innerHTML = "Du har " + points + " poäng av " + question + " möjliga."
  } else {
    q15error.innerHTML = "Du måste välja ett svarsalternativ.";
  }
});

q16btn.addEventListener('click', function() {
  if (document.querySelectorAll('input[type="radio"][name="q16"]:checked').length == 1) {
    if (q16ans.checked) {
      points = points + 1;
    }
    question = question + 1;
    q16.style.display = "none";
    q17.style.display = "block";
    p_points.innerHTML = "Du har " + points + " poäng av " + question + " möjliga."
  } else {
    q16error.innerHTML = "Du måste välja ett svarsalternativ.";
  }
});

q17btn.addEventListener('click', function() {
  if (document.querySelectorAll('input[type="radio"][name="q17"]:checked').length == 1) {
    if (q17ans.checked) {
      points = points + 1;
    }
    question = question + 1;
    q17.style.display = "none";
    q18.style.display = "block";
    p_points.innerHTML = "Du har " + points + " poäng av " + question + " möjliga."
  } else {
    q17error.innerHTML = "Du måste välja ett svarsalternativ.";
  }
});

q18btn.addEventListener('click', function() {
  if (document.querySelectorAll('input[type="radio"][name="q18"]:checked').length == 1) {
    if (q18ans.checked) {
      points = points + 1;
    }
    question = question + 1;
    q18.style.display = "none";
    finish.style.display = "block";
    p_points.innerHTML = "_______________________________";
    p_points_finish.innerHTML = "Du fick " + points + " poäng av 18 möjliga."
    if (points < 3) {   //användaren får en liten utskällning om man inte har alla rätt
      p_finish_comment.innerHTML = "Du suger!";
    } else if (points < 6) {
      p_finish_comment.innerHTML = "Du suger lite!";
    } else if (points < 9) {
      p_finish_comment.innerHTML = "Du suger bara en gnutta!";
    } else if (points = 10) {
      p_finish_comment.innerHTML = "Are you american, friend?";
    }
  } else {
    q18error.innerHTML = "Du måste välja ett svarsalternativ.";
  }
});
