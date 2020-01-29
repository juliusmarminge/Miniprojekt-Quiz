var q1 = document.getElementById('q1'),                     //hämta alla cards
    q2 = document.getElementById('q2'),
    q3 = document.getElementById('q3'),
    q4 = document.getElementById('q4'),
    q5 = document.getElementById('q5'),
    q6 = document.getElementById('q6'),
    q7 = document.getElementById('q7'),
    q8 = document.getElementById('q8'),
    q9 = document.getElementById('q9'),
    q10 = document.getElementById('q10'),
    q1btn = document.getElementById('q1-btn'),            //hämta alla knappar
    q2btn = document.getElementById('q2-btn'),
    q3btn = document.getElementById('q3-btn'),
    q4btn = document.getElementById('q4-btn'),
    q5btn = document.getElementById('q5-btn'),
    q6btn = document.getElementById('q6-btn'),
    q7btn = document.getElementById('q7-btn'),
    q8btn = document.getElementById('q8-btn'),
    q9btn = document.getElementById('q9-btn'),
    q10btn = document.getElementById('q10-btn'),
    q1ans = document.getElementById('q1ans'),             //hämta alla rätta svar
    q2ans = document.getElementById('q2ans'),
    q3ans = document.getElementById('q3ans'),
    q4ans = document.getElementById('q4ans'),
    q5ans = document.getElementById('q5ans'),
    q6ans = document.getElementById('q6ans'),
    q7ans = document.getElementById('q7ans'),
    q8ans = document.getElementById('q8ans'),
    q9ans = document.getElementById('q9ans'),
    q10ans = document.getElementById('q10ans'),
    p_points = document.getElementById('p-points'),
    points = 0,
    question = 0;



q1btn.addEventListener('click', function () {
    if (q1ans.checked) {
        points = points + 1;
    }
    q1.style.display = "none";
    q2.style.display = "block";
});
