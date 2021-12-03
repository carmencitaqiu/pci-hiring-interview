/**
 * You shouldn't change this file, 
 * treat it as a black box. It simulates an API.
 */
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ShapeType } from '../enums/shape-type.enum';
import { Shape } from '../types/shape.type';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() {}

  getShape(id: number): Observable<Shape> {
    return of({
      type: [
        ShapeType.Circle,
        ShapeType.PlusSign,
        ShapeType.Square,
        ShapeType.Star,
      ][Math.round(random(id) * 3)],
      color: [
        Math.round(random(id + 1) * 255), 
        Math.round(random(id + 2) * 255), 
        Math.round(random(id + 3) * 255)
      ],
      size: Math.round(random(id) * 50 + 50),
    });
  }
}

function random(seed: number) {
  var x = Math.sin(seed++) * 10000;
  return x - Math.floor(x);
}