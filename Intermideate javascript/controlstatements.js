var output = [];
var count = 1;

function fizzbuzz()
{
    while(count <= 100)
    {
        console.log(count);
        if(count % 3 === 0 && count % 5 === 0)
        {
            console.log("fizzbuzz");
        }
        else if(count % 3 === 0)
        {
            console.log("fizz");
        }
        else if(count % 5 === 0)
        {
            console.log("buzz");
        }
        count++;
    }
}

fizzbuzz();