import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-quiz',
  templateUrl: './select-quiz.component.html',
  styleUrls: ['./select-quiz.component.css']
})
export class SelectQuizComponent implements OnInit {
  quizzes: Array<any> = []
  constructor(public quizService : QuizService, public router: Router) { }

  ngOnInit(): void{
    this.quizService.fetchAllQuiz().subscribe((res:Array<any>)=> {
      console.log(res);
      this.quizzes = res;
    })
  }
  loadQuiz(quizName:any){
    console.log("hello shubham do quizz!!"+quizName);
    this.router.navigate(['questions',{q:quizName}])
  }

}


// editEmployee(employee: Employee){
//   console.log('edit employee' , employee);
//   this.router.navigate(['add', employee])
// }