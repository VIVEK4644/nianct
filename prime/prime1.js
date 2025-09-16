var prime = prompt("Enter the input");


var num = parseInt(prime);

for (let j = 2; j <= num; j++) {
    var count = 0;

    for (let i = 1; i <= j; i++)
    {
        if (j % i == 0) {
            count++;
        }
    
    }
    if (count == 2) {
        console.log("it is prime number " + j);        
    }
}



