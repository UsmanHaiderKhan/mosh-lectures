import {Person} from "./person";

export function promote() {}

export default class Teacher extends Person {
    constructor(name, degree, salary){
        super(name);
        this.degree = degree;
        this.salary = salary;
    }
    tech() {
     console.log("Teacher is teaching...!");
    }
}