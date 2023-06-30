function bmiCalculator(weight, height)
{
    var bmi = weight / (height*height);
    console.log(Math.round(bmi));
}

var bmi = bmiCalculator(65, 1.8);