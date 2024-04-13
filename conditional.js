// conditional Operator:   ( ? : )

const age=11;
const res=(age>=18)?"Eligible for vote":"Not eligible for vote";
console.log(res);

// Using Object based


var user={'fname':"Murali",'age':20};
user.fname="Rio";
console.log(user.fname);
const welcome=(user)=>{
    const r=user.fname?user.fname:"Stranger";
    return "Hello "+r;
}
console.log(welcome(user));

//chained conditional Operator:

const a=80;
const b=a>=90?"A grade":a>=80?"B grade":a>=70?"C Grade":"Fail";
console.log(b);