// Strict equality or Identity operator:

c=10;
d='10';
console.log(c==d);
console.log(c===d);


let a;//undefined variable
let b;//undefined variable
console.log(a,b,a==b,a===b);

let a1=null;//null value
let a2=null;//null value
console.log(a1,a2,a==b,a===b);


let b1=0;// value is 0 
let b2=false;// value is false
console.log(b1,b2,b1==b2,b1===b2); //but the strict trible equal is give value is false

let c1=" ";
let c2=false;
console.log(c1,c2,c1==c2,c1===c2);

let d1=new String('Murali');
let d2="Murali";
console.log(d1,d2,d1==d2,d1===d2);

let e1=null;
let e2;
console.log(e1,e2,e1==e2,e1===e2)