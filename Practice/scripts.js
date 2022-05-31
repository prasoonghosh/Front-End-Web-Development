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
    var sum = 0;
    for (var i = 0; i < 10; i++){
        console.log(i);
        sum = sum + i;
    }
    console.log("Sum of 0 through 9 is: "+sum)


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