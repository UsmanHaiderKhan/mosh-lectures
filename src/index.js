// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
import Teacher, { promote } from './teacher';
// Default import like that import ... from './';
// Named import like that import {...} from './';

// const { add } = require("lodash");
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
//
// "this" Key word Example
// const person = {
//   name: 'string',
//   walk(){
//     console.log(this);
//   }
//}
// person.walk();
// const walk = person.walk.bind(person);
// walk();

// Arrow Function

const simpleFunction = function(number){ return number * number;}
const arrowFunction = number => number*number;
console.log(simpleFunction(5));  
console.log(arrowFunction(6));  

// Arrow function did not need to binding with "this" Keyword. 
// Arrow function already inherited with "this" Keyword.

// Array with map function
// const names = ['usman', 'haider', 'khan'];

// const persons = names.map(function(name){
//   return '<li>' + name + '</li>';
// });

// console.log(persons);

// with arrow function

// const colors = ['blue','black','brown','barry'];
// const colorItems = colors.map(color => `<li>${color}</li>`);
// console.log(colorItems);


// Object destructuring 

// const address = {
//   street: 'street-1',
//   city: 'Lahore',
//   country: 'Pakistan'
// }
// const street = address.street;
// const city = address.city;
// const country =address.country;

// here "st" is use an alias of the variable
// const {street:st, city, country}  = address;


// Spread operator 

// const person = { name: 'usman', email: 'usman@gmail.com'};
// const location = {street: 'street-1', city: 'Lahore', province: 'Punjab'};

// const combined = {...person, ...location, job: 'Front end Developer'};
// console.log(combined);

// Classes 


//const person = new Person('usman');
//console.log(person); // Both ->
//person.walk();// have same output

// Inheritance 


const teacher = new Teacher('Usman','BSSE', '40,000');
console.log(teacher);
promote();




