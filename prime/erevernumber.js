var num = prompt("Enter the number :- ");
var n = parseInt(num);
rev = 1;
rem = 0

for(i=1;i<=n;i++)
{
    console.log(rem );
    
    rem=n%10;
    rev = rev*10 + rem;
    n = n/10;
}
console.log(rev);
