import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    /**
     * TODO {2}: Receive the id parameter from the route
     * Take in count that it can change without reloading
     * the component.
     * Bonus for validating that the id is a valid number, 
     * show error if not
     * Double bonus for moving the route validation logic to a more
     * suitable place (out of this component, that's all i can say :D).
     */
    /**
     * TODO {3}: Get the shape corresponding to this id from 
     * api service
     */
  }



}
