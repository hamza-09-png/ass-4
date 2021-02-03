function sum(num1,num2)
{ return num1+num2}
function sub(num1,num2)
{ return num1-num2}
function mult(num1,num2)
{ return num1*num2}
function divide(num1,num2)
{ return num1/num2}

var choice = prompt("1=add\n2=sub\n3=mult\n4=div");
var num1=prompt("Enter first number");
var num2=prompt("Enter second number");
if(choice==1)
{alert(sum(num1,num2))}
else if(choice==2)
{alert(sub(num1,num2))}
else if(choice==3)
{alert(mult(num1,num2))}
else if(choice==4)
{alert(divide(num1,num2))}
