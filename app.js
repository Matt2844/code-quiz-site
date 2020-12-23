
// correct counter

let correct = 0;

// Question one functions

const submittedAnswer1 = () => {
  let a1 = document.getElementById("myText").value;
  let answer = '522';

  document.getElementById("showsubmit1").innerHTML = `Your current answer: ${a1}`;
  document.getElementById("showContainer").style.visibility = "visible";

  if (a1 == answer) {
    document.getElementById("correctanswer1").innerHTML = "Correct!"
    document.getElementById("correctanswer1").style.color = "green";
    correct = correct + 1
  } else {
    document.getElementById("correctanswer1").innerHTML = "Incorrect."
    document.getElementById("correctanswer1").style.color = "red";

  }
};

// Question 2

const submittedAnswer2 = () => {
  let a2 = document.getElementById("myText2").value;
  let answer = 'number';

  document.getElementById("showsubmit2").innerHTML = `Your current answer: ${a2}`;
  document.getElementById("showContainer2").style.visibility = "visible";

  if (a2 === (`${answer}`) || a2 === (`"${answer}"`)) {
    document.getElementById("correctanswer2").innerHTML = "Correct!"
    document.getElementById("correctanswer2").style.color = "green";
    correct = correct + 1
  } else {
    document.getElementById("correctanswer2").innerHTML = "Incorrect."
    document.getElementById("correctanswer2").style.color = "red";

  }
};

// Question 3

const submittedAnswer3 = () => {
  let a3 = document.getElementById("myText3").value;
  let answer = 'opacity';

  document.getElementById("showsubmit3").innerHTML = `Your current answer: ${a3}`;
  document.getElementById("showContainer3").style.visibility = "visible";

  if (a3 === (`the ${answer}`) || a3 === answer) {
    document.getElementById("correctanswer3").innerHTML = "Correct!"
    document.getElementById("correctanswer3").style.color = "green";
    correct = correct + 1
  } else {
    document.getElementById("correctanswer3").innerHTML = "Incorrect."
    document.getElementById("correctanswer3").style.color = "red";

  }
};


