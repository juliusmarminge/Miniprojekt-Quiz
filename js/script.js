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
  p_points = document.getElementById('p-points'),
  p_points_finish = document.getElementById('p-points-finish'),
  p_finish_comment = document.getElementById('p-finish-comment'),
  points = 0,
  question = 0;



q1btn.addEventListener('click', function() {
  if (q1ans.checked) {
    points = points + 1;
  }
  question = question + 1;
  q1.style.display = "none";
  q2.style.display = "block";
  p_points.innerHTML = "Du har " + points + " poäng av " + question + " möjliga."
});

q2btn.addEventListener('click', function() {
  if (q2ans.checked) {
    points = points + 1;
  }
  question = question + 1;
  q2.style.display = "none";
  q3.style.display = "block";
  p_points.innerHTML = "Du har " + points + " poäng av " + question + " möjliga."
});

q3btn.addEventListener('click', function() {
  if (q3ans.checked) {
    points = points + 1;
  }
  question = question + 1;
  q3.style.display = "none";
  q4.style.display = "block";
  p_points.innerHTML = "Du har " + points + " poäng av " + question + " möjliga."
});

q4btn.addEventListener('click', function() {
  if (q4ans.checked) {
    points = points + 1;
  }
  question = question + 1;
  q4.style.display = "none";
  q5.style.display = "block";
  p_points.innerHTML = "Du har " + points + " poäng av " + question + " möjliga."
});

q5btn.addEventListener('click', function() {
  if (q5ans.checked) {
    points = points + 1;
  }
  question = question + 1;
  q5.style.display = "none";
  q6.style.display = "block";
  p_points.innerHTML = "Du har " + points + " poäng av " + question + " möjliga."
});

q6btn.addEventListener('click', function() {
  if (q6ans.checked) {
    points = points + 1;
  }
  question = question + 1;
  q6.style.display = "none";
  q7.style.display = "block";
  p_points.innerHTML = "Du har " + points + " poäng av " + question + " möjliga."
});

q7btn.addEventListener('click', function() {
  if (q7ans.checked) {
    points = points + 1;
  }
  question = question + 1;
  q7.style.display = "none";
  q8.style.display = "block";
  p_points.innerHTML = "Du har " + points + " poäng av " + question + " möjliga."
});

q8btn.addEventListener('click', function() {
  if (q8ans.checked) {
    points = points + 1;
  }
  question = question + 1;
  q8.style.display = "none";
  q9.style.display = "block";
  p_points.innerHTML = "Du har " + points + " poäng av " + question + " möjliga."
});

q9btn.addEventListener('click', function() {
  if (q9ans.checked) {
    points = points + 1;
  }
  question = question + 1;
  q9.style.display = "none";
  q10.style.display = "block";
  p_points.innerHTML = "Du har " + points + " poäng av " + question + " möjliga."
});

q10btn.addEventListener('click', function() {
  if (q10ans.checked) {
    points = points + 1;
  }
  question = question + 1;
  q10.style.display = "none";
  finish.style.display = "block";
  p_points.innerHTML = "";
  p_points_finish.innerHTML = "Du fick " + points + " poäng av 10 möjliga."
  if (points < 3) {
    p_finish_comment.innerHTML = "Du suger!";
  } else if (points < 6) {
    p_finish_comment.innerHTML = "Du suger lite!";
  } else if (points < 9) {
    p_finish_comment.innerHTML = "Du suger bara en gnutta!";
  } else if (points = 10) {
    p_finish_comment.innerHTML = "Are you american, friend?";
  }
});
