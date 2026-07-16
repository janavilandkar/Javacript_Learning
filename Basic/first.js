//---------------------------------Variable declaration allowed--------------------------
//allowed not us let var const but it is bad practice

a=10;
A=20;
full_name="janavi landkar";
PI1$=3.14;
$flag=true;
//let 1a=20;        not allowed start with number
console.log(a);
console.log(A);
console.log(PI1$);
console.log(full_name);
console.log($flag);

//---------------------------let const var-----------------------------

var p=10;
var p=30;     //re-declare is possible that why it notuse after ES6(2015)
console.log("p="+p);

let q=20;
//let q=30;        redeclaration is not possible
q=90;              //reassign is possiable
console.log("q="+q);

const pi=3.14;
//pi=27;            reassign is not possiable
console.log("pi="+pi)

//---------------------------------Data type------------------------------
let b;
console.log(b);
let c=null;
console.log(c);

let d=BigInt("123");
console.log(d);
console.log(typeof d);

let e=Symbol("Hello");
console.log(e);
console.log(typeof e);