function check() {
	var c=0;
	var q1=document.quiz.question1.value;
	var q2=document.quiz.question2.value;
	var q3=document.quiz.question3.value;
	var q4=document.quiz.question4.value;
	var q5=document.quiz.question5.value;
	var reset=document.getElementById('result');
	var quiz=document.getElementById("quiz");
	if(q1=='50')(c++)
	if(q2=='70')(c++)
	if(q3=='45')(c++)
	if(q4=='85')(c++)
	if(q5=='80')(c++)
	quiz.style.display="none;
	result.textContent='$(c)';
	
	if(c<=3){
		result.textContent="Result is $(c). You Failed please try again."
	}else{
		result.textContent="Result is $(c). Congratulations you passed!."		
	}