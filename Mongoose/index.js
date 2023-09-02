const mongoose = require('mongoose');
const { constrainedMemory } = require('process');
mongoose.connect("mongodb://127.0.0.1:27017/FruitsDB");

const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Check your data entry there is not name specified."]
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    stock: Number
});

const Fruit = mongoose.model("Fruit", fruitSchema);
const fruit = new Fruit({
    rating: 9,
    stock: 52
});

//fruit.save();

const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favfruite: fruitSchema
});

const Pineapple = new Fruit({
    name: "Pineapple",
    rating: 9,
    stock: 41
});

//Pineapple.save();

const Berry = new Fruit({
    name: "Berry",
    rating: 8,
    stock: 56
});

//Berry.save();

const Person = mongoose.model("Person", personSchema);
const person = new Person({
    name: "Amy",
    age: 16,
    favfruite: Pineapple
});

//person.save();

const banana = new Fruit({
    name: "Banana",
    rating: 7,
    stock: 63
});

const WaterMelon = new Fruit({
    name: "Water Melon",
    rating: 10,
    stock: 5
});

const Kiwi = new Fruit({
    name: "Kiwi",
    rating: 7,
    stock: 120
});

const Grapes = new Fruit({
    name: "Grape",
    rating: 9,
    stock: 110
});

/*
Fruit.insertMany([banana, WaterMelon, Kiwi, Grapes]).then(function () {
    console.log("Successfully saved defult items to DB");
}).catch(function (err) {
    console.log(err);
  });
*/

/*
Fruit.find({}).then((fruits)=>{
    console.log(fruits);
}).catch((err)=>{
    console.log(err);
});
*/

/*
Fruit.find({}).then((fruits)=>{
    //console.log(fruits);
    mongoose.connection.close();
    fruits.forEach(function(fruit){
        console.log(fruit.name);
    });
}).catch((err)=>{
    console.log(err);
});
*/

/*
Person.updateOne({_id: "64f32ad82da3c83fe5f2c012"}, {favfruite: Berry}).then(function(){
    console.log("Data Updated");
}).catch(function(err){
    console.log(err);
});
*/

/*
Fruit.deleteOne({_id: "64f3245893d34095cea9b797"}).then(function(){
    console.log("Data deleted successfully");
}).catch(function(err){
    console.log(err);
});
*/

/*
Person.deleteMany({name: "John"}).then(function(){
    console.log("Data deleted successfully");
}).catch(function(err){
    console.log(err);
});
*/