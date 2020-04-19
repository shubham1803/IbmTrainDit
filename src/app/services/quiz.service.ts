import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


const baseUrl = 'http://localhost:8000/api/quiz'

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  quizzes:any[];
  quiz:any;
  constructor(private http: HttpClient) { }
  
  
  fetchAllQuiz(){
     var obj= this.http.get(baseUrl);
     obj.subscribe((res:Array<any>)=> {
       console.log(res);
       this.quizzes = res;
       console.log("arayyyyyyyy:"+this.quizzes);
     });
    return obj;
   }

   fetchQuiz(n:string){
     var ob=this.http.get(baseUrl+"/"+n);
     ob.subscribe((res:Array<any>)=>{
       console.log(ob);
       this.quiz=res;
       console.log("questions:"+this.quiz);

     });
     return ob;
    // this.quizzes.forEach(q => {
    //   console.log(q.name);
    //   if(n==q.name){
    //     return q.questions;
    //   }
    // });
  }
}

  // addQuiz(quiz: Quiz){
  //   console.log('In service : ', quiz)
  //   return this.http.post(baseUrl, 
  //     quiz,{observe : 'response'})

  // }

  // deleteQuiz(id: number){
  //   return this.http.delete(baseUrl + id, {observe : 'response'})

  // }
