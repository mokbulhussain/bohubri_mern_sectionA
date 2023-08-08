
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






//---------------------- loop---------------------


// ------------------ while loop------------------
/*
var i=1;
while(i<=5){
    console.log(i)
    i++;
}
*/



// do while loop
/*
var i=1;
do{
    console.log(i)
    i++;
}while(i<=5)
*/


/// more while loop

/*
var i=0;
var sum=0;

while(i<10){
    if(i==4){
        console.log("this is 4")
    }
    i++;
    sum=sum+i;

    console.log(i)
}
console.log(sum);
*/





//----------------- for loop-------------

/*
for(var j=1; j<=5;j++){
    console.log(j);
}

for(var k=10; k>1;k--){
    console.log(k)
}

*/


// -- loop break condition

/*
for(var i=1; i<10;i++){
    if(i==3){
        break;
    }
    console.log(i)
}
*/


// continue condition
/*
for(var i=1; i<10;i++){
    if(i==3){
        continue;
    }
    console.log(i)
}
*/


/*
var name="i am leargning";
var len=name.length;

for(var i=0; i<len; i++){
    console.log(name[i])
}
*/




// --- for in , for of loop---------
/*
let name="i am learnign banglad";
let food=['cake','biskut','naste']
let person={
    name:'sakib',
    profession:'teacher',
    age:30
}


// for in
for (var x in name){
    console.log(name[x])
}


for (var x in food){
    console.log(food[x])
}


for (var y in person){
    console.log(y)
    console.log(person[y])
}


// for of
for (var x of food){
    console.log(x)
}

// for of doesnot allow in object

*/





///------------------  Function -------------------

// building function
// alert("hello");



// user defiend function

// decleration function
/*
function somthing(){
    console.log("print somethind");
    console.log("print ok")
}

//excute function
somthing();

*/




//----------- function parameter/ argument------------


// parameter with argument
/*
function something(a,b){
    console.log(a+b);
}

something(20,30)
*/



// default parameter
/*
function something(a=0,b=7){
    console.log(a+b);
}
something()

something(30,40)

let n=10;
let m=40;
something(n,m)
*/



// return function

/*
function something(a,b){
    return a+b;
    console.log("check below line")
}
console.log(something(30,50));
let sum=something(2,2)
console.log(sum)
*/





//----  function type --------------------

// named function
/*

function somthing(name){
   console.log(`my name is ${name}`);
}

// expression function
let somthing=function(name){
    console.log(`my name is ${name}`)
}

*/
// arrow function
/*
const somthing=(name)=>{
    console.log(`my name is ${name}`)
}
somthing("Mokbul")
*/



//------------- array iteration with foreach & map function

// var foods=['katal','am','lisu','apple']
// var numbers=[2,4,5,6]

// 1st parameter = item,
// 2nd parameter = index
//3rd parameter = whole array
/*
foods.forEach(function(item,index){
    console.log(item)
    console.log(index)
})
*/


/*
// map

foods.map(function(item){
    console.log(item)
})

//create new array but foreach not create new array
let food_item=foods.map(function(item){
    return item
})
console.log(food_item)


function squre(item){
    return item*item
}

let num_sq=numbers.map(squre);

console.log(num_sq)
*/



//--------- object method ----------

/*
let person={
    firstname:'mokbul',
    lastname:'hussain',
    dob:'9-10-2023',
    fullname:function(){
        return `${this.firstname} ${this.lastname}`
    }
}

console.log(person.fullname())
*/


//------- math object--------

/*
let val;
val=Math.PI;
val=Math.E;
val=Math.round(3.1);
val=Math.ceil(3.1);
val=Math.floor(1.9);
val=Math.sqrt(81);
val=Math.abs(-81);
val=Math.pow(2,3);
val=Math.min(2,3);
val=Math.max(2,3);
val=Math.random();
val=Math.random()*10;
val=Math.floor(Math.random()*10);
console.log(val)

*/


//-------------- Date object --------------

/*
let val;
val=new Date();
val=new Date('August 26 1996');
let today=new Date();
val=today.getDay()
val=today.getMonth()
val=today.getFullYear()
val=today.getMinutes()
val=today.getMilliseconds()
val=today.getTime()
// val=today.setMonth(12)

console.log(val)
*/




//--------- Global & local  scope-----------
/*
// global scope
var a=1;
let b=3;
const c=5;
console.log('global scope: '+ a,b,c);


// function scope

function some(){
    var a=4;
    let b=7;
    const c=8;
    console.log('function scope: '+ a,b,c)
}
some();
console.log('global scope: '+ a,b,c);


// if scope
// if scope var change hoye jai. but let change oy na
if(true){
    var a=9;
    let b=11;
    const c=16;
    console.log('if scope: '+ a,b,c)
}
console.log('global scope: '+ a,b,c);



// for scope
// for scope var change hoye jai. but let change oy na
for(var a=0; a<10; a++){
 
    console.log('for scope: '+ a)
}
console.log('global scope: '+ a,b,c);

*/




//--------------- class -----------------------

/*
class Person{
    constructor(fname,lname,birthday){
        this.fname=fname;
        this.lname=lname;
        this.dob=birthday
    }

    fullname(){
        return this.fname+" "+this.lname;
    }
}

let person1=new Person('mokbul','hussain','12-22-3023')
let person2=new Person('mokbul2','hussain2','12-22-3023')

console.log(person1.fullname())
console.log(person2.fullname())

*/




//-------------- sub class / inheritance --------------
/*
class Person{
    constructor(fname,lname,dob){
        this.fname=fname,
        this.lname=lname,
        this.dob=dob
    }

    fullname(){
        return this.fname+this.lname
    }
}

class Customer extends Person{
    constructor(fname,lname,address,mobile){
        super(fname,lname)

        this.address=address,
        this.mobile=mobile
    }
}

let customer1=new Customer('salam','hasan','sylhet','01236578')
console.log(customer1);
console.log(customer1.fullname())




// --------------- static method for class --------

class Man{
    static test(){
        return "this static methods";
    }
}

let man1=new Man()
console.log(Man.test())

*/





///--------------------  DOM --------------

// var val;
// val=this
// val=window
// val=window.document
// val=document
// val=document.all
// val=document.all.length
// val=document.head
// val=document.body
// val=document.doctype
// val=document.domain
// val=document.contentType
// val=document.forms
// // val=document.forms[0];
// // val=document.forms[0].method;
// // val=document.forms[0].action;
// val=document.links;
// val=document.links[0];
// val=document.links[0].href;
// val=document.links[0].className;
// val=document.links[0].classList;

// console.log(val)





//---------------- Dom Selector (Single Element)-----------------

/*
let val;
val=document.getElementById('title');
val=document.getElementById('title').classList;
val=document.getElementById('title').className;
// console.log(val)

val=document.getElementById('title');
val.style.background="red"
val.style.color="blue"
val.style.padding="20px"
val.style.display="none"
val.style.display="block"
val.textContent="Hello javascript"
val.innerHTML="Hello javascripts"
val.innerHTML="<i>Hello javascripts</i>"


// querySelector

val=document.querySelector('.title');
val=document.querySelector('h1');
val=document.querySelector('#title');

val=document.querySelector('ol');
val=document.querySelector('li');
val=document.querySelector('ol li');
val.style.background='red'
val.style.color='blue'
val=document.querySelector('li:last-child');
val.style.color='blue'
val=document.querySelector('li:nth-child(1)');
val.style.color='orange'
val=document.querySelector('li:nth-child(2)');
val.style.color='orange'
val.innerHTML="dart"
console.log(val)

*/



// ------- multiple selector dom -----

/*
let list=document.getElementsByClassName('simple')
// console.log(list)
list[0].style.background='black'
list[0].style.color='red'
list[0].textContent='black'


// get tag name

list=document.getElementsByTagName('li')
list[3].style.color="blue"

list=document.querySelector('ol').getElementsByTagName('li');

let lis=Array.from(list)
lis.forEach(function(item){
    // console.log(item)
})

list=document.querySelectorAll('ol li');
list.forEach(function(item){
    // console.log(item)
})

let listOdd=document.querySelectorAll('li:nth-child(odd)');
listOdd.forEach(function(item){
    console.log(item)
    item.style.background='orange'
})

let listEven=document.querySelectorAll('li:nth-child(even)');
listEven.forEach(function(item){
    console.log(item)
    item.style.background='red'
})
// console.log(list)

*/



// -- Traversing 
/*
let val;
let list=document.querySelector('ul');
let listItem=document.querySelector('ul li:last-child');
val=list;
// console.log(val)
val=listItem;
// console.log(val)


// get child node

val=list;
val=list.childNodes
val=list.childNodes[0]
val=list.childNodes[1]
val=list.childNodes[2].nodeName
val=list.childNodes[2].nodeType


// get child using childern

val=list.children
val=list.children[1]
list.children[0].textContent="youtuve";
val=list.children[1].children[0]
val=list.children[1].children[0].href

val=list.firstElementChild
val=list.lastElementChild
val=list.childElementCount;

let listItem2=document.querySelector('li:first-child');
val=listItem2.parentElement
val=listItem2.parentElement.parentElement
val=listItem2.nextElementSibling.nextElementSibling
let listItem3=document.querySelector('li:last-child');
val=listItem3.previousElementSibling
console.log(val)

*/



//-------- Add Element with Dom -----------

/*
let olItem=document.createElement('li');
olItem.className="item-list";
olItem.id="item_list"
olItem.innerHTML='javascript'
// console.log(olItem)
document.querySelector('ol').append(olItem)


let ulItem=document.createElement('li');
let link=document.createElement('a');
link.className='demo';
link.setAttribute('href','https//:facebook.com')
link.innerHTML='Instagram'
ulItem.appendChild(link)
document.querySelector('ul').append(ulItem)
console.log(ulItem)
console.log(link)

*/


// ------- Replace Element with dom--------------
/*
let newheading=document.createElement('h1');
newheading.innerHTML="Javascript Dom";

let oldheading=document.querySelector('h4');

console.log(newheading)
console.log(oldheading)

let parents=document.querySelector('.container');
console.log(parents)

parents.replaceChild(newheading,oldheading);
*/



// ------- Remove Element with dom----------

/*
let listItem=document.querySelectorAll('li');
let list=document.querySelector('ul');

listItem[0].remove()
listItem[5].remove()


console.log(listItem)
console.log(list)


//----------- add class-------------------- 
list.classList.add('test')
list.classList.add('test2')

//-------------- remove class ------------------
list.classList.remove('test')
console.log(list)



//------------ add attribute--------

// let listtitle=list.hasAttribute('title')
// let listtitle=list.hasAttribute('class')
let listtitle=list.setAttribute('title','list-title')
console.log(listtitle)
console.log(list)

//------------ remove attribute-----------
list.removeAttribute('title')
console.log(list)

*/







//------------ Event Listener with Dom----------------------


let btn=document.getElementById('simple_btn')
console.log(btn)
btn.addEventListener('click',message)

// function message(){
//     alert("hello");
// }


function message(e){
   let val=e;
   val=e.target
   val=e.target.id
   val=e.timeStamp
   val=e.type
   val=e.clientY
   val=e.clientX
   val=e.offsetY
   val=e.offsetX
   console.log(val)
   
}


let input=document.getElementById('name')
input.addEventListener('focus',insert)



function insert(e){
let val=e
val=this
this.style.background='red';
console.log(this)
}






















