const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req,res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req,res) {

  var gender = req.body.gender;
  var weight = Number(req.body.weight);
  var height = Number(req.body.height);
  var age = Number(req.body.age);

  if(gender=="M") {
    res.send("<h1>Your BMR is " + maleCalc(weight,height,age) + " kCal/day</h1>")
  }
  else if (gender=="F") {
    res.send("<h1>Your BMR is " + femaleCalc(weight,height,age) + " kCal/day</h1>")
  }
  else{
    res.send("Sorry your input for the gender is wrong! Please put M or F");
  }
});

app.listen(3000, function() {
  console.log("server is running on port 3000");
});

function maleCalc(weight,height,age){
  var bmr = Math.round(88.362 + (13.397*weight) + (4.799*height) - (5.677*age));
  return bmr;
}

function femaleCalc(weight,height,age) {
  var bmr = Math.round(447.593 + (9.247*weight) + (3.098*height) - (4.33*age));
  return bmr;
}
