//=========Lecture 50===================//

//---------------Arrays----------------//
    var array = new Array();
    array[0] = "Prasoon";
    array[1] = 2;
    array[2] =


//==========Lecture 49 Start================//

//------Object Literals and "this"---------//
//     var literalCircle = {
//         radius: 10,
//
//         getArea: function (){
//             var self = this;
//             console.log(this);
//
//             var increaseRadius = function (){
//                 self.radius = 20;
//             };
//             increaseRadius();
//             console.log(this.radius);
//
//             return Math.PI * Math.pow(this.radius, 2);
//
//         }
//     };
//
//     console.log(literalCircle.getArea());


//===========Lecture 48 Start=================//

    // function test(){
    //     console.log(this);
    //     this.myName = "Prasoon Ghosh";
    // }
    // test();
    // console.log(window.myName);

//-------------Function Constructors--------------//
//     function  Circle(radius){
//         this.radius = radius;
//     }
//
//     Circle.prototype.getArea =
//         function () {
//             return Math.PI * Math.pow(this.radius, 2);
//         };
//
//     var myCircle = new Circle(10);
//     var otherCircle = new Circle(20);
//     console.log(myCircle.getArea());
//     console.log(otherCircle.getArea());

//=========== Lecture 47 Start=================//

//----Copy by reference vs by Value---------------//
//     var a = 7;
//     var b = a;
//     console.log("a: "+a);
//     console.log("b: "+b);
//
//     b = 5;
//     console.log("after b update");
//     console.log("a: "+a);
//     console.log("b: "+b);
//
//     var a = {x: 7};
//     var b = a;
//     console.log(a);
//     console.log(b);
//
//     b.x = 5;
//     console.log("after b.x update");
//     console.log(a);
//     console.log(b);

//------Pass by reference vs by value------------//
//     function changePrimitive(primValue){
//         console.log("in changePrimitive...");
//         console.log("before:");
//         console.log(primValue);
//
//         primValue = 5;
//         console.log("after:");
//         console.log(primValue);
//     }
//
//     var value = 7;
//     changePrimitive(value); /* primValue = value */
//     console.log("after changePrimitive, orig value:");
//     console.log(value);

    // function changeObject(objValue){
    //     console.log("in changeObject...");
    //     console.log("before:");
    //     console.log(objValue);
    //
    //     objValue.x = 5;
    //     console.log("after:");
    //     console.log(objValue);
    // }
    //
    // value = {x: 7};
    // changeObject(value); /* objValue = value */
    // console.log("after change object, origin value:");
    // console.log(value);

//============ Lecture 45 Start=================//

//--------------Object Creation-----------------
//     var company = new Object();
//     company.name = "Facebook";
//     console.log(company);
//     company.ceo = new Object();
//     company.ceo.firstName = "Mark";
//     company.ceo.favcolor = "Blue";
//
//     console.log(company);
//     console.log("Company CEO name is: "
//     + company.ceo.firstName);
//
//     console.log(company["name"]);
//     var stockPropName = "Stock of company";
//     company[stockPropName] = "stock of company"
//     company[stockPropName] = 110;
//
//     console.log("Stock price is: "+ company[stockPropName]);

//-------------Better way: object literal-------------
//     var facebook = {
//         name: "Facebook",
//         ceo:{
//             firstName: "Mark",
//             favColor: "blue"
//         },
//         "stock of company": 110
//     };
//
//     console.log(facebook.ceo.firstName);

//============ Lecture 45 End===================//


//=============Lecture 44 Start=================//

// -------------Default Values------------------//
//     function orderChickenWidth(sideDish){
//         sideDish = sideDish || "whatever!";
//         console.log("Chicken with "+sideDish);
//     }
//
//     orderChickenWidth("noodles");
//     orderChickenWidth();
//=================Lecture 44 End=================//


//==============Lecture 43 Start================//
//----------------String Concatenation-----------
//     var string = "Hello";
//     // string += " World";
//     string = string + " World";
//     console.log(string + "!");

//-----------Regular math operators----------------
//     console.log((5 + 4)/3);
//     console.log(undefined / 5);
//     function test1 (a){
//         console.log(a / 5);
//     }
//     test1();
/* NaN is a special symbol that indicates Not a number */

//-----------Equality------------------------------------
//     var x = 4, y = 4;
//     if (x == y){
//         console.log("x=4 is equal to y=4");
//     }
//     x = "4";
//     if (x == y){
//         console.log("x='4' is equal to y=4");
//     }

//---------------Strict Equality-----------------------
// if (x === y){
//     console.log("Strict: x='4' is equal to y=4");
// }
// else{
//     console.log("Strict: x='4' is NOT equal to y=4")
// }

//-------- if statement (all false)
//     if (false || null || undefined || "" || 0 || NaN){
//         console.log("This line won't ever execute");
//     }
//     else{
//         console.log("All false");
//     }

//-------if statement (all true)----------------
//     if (true && "hello" && 1 && -1 && "false"){
//         console.log("All true")
//     }

//--------Best practice for {} style
/* Curly brace on the same or next line */
/* Is it just a style */
    // function a()
    // {
    //     return
    //     {
    //         name: "Prasoon"
    //     };
    // }
    //
    // function b() {
    //     return{
    //         name: "Prasoon"
    //     };
    // }
    //
    // console.log(a());
    // console.log(b());

//------------------For Loop----------------------
//     var sum = 0;
//     for (var i = 0; i < 10; i++){
//         console.log(i);
//         sum = sum + i;
//     }
//     console.log("Sum of 0 through 9 is: "+sum)

//==============Lecture 43 End==================//


//==============Lecture 42 Start================//
// var x;
// console.log(x);
//
// if (x == undefined){
//     console.log("x is undefined");
// }
//
// x = 5;
// if (x == undefined){
//     console.log("x is undefined");
// }
// else {
//     console.log("x has been defined");
// }
// ==================Lecture 42 end =======================