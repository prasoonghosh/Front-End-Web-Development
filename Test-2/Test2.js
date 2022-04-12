function myFunction(a) {
    if (a == 1) {
        document.getElementById("Patna").style.display = "block";
        document.getElementById("Luckhnow").style.display = "none";
        document.getElementById("Indore").style.display = "none";
        document.getElementById("Pune").style.display = "none";
    }
    else if (a == 2) {
        document.getElementById("Patna").style.display = "none";
        document.getElementById("Luckhnow").style.display = "block";
        document.getElementById("Indore").style.display = "none";
        document.getElementById("Pune").style.display = "none";
    }
    else if (a == 3) {
        document.getElementById("Patna").style.display = "none";
        document.getElementById("Luckhnow").style.display = "none";
        document.getElementById("Indore").style.display = "block";
        document.getElementById("Pune").style.display = "none";
    }
    else {
        document.getElementById("Patna").style.display = "none";
        document.getElementById("Luckhnow").style.display = "none";
        document.getElementById("Indore").style.display = "none";
        document.getElementById("Pune").style.display = "block";
    }
}

function validateForm() {

    var finame = document.forms["form"]["fname"].value;
    var laname = document.forms["form"]["lname"].value;
    var emailAdd = document.forms["form"]["email"].value;
    var phoneNo = document.forms["form"]["pnumber"].value;
    if (finame == "") {
        alert("Plese enter the First Name");
        document.getElementById("fname").style.backgroundColor = "lightyellow";
    }
    if (laname == "") {
        alert("Plese enter the Last Name");
        document.getElementById("lname").style.backgroundColor = "lightyellow";
    }
    if (emailAdd == "") {
        alert("Plese enter the Email Address");
        document.getElementById("email").style.backgroundColor = "lightyellow";
    }
    if (phoneNo == " ") {
        alert("Plese enter the Phone number");
        document.getElementById("pnumber").style.backgroundColor = "lightyellow";
    }
}
function changeColourFname(){
    document.getElementById("fname").style.background = "yellow";
}
function changeColourLname(){
    document.getElementById("lname").style.background = "yellow";
}
function changeColourPhone(){
    document.getElementById("pnumber").style.background = "yellow";
}
function changeColourEmail(){
    document.getElementById("email").style.background = "yellow";
}
function blurBack(){
    document.getElementById("fname").style.background = "";
    document.getElementById("lname").style.background = "";
    document.getElementById("pnumber").style.background = "";
    document.getElementById("email").style.background = "";
    

}
function changefont(){
    const a= document.getElementById("fname");
    a.value =a.value.toUpperCase();
    const b= document.getElementById("lname");
    b.value =b.value.toUpperCase();
    const c= document.getElementById("pnumber");
    c.value =c.value.toUpperCase();
    const d= document.getElementById("email");
    d.value =d.value.toUpperCase();
}
function prompt(){
    var val;
  if (confirm("You want to Submit? ")) {
    val = "You pressed OK!";
  } else {
    txt = "You pressed Cancel!";
  }
  document.getElementById("submit").innerHTML = val;
}
var date = new Date(); 
var day= date.getDate();
var month= date.getMonth();
var year= date.getFullYear();
var hour=date.getHours();
var min=date.getMinutes();
document.getElementById("time").innerHTML = day+'-'+month+'-'+year+" "+" "+hour+":"+min+" ";
