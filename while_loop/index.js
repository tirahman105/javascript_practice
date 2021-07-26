// /task : write a programe that will print sum of all the numbers taht are devided by 3 and 5. 

var i = 1;
var sum = 0; 
document.write("task : write a programe that will print sum of all the numbers that are devided by 3 and 5. <br> ")




while(i <=100){
    if (i % 3 == 0 && i % 5 == 0){
        document.write(".............."+ i + "<br>" );
        sum = sum + i; 

  
    }
    i= i+1
}
document.write("<hr>" + "Total = " + sum);

