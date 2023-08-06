
//------------ javascript syntex , statement, comment---------------

//statement
// console.log("javascript connect"); console.log("hello");

// console.log("statement not count line gap");


// // syntex
// console.log("Bangladesh is 'small' conutry");


// comment
//console.log(50.9);


// double line comment
/*
console.log("hello")
console.log("work");

*/




//-----------------  user input -------------------


/*
let x;

x=prompt("Please Enter Your Name");

document.write(x);
console.log(x);

*/





//-----------------  variable --------------------------------

/*


// var , let

var a=50;
console.log(a);
a=70;
console.log(a);


let b=40;

let c=a+b;
console.log(c);


// JAVASCRIPT case sensetive
// diffrent variable and diffrent value.
let myname, MYNAME;
myname="hasan";
MYNAME="korim";

console.log(myname);
console.log(MYNAME);


// const variable
// const variable value not change.
const d=80;
console.log(d);





// --------------------- keywords -------------

// javascript keywords hosse reserved word. ay gula variable name use kora jabe na.

// exm: var, let const, function , class , console, prompt


*/  





//-------------------- Arithmetic Operators -----------------------

// addition (+)
// sub (-)
// multiplcation (*)
// divide (/)
// modulas (%)
// power (**)
// increment (++)
// decrement (--)


// addition (+)
/*
let a=20;
let b= 30;
let c=a+b;
console.log(c)
*/


// sub (-)
/*
let a=60;
let b= 30;
let c=a-b;
console.log(c)
*/


// multi (*)

/*
let a=60;
let b= 30;
let c=a*b;
console.log(c)

*/

// divide (/)

/*
let a=60;
let b= 30;
let c=a/b;
console.log(c)
*/


// modulas (%)
// modulas mane hosse bagshesh ja take ta.
/*
let a=63;
let b= 30;
let c=a%b;
console.log(c)
*/



// modulas (%)
// modulas mane hosse bagshesh ja take ta.
/*
let a=63;
let b= 30;
let c=a%b;
console.log(c)
*/


// power (**)

/*
console.log(2**3)


// increment (++)
let a=6;
// a++;
// console.log(a);

let c;
// first a assign kore tarpor increment kore.

c=a++
console.log(c);
// increment korse
// console.log(a)
// increment kore asign korse
c=a;
console.log(c)
c=++a;
console.log(c);

*/



// Decresement (++)
/*
let a=6;
// a--;
// console.log(a);

let c;
// first a assign kore tarpor increment kore.

c=a--
console.log(c);
// increment korse
console.log(a)
// increment kore asign korse
c=a;
console.log(c)
c=--a;
console.log(c);

*/






//-------------- String Operator------------

/*

let word1="hello";
let word2="World"

let fullword=word1+word2
console.log(fullword)


let n=40;

// jodi number string ar por take tokon ay ta ke string dorbe
fullword=word1+word2+n
console.log(fullword)


// jodi 2 ta number string a age deya take tokon 
// oy 2 ta number add hoye string ar shate join hobe.

fullword=4+n+word1
console.log(fullword)

*/







//--------- --------- comparison operator ------------------

// == operator diye 2 ta value maje compaier kore.

/*

let v1=4;
let v2=5
console.log(v1==v2)

v2="4";
// value match without type
console.log(v1==v2)



// === ay sign diye type shoho value compair check kora jai.

let a=5;
let b="5";
console.log(a===b)

b=5
console.log(a===b)


// != ay sign diye 2 ta value maje compaier kore.
let c=6;
let d=6;
console.log(c!=d);


// !==
d="d"
console.log(c!==d)


// <, > , >= , <= ay sign diye greate, less than, or equal check kora hoy

let m=10;
let n=6;

// > grater than
console.log(m>n)

// < less than
console.log(m<n)

// <= less than
console.log(m<=n)

// >= greater than
console.log(m>=n)

*/







//------------------- Logical  operator------------------------

/*

// || ay sign diye or operator bujai. ay sign ar je kuno
// ak site true hole condition true hobe

let m=40;
let n=30;

console.log((m==40)|| (n>50))
console.log((m==80)|| (n<50))
console.log((m==80)|| (n>50))



// && ay sign diye and operator bujai. ay sign dara
// 2  site true hole condition true hobe.

let d=40;
let c=30;

console.log((d==40)&& (c>50))
console.log((d==40)&& (c==30))
console.log((d==80)&& (c>50))



// ! ay sign diye not operator bujai. ay sign dara
// 2  site true hole condition true hobe.
let k=40;
let l=30;
console.log((k==40)&& !(l>50))
console.log((k==40)&& !(l==30))
console.log((k==40)&& !(l>50))

*/





//----------------- conditional operator---------------------

/*
// ternary operator bola jai

let a=(1>8) ? "Yes":"No";
let b=(1<8) ? "Yes":"No";
console.log(a)
console.log(b)

*/





//----------------- Assignment operator---------------------

/*
let a=10;
console.log(a+=a)
console.log(a-=a)
console.log(a*=a)
console.log(a/=a)
*/





//-------------------- Data Types-------------

// Number
// String
// Boolean
// Array
// Object
// Undefined
// Empty Value
// Null
// NaN - Not a Number




//--------  Number ------
/*
var x;
x=30;
console.log(x);

x=10**5
console.log(x)

x="34" + "45";
console.log(x)

x=34+"40";
console.log(x)
x= 34+60+"70";
console.log(x)
x="25"-"5";
console.log(x);
x="25"/5;
console.log(x)
x="304";
y=x.toString();
console.log(y+x);
x=800
var d=x.toString(8);
console.log(d)

var m="30";
console.log(parseInt(m));
m=3.14;
console.log(parseInt(m))


// isNaN

var z="hell";
console.log(isNaN(z));




// ------------- String ---------------

console.log("hello World")
console.log('Hello')
console.log("bangladesh 'small' contry")
console.log('hello \\ world')
console.log( ' hello \t world')
console.log('hello \t\t conutry')
console.log("hello \n world")


var z='hello'
console.log(z.length)

var x='flytechi'
console.log(x[0])

console.log(x.toUpperCase())

var y= 'mokbul  hussain'
// space remove
var z=y.trim();
console.log(z)
console.log(y.trim())


console.log(z.slice(1,4))
console.log(z.slice(-5,-1))




//-------------- Boolean-------------

var a=10;
console.log(a>20)

console.log(a>5)

console.log(a==10)


var r;
console.log(r)

var j=10/"h";
console.log(j)

var g=""
console.log(g)

var b=null
console.log(b)




//-------------------- Array ----------------

var country=["Bangladesh","usa","uk"];
console.log(country)

// value show
console.log(country[0])

// lenth
console.log(country.length)

// change
country[0]="dhaka";
console.log(country[0])

// add value
country[3]='orway';
console.log(country)

// add value diffrent way
country[country.length]='turkey';
console.log(country)

// add value another way
country.push("china");
console.log(country)

country.push('lon','us','ame');
console.log(country)

// add value from first index
country.unshift("gana")
console.log(country)

// data delete
country.pop();
console.log(country)

// data delete another way
country.shift();
console.log(country)


// declear array

var numbers=[]
console.log(numbers)

numbers.push(20);
console.log(numbers)


// split string to array
var x="Bangladesh";

console.log(x.split(""))

var i="bangladesh is a country";
var d=i.split(" ")
console.log(d)


// array to sting
var u=d.toString();
console.log(u)

// array join
var k=d.join("/");
console.log(k)



// concate array
var h=['e','ban','len']
var r=country.concat(h);
console.log(r)



// array sort
console.log(country.sort())

console.log(country.reverse())






//-----------------  Object Data Type-------------

var student={name:"Rahul",age:20,address:'sylhet'}

console.log(student);
console.log(student.name);
console.log(student["name"])
console.log(student.length)


// set new value
student.ocu="Students"
console.log(student)

student.village="sunamgonj";
console.log(student)


// delete value
delete student.village;
 console.log(student)


 // declear object
var man={}
man.name="salam";
man.age=30
man.address="sylhet";
console.log(man)






// -------------- More Array & More Object -----------------

// array
var ar=[1,2,3,['a','b'],4,5]
console.log(ar)
console.log(ar[3][0])

var mar=[1,2,[4,6,[9,34,20]]]
console.log(mar[2][0])

var m=[1,2,3,{name:"j",age:50},8,10]
console.log(m[3].name)
console.log(m[3]['name'])


// object

var n={name:"m",prop1:[1,2,4],age:30}
console.log(n.prop1[0])








// ------- indefiend, empty value , null , nan

//undefined
var ab;
console.log(ab)

//null
var bab=null
console.log(bab)

// nan

var bb=20/"h";
console.log(bb)





//---------- primitive & referance type---------------------

//--- primitive types
// number , string , boolean
// deals with value not address
var a=7;
var b=a;
console.log(b)

// change value but not change b value.
a=30;
console.log(b)



//--- referance type
// array, object
// deals with address

var a=[20,40,30];
var b=a;
console.log(b)

// change value
a[1]=50
console.log(b)


*/



/////------------- -- control flow / if , if-else /-----------------

/*
if(true){
    console.log("ok")
}
else{
    console.log("no");
}

// var age=10;
/*
var age=70

if(age>=50){
    console.log("old")
}else{
    console.log("under 50")
}
*/


/*
var age=20

if(age>=50){
    console.log("old")
}
else if(age==30){
    console.log("under 50")
}
else if(age >=20 && age<=30){
    console.log("young")
}
else{
    console.log("child")
}

*/





//------------ switch state ment----------

/*
var choose=prompt();

var text="";

switch(choose){
    case "a":
        text="choose a";
        break;
    case "b":
        text="choose b"
        break;
    default:
        text="coose c";
}

console.log(text);

*/
