for(var x=1; x<=3; x++ )

// var x=1 is starting, x<=0 is condition for loop will work until this condition is true, x++ is update
{
    document.write("<h1> Bangladesh </h1>")
}

for(var x=1; x<=10; x++)
{
    document.write(" "+ x );
}

document.write("<br>");

// 1,3,5,7,-----99

for(var x=1; x<=99; x= x+2)
{
    document.write(" "+ x);
}

document.write("<br>");

// 10,9,8,7,6,5,4,3,2,1

for(var x=10; x>=1; x= x-1)
{
    document.write(" "+ x);
}

document.write("<br>");
document.write("<br>");
// 1+2+3....10= ?  use for loop.

document.write("<h3> 1+2+3....10= ?  use for loop.</h3>");

sum = 0;
for(var x=1; x<=10; x++)
{
    sum = sum + x;
    
}
document.write("answer is = " + sum);

document.write("<br>");
document.write("<br>");


var m = parseInt(prompt("Enter the starting number"));
var n = parseInt(prompt("Enter the last number"));

for(var x=m; x<=n; x++)
{
    sum= sum +x;
}

document.write("answer is = " + sum);