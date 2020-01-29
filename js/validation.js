var fname = document.forms['vform']['fname'];
var lname = document.forms['vform']['lname'];
var email = document.forms['vform']['email'];
var subject = document.forms['vform']['subject'];
var priority = document.forms['vform']['priority'];
var message = document.forms['vform']['message'];
var tos = document.forms['vform']['gridCheck2']; //tos = terms of services = användarvillkor

var fnameError = document.getElementById('fname-error');
var lnameError = document.getElementById('lname-error');
var emailError = document.getElementById('email-error');
var subjectError = document.getElementById('subject-error');
var priorityError = document.getElementById('priority-error');
var messageError = document.getElementById('message-error');
var tosError = document.getElementById('tos-error');


function Validate(){
  if (fname.value == "") {
    fname.style.border = "2px solid red";
    fnameError.innerHTML = "Du måste ange ditt förnamn.";
    return false;
  } else {
    fname.style.border = "1px solid #ced4da";
    fnameError.innerHTML = "";
  }

  if (lname.value == "") {
    lname.style.border = "2px solid red";
    lnameError.innerHTML = "Du måste ange ditt efternamn.";
    return false;
  } else {
    lname.style.border = "1px solid #ced4da";
    lnameError.innerHTML = "";
  }

  if (email.value == "") {
    email.style.border = "2px solid red";
    emailError.innerHTML = "Du måste ange din epostadress.";
    return false;
  } else {
    email.style.border = "1px solid #ced4da";
    emailError.innerHTML = "";
  }

  if (subject.value == "") {
    subject.style.border = "2px solid red";
    subjectError.innerHTML = "Du måste ange ett ärende.";
    return false;
  } else {
    subject.style.border = "1px solid #ced4da";
    subjectError.innerHTML = "";
  }

  if (priority.value == "") {
    priority.style.border = "2px solid red";
    priorityError.innerHTML = "Du måste ange en prioritet.";
    return false;
  } else {
    priority.style.border = "1px solid #ced4da";
    priorityError.innerHTML = "";
  }

  if (message.value == "") {
    message.style.border = "2px solid red";
    messageError.innerHTML = "Du måste skriva vad du behöver hjälp med.";
    return false;
  } else {
    message.style.border = "1px solid #ced4da";
    messageError.innerHTML = "";
 }

  if (!tos.checked) {
    tos.style.border = "2px solid red";
    tosError.innerHTML = "Du måste acceptera användarvillkoren.";
    return false;
  } else {
    tos.style.border = "1px solid #ced4da";
    tosError.innerHTML = "";
  }
}
