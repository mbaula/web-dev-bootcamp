const request = require('request');
const bodyParser = require('body-parser');
const express = require('express');

const app = express();

require('dotenv').config()

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/signup.html')
})

app.post('/', function (req, res) {

  var firstName = req.body.fname;
  var lastName = req.body.lname;
  var email = req.body.email;

  var data = {
    members: [
      {email_address: email,
       status: 'subscribed',
       merge_fields: {
         FNAME: firstName,
         LNAME: lastName
       }
      }
    ]
  };

  var jsonData = JSON.stringify(data);

  var options = {
    url: 'https://us2.api.mailchimp.com/3.0/lists/' + process.env.LIST_ID + '?skip_merge_validation=<SOME_BOOLEAN_VALUE>&skip_duplicate_check=<SOME_BOOLEAN_VALUE>',
    method: "POST",
    headers: {
      "Authorization": "markb " + process.env.API_KEY
    },
    body: jsonData
  }

  request(options, function(error,response,body){
    if(error){
      res.send("ERROR! Please try signing up again.")
    } else {
      if (response.statusCode == 200) {
        res.sendFile(__dirname + "/success.html");
      } else {
        res.sendFile(__dirname + "/failure.html");
      }
    }
  });

});

app.post('/failure', function(req,res) {
  res.redirect("/");
});

app.listen(process.env.PORT || 3000, function(){
  console.log("Server is running on Port 3000");
});
