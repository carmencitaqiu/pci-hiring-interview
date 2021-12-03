import { ShapeType } from '../enums/shape-type.enum';

export interface Shape {
    type: ShapeType;
    color: [number, number, number]; // RGB
    size: number;
}