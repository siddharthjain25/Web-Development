function lunch(list)
{
    var names = list[Math.floor(Math.random()*list.length)];
    console.log(names + " is paying for lunch today.");
}
var list = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
lunch(list);