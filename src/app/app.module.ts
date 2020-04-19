import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {Routes, RouterModule} from '@angular/router'


import { AppComponent } from './app.component';
import { SelectQuizComponent } from './components/select-quiz/select-quiz.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { ResultComponent } from './components/result/result.component';


//1. Define Routes
const appRoutes: Routes = [
  { path: 'questions', component:  QuestionsComponent},
  { path: 'quiz', component: SelectQuizComponent },
  { path: 'result', component: ResultComponent }
];

//2. Add routes array to module imports
@NgModule({
  declarations: [
    AppComponent,
    SelectQuizComponent,
    QuestionsComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
