
var mainPage = document.getElementById('SectionMainpage')
var LoginForm = document.getElementById('LoginForm')
var SignUp = document.getElementById('SignUp')
var signupEmail = document.getElementById('signupEmail')
var signupPassword = document.getElementById('signupPassword')
var loginEmail = document.getElementById('loginEmail')
var loginPassword = document.getElementById('loginPassword')





function SectionDisplay(){

    mainPage.classList.add('d-none')
    LoginForm.classList.remove('d-none')
}


function SectionDisplay2(){

    mainPage.classList.add('d-none')
    SignUp.classList.remove('d-none')

}


function displayLogin(){

    var uservalue = document.getElementById('userName')
    localStorage.setItem("userName", uservalue)

    signupEmail.value
    signupPassword.value

   
    if ( !signupEmail.value && !signupPassword.value){

        Swal.fire({
            icon: "error",
            title: "Empty Field !",
          });
    }
    else{
    SignUp.classList.add('d-none')
    LoginForm.classList.remove('d-none')
    }

}



function loginNewpage(){

   
    loginEmail.value
    loginPassword.value


    if(  loginEmail !='' && loginPassword != '' && signupEmail.value === loginEmail.value && signupPassword.value === loginPassword.value ){
        
        window.location = 'home.html';
    }


    else{
        Swal.fire({
            icon: "error",
            title: "Invalid Credientials",
            text: "Your password or email is wrong",
          });
    }

}

function QuizPage(){

    window.location = 'questions.html'
}

var htmlQuiz = [
    {
      question: "What does API stand for?",
      option1: "Application Programming Interface",
      option2: "Advanced Programming Integration",
      option3: "Automated Protocol Interaction",
      option4: "Application Process Integration",
      answer: "Application Programming Interface",
    },
    {
      question: "Which HTTP method is used to retrieve data?",
      option1: "POST",
      option2: "GET",
      option3: "PUT",
      option4: "DELETE",
      answer: "GET",
    },
    {
      question: "Which programming language is primarily used for backend development?",
      option1: "HTML",
      option2: "CSS",
      option3: "JavaScript",
      option4: "Node.js",
      answer: "Node.js",
    },
    {
      question: "What is the purpose of a database in web development?",
      option1: "To host a website",
      option2: "To manage and store data",
      option3: "To style web pages",
      option4: "To create animations",
      answer: "To manage and store data",
    },
    {
      question: "Which of the following is a frontend framework?",
      option1: "Django",
      option2: "Laravel",
      option3: "React",
      option4: "Flask",
      answer: "React",
    },

   
  ];
   

  
  var questionCount = 0;
  var score = 0;
  var quizDiv = document.getElementById('MainQuiz')

function renderQuestion(){

  quizDiv.innerHTML = `<div class="question_content">
            <div class="ques_row">
                <div class="head_row" >
                    <h1> ${htmlQuiz[questionCount].question}</h1>
                </div>
                <div class="options q_row">
                   <h3> <input type="radio" value="${htmlQuiz[questionCount].option1}" id="option1" name="quizOption">
                    <label id="label1" for="option1">${htmlQuiz[questionCount].option1}</label></h3>
                </div>
                <div class="options q_row">
                    <h3> <input type="radio" value="${htmlQuiz[questionCount].option2}" id="option2" name="quizOption">
                        <label id="label2" for="option2">${htmlQuiz[questionCount].option2}</label></h3>
                </div>
                <div class="options q_row">
                    <h3> <input type="radio" value="${htmlQuiz[questionCount].option3}" id="option3" name="quizOption">
                        <label id="label3" for="option3">${htmlQuiz[questionCount].option3}</label></h3>
                </div>
                <div class="options q_row">
                    <h3> <input type="radio" value="${htmlQuiz[questionCount].option4}" id="option4"  name="quizOption">
                        <label id="label4" for="option4">${htmlQuiz[questionCount].option4}</label></h3>
                </div>
            </div>
            <div class="btn_row">
               <button  onclick="next()" class="nxt_btn">Next</button>
            </div>
        </div>  `
}

var quizOptions = document.getElementsByName("quizOption");
  function deSelect(){
    for ( var i = 0 ; i<quizOptions.length;i++){
      quizOptions[i].checked = false
    }
  }

  function next(){
    var checked = false;
    for ( var i = 0 ; i < quizOptions.length ; i++){
      if ( quizOptions[i].checked){
        checked = true
        if(quizOptions[i].value === htmlQuiz[questionCount].answer)
          score++
        }

      }

      if (!checked){
        Swal.fire({
                title: "No Option Selected",
                text: "Please Select Any Option",
                icon: "error",
              });

      }
      else{
        if( questionCount < htmlQuiz.length -1 ){
          questionCount++
          renderQuestion()
          deSelect()
      }
      else{
        showResult()
      }
          }
  
  }


  function showResult(){
    console.log("Result executed Haris")
   }

  window.onload = renderQuestion();


 
  var length = htmlQuiz.length
  
  function showResult() {
    // window.location = 'quizdetail.html'
    MainQuiz.classList.add('d-none')
    var totalQuestion = document.getElementById('totalQuestion')
    var percentageAll = document.getElementById('percentage')

    
    totalQuestion = length
      var percentage = Math.round(score / htmlQuiz.length * 100 )
        percentageAll = percentage
     
      var resultStatus = ''
      if(percentage < 70) {
          resultStatus = ' You are Failed ! Better Luck Next Time'
          // announcement.className = 'redText'
      } else {
          resultStatus = 'Congratulations ! You are Passed'
          // announcement.className = 'greenText'
      }
      // announcement.innerHTML = resultStatus
      // totalQuestions.innerHTML = htmlQuiz.length
      // correctQuestion.innerHTML = score 
      // percentageSpace.innerHTML = `Your Percentage is ${percentage} %`
    }

    showResult()