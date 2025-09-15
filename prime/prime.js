var prime = prompt("Enter the input");


var num = parseInt(prime);
var count=0;
for(let i=1;i<=num;i++)
{
    if(num % i == 0)
    {
        count++;
    }
}
if(count == 2)
{
    console.log("it is prime number " + num);
}
else
{
    console.log("it is not prime number " + num);
}