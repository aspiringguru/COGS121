// start with ../petsapp-v1/server.js and work toward building ../petsapp-v2/server.js
const express = require('express');
const app = express();

//connect to database, replace fakeDatabase previously used.
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('pets.db');

app.use(express.static('static_files'));



// GET a list of all usernames
//
// To test, open this URL in your browser:
//   http://localhost:3000/users
app.get('/users', (req, res) => {
  db.all('SELECT NAME FROM users_to_pets', (err, rows) => {
      console.log("rows\n", rows)
      const allUsernames = rows.map(e => e.name);
      console.log('allUsernames:\n', allUsernames);
      res.send(allUsernames);
  })
});


// GET profile data for a user
//
// To test, open these URLs in your browser:
//   http://localhost:3000/users/Philip
//   http://localhost:3000/users/Carol
//   http://localhost:3000/users/invalidusername
app.get('/users/:userid', (req, res) => {
  const nameToLookup = req.params.userid; // matches ':userid' above
  console.log("/users/:userid called > nameToLookup:", nameToLookup);
  db.all(
      //SQL query
      "SELECT * FROM users_to_pets WHERE name=$name",
      //parameters to pass into SQL query
      {
          $name:nameToLookup,

      },
      //callback function to run when the query completes
      (err, rows) => {
          console.log("rows:\n", rows)
          if (rows.length>0){
              console.log("result obtained for ", nameToLookup)
              res.send(rows[0]);
              //nb: assuming only first row returned is valid.
          }else {
              console.log("no result for ", nameToLookup)
              res.send({});
              // failed, so return an empty object instead of undefined
          }
      }
  )
});

// start the server at URL: http://localhost:3000/
app.listen(3000, () => {
  console.log('Server started at http://localhost:3000/');
});
