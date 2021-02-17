//program 1
function a(){
    console.log('this is inside a function');
}
a();


//program 2
var obj = {
    a: {
        name :'praveen'
    },
    b:10
};

console.log(obj.a);
console.log(obj.a.name);
console.log(obj.b);

obj.b='chennai';
console.log(obj.b); //losely coupled that means values can be changed. Initially b was 10 but now it was changed to chennai.


//program 3
var x = "hello";
function b(){
    console.log("b");
}
b();
console.log(x);


//program 4
function z(){
    console.log('z function inside');
}
function e(){
    console.log('e function inside');
    z()
}
e();

//program 5
var myvar;
console.log(myvar); // its undefined
//console.log(fission);   its not defined  (different from undefined)

//program 6
console.log(myvar1); //variable hosting  , program will be converted to //  var myvar1; 
var myvar1=10;       //variables and functions will be moved to up     //  console.log(myvar1);  and 
                                                                        //   myvaar1= 10;

//program 7            program will be converted to 
console.log(fission1)           //var fission1
var fission1;                   // console.log(fission1)
fission1=20;                    //fission1=20
console.log(fission1);          //console.log(fission1)

//program 8   // the function g() will be moved upwards first and then g(); will be called
g();
function g(){
    console.log('inside g');
}
var fis=20;

//program 9
var fis;
function l(){
    console.log('inside l');
}
l();
console.log(fis);
fis=10;
console.log(fis);

//program 10
//var some=20;
//if(true){
//    var some=10;
//}
//console.log(some);

//program 11
//var som;
//if(true){
 //   var som=10;
//}
//console.log(som);

//program 12
function h(){
    if(true){
        let b=20;
        b=50;

        const s="fission";
        //s="labs"; //not allowed

        var c="freshers";
        console.log(b); 
    }
    console.log(b);   //lexical scoping
    console.log(c);
}
h();