import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { QuizService } from 'src/app/services/quiz.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit 
{
  quiz:string;
  ans:boolean[];
  questions:any[];
  currentQuestion:any;
  previousQuestion:any;
  nextQuestion:any;
  index:number;
  choices:any[];
  isFirstQuestion:boolean;
  isLastQuestion:boolean;
  totalMarks:number;
  constructor(public quizService : QuizService, private route: ActivatedRoute, public router: Router) { }

  ngOnInit(): void 
  {
      this.route.paramMap.subscribe(params => {
      var q=params.get("q");//Java
      console.log("ggggggggg"+q);
      this.quiz=q;
      this.quizService.fetchQuiz(q).subscribe((res:any)=> {
        console.log(res.questions);
        this.questions=res.questions;
        console.log("sssssssssssssssssssssss"+this.questions.length);
      
        this.totalMarks=0;
      this.isFirstQuestion=true;
      this.isLastQuestion=false;
      this.index=0;
      this.ans=[];
      this.newQuestionInitialize();
      });});
      
  }
  newQuestionInitialize(){
    this.currentQuestion=this.questions[this.index];
    this.choices=this.currentQuestion.choices;
    console.log(this.choices);
  }

  calculate(isans:boolean){
    //console.log(typeof isans);
    this.ans[this.index]=isans;
    
  }

  clickingNextQuestion():void{
    if(this.index<this.questions.length-1){
      this.index=this.index+1;
      if(this.index!=0){
        this.isFirstQuestion=false;
      }
      if(this.index==this.questions.length-1){
        this.isLastQuestion=true;
      }
      this.newQuestionInitialize();
    }

  }
  clickingPreviousQuestion():void{
    if(this.index>0){
      this.index=this.index-1;
      if(this.index==0){
        this.isFirstQuestion=true;
      }
      if(this.index==this.questions.length-2){
        this.isLastQuestion=false;
      }
      this.newQuestionInitialize();
    }


  }
  finalResult(){
    let l=this.ans.length;
    for (let i = 0; i < l; i++) 
    {
      if(this.ans[i]==true){
        ++this.totalMarks;
      }
    }
    console.log("Total Marks="+this.totalMarks);
    this.router.navigate(['result',{"marks":this.totalMarks}])
  }
}
