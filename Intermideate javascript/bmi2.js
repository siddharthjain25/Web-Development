function bmiCalculator(weight, height)
{
    var bmi = weight / (height*height);
    var bmi = bmi.toFixed(1);
    if(bmi < 18.5)
    {
        console.log("Your BMI is " + bmi +", so you are underweight.")
    }
    else if(bmi >= 18.5 && bmi <= 24.9)
    {
        console.log("Your BMI is " + bmi +", so you have a normal weight.")
    }
    else if(bmi > 24.9)
    {
        console.log("Your BMI is " + bmi +", so you are overweight.")
    }
}

var bmi = bmiCalculator(65, 1.8);