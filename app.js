const correctAnswers=['A','A','B','B'];
const form=document.querySelector('.quiz-form');
const result=document.querySelector('.result');
const updatescore=document.querySelector('.updatescore');



form.addEventListener('submit',e =>{
    e.preventDefault();

    let score=0;
    const userAnswers=[form.q1.value,form.q2.value,form.q3.value,form.q4.value];

    userAnswers.forEach((answer,index) =>{
        /*checking answers*/

        if(answer===correctAnswers[index]){
            score += 25;

        }
        
        
    });
    
    scrollTo(0,0);
    /*showing result on page*/
   /*  result.querySelector('span').textContent= `${score}%`; */     /* (OR)  updatescore.innerHTML= score + '%'; and use innerHTML in place of textcontent */
    result.classList.remove('d-none');   
    
    /* Animation */
    let output=0;
    const timer= setInterval(() => {
        result.querySelector('span').textContent= `${output}%`;   
        if(output === score){
            clearInterval(timer);
        }else{
            output++;
        }
    },10);

    


});

