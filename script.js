var questions = [
    {
        "question":"What is the capital of India?",
        "options":["Delhi","Mumbai","Chennai","Kolkata"],
        "answer":"Delhi"
    },
    {
        "question":"What is the capital of USA?",
        "options":["New York","Washington","Chicago","Los Angeles"],
        "answer":"Washington"
    },
    {
        "question":"What is the capital of Australia?",
        "options":["Sydney","Melbourne","Brisbane","Perth"],
        "answer":"Sydney"
    },
    {
        "question":"What is the capital of Canada?",
        "options":["Ottawa","Toronto","Vancouver","Montreal"],
        "answer":"Ottawa"
    },
    {
        "question":"What is the capital of Germany?",
        "options":["Berlin","Hamburg","Munich","Frankfurt"],
        "answer":"Berlin"
    },
];


quizbox = document.getElementById("quizbox");
quizbox.innerHTML = "";
questions.forEach((question,index) => {
    var options = ''
    question.options.forEach((option,i) => {
        options += `                <li><label><input type="radio" name="opt-${index}" value="${option}"> ${option}</label></li>

        `
    })
    quizbox.innerHTML += `<div class="quizdiv">
    <h4>Q ${index+1}) ${question.question}</h4>
    <ul>
    ${options}
      
    </ul>
  </div>`;
});

document.querySelector('button[name=submit]').addEventListener('click',function(){
    // alert('Quiz Submitted')
    var score = 0;
    var answers = [];
    var quizdiv = document.querySelectorAll('.quizdiv');
    quizdiv.forEach((div,index) => {
        var answer = div.querySelector('input[type=radio]:checked')
        if(answer){
            answers.push(answer.value);
            if(answer.value == questions[index].answer){
                score+=1;
                div.style.background = '#77dd77';
            }else{
                div.style.background = '#dd7777';
            }
        }else{
            answers.push(null)
        }
    })
    var messagediv = document.getElementById('message');
    if(score==questions.length){
        messagediv.innerHTML = `<h3>You got all the answers correct!</h3>`;
    }else{
        messagediv.innerHTML = `<h3>You got ${score} out of ${questions.length} correct!</h3>`;
    }
    console.log("Answers: ",answers);
    console.log("Score: ",score);

})
function success(){
swal({
    title: "YAY!! Quiz Submitted",
    icon: "success",
    button: "Okay",
  });
}