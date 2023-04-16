const quiz=[
    {
        question:"Q1: What is the full form of HTML",
        a:"Hello To My Land",
        b:"Hey Text Markup Language",
        c: "Hyper Markup Language",
        d: "Hypertext Markup Language",
        ans:"ans4"
    },
    {
        question:"Q2: What is the full form of CSS",
        a:"Cascading Style Sheets",
        b:"Cascading Style Sheep",
        c: "Cartoon Style Sheets",
        d: "Cascading Super Sheets",
        ans:"ans1"
    },
    {
        question:"Q3: What is the full form of HTTP",
        a:"Hypertext Transfer Product",
        b:"Hypertext Test Protocol",
        c: "Hey Transfer Protocol",
        d: "Hypertext Transfer Protocol",
        ans:"ans4"
    },
    {
        question:"Q4: What is the full form of JS",
        a:"Java Solution",
        b:"JavaScript",
        c: "Java Source",
        d: "Java Select",
        ans:"ans2"
    },
    {
        question:"Q5: Which of the following element is responsible for making the text bold in HTML?",
        a:"<pre>",
        b:"<a>",
        c: "<b>",
        d: "<br>",
        ans:"ans3"
    },
    {
        question:"Q6: <input> is -",
        a:"a format tag.",
        b:"an empty tag.",
        c: "All of the above",
        d: "None of the above",
        ans:"ans2"
    },
    {
        question:"Q7: The property in CSS used to change the background color of an element is -",
        a:"bgcolor",
        b:"color",
        c: "background-color",
        d: "All of the above",
        ans:"ans3"
    },
    {
        question:"Q8: The CSS property used to control the element's font size is -",
        a:"text-style",
        b:"text-size",
        c: "font-size",
        d: "None of the above",
        ans:"ans3"
    },
    {
        question:"Q9:Which of the following CSS property is used to set the background image of an element?",
        a:"background-attachment",
        b:"background-image",
        c: "background-color",
        d: "None of the above",
        ans:"ans2"
    },
    {
        question:"Q10: The CSS property used to specify the transparency of an element is -",
        a:"opacity",
        b:"filter",
        c: "visibility",
        d: "overlay",
        ans:"ans1."
    }
];
const question=document.querySelector('.question');
const option1=document.querySelector('#option1');
const option2=document.querySelector('#option2');
const option3=document.querySelector('#option3');
const option4=document.querySelector('#option4');
const submit=document.querySelector('.btn');
const answers=document.querySelectorAll('.answer');
const showScore=document.querySelector('#showScore');

let questionCount=0;
let score=0;
const loadQuestion=()=>{
    question.innerText=quiz[questionCount].question;
    option1.innerText=quiz[questionCount].a;
    option2.innerText=quiz[questionCount].b;
    option3.innerText=quiz[questionCount].c;
    option4.innerText=quiz[questionCount].d;
}
loadQuestion();
const getCheckAnswer=()=>{
    let answer;
    answers.forEach((element)=>{
        if(element.checked){
            answer= element.id;
            console.log(answer);
            
        }
    });
    return answer;

};
const deSelectAll=()=>{
    answers.forEach((element)=>{
        element.checked=false;
    })
}

submit.addEventListener("click",()=>{
    const checkedAnswer=getCheckAnswer();
    console.log(checkedAnswer);
    if(checkedAnswer===quiz[questionCount].ans){
        score++;
    }
    questionCount++;
    deSelectAll();
    if(questionCount<quiz.length){
       
        loadQuestion();
    }
    else{
       showScore.innerHTML=`
       <h3>You Scored ${score}/${quiz.length} 👍</h3>
       <button class="btn" onclick="location.reload()">Take Assessment Again</button>
       <button class="btn" onclick="location.assign('home.html')">Exit</button>
       `;
       showScore.classList.remove('scoreArea');
    }
});