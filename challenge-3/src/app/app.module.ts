import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { QuestionsComponent } from './components/questions/questions.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionsComponent
  ],
  imports: [
    BrowserModule,
    /**
     * TODO {1}: Implement some routing, shall we?
     * We only need to provide one route that loads the 
     * questions component, this route should load by default 
     * and receive an id parameter
     */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
