var nameofstudentarray = [];

function submit () {
var displaystudentarray = [];

for(var i = 1; i<=4; i++) {
var nameofstudent = document.getElementById ("name_of_the_student" + i).value;
console.log (nameofstudent);
nameofstudentarray.push (nameofstudent);
}

console.log (nameofstudentarray);

var lengthofstudent = nameofstudentarray.length;
console.log (lengthofstudent);

for (var x = 0; x<lengthofstudent; x++) {
displaystudentarray.push ("<h4> Name- "+nameofstudentarray[x]+"</h4>");

console.log (displaystudentarray);

}

console.log (displaystudentarray);
document.getElementById ("display_name_with_commas").innerHTML=displaystudentarray;

var nocomma = displaystudentarray.join(" ");
console.log (nocomma);
document.getElementById ("display_name_without_commas") = nocomma;

document.getElementById ("submit_button").style.display = "none";
document.getElementById ("sort_button").style.display = "inline-block";
}

function sort () {
nameofstudentarray.sort ();
console.log (nameofstudentarray);

var studentsort = [];
var lengthsort = nameofstudentarray.length;
console.log (lengthsort);

for (var x = 0; x<lengthsort; x++) {
    studentsort.push ("<h4> Name- "+nameofstudentarray[x]+"</h4>");
    
    console.log (studentsort);
    
    }

    var nocomma = studentsort.join(" ");
    console.log (nocomma);
    document.getElementById ("display_name_without_commas") = nocomma;
}
