// Create web server 
// Create a web server that listens on port 3000 and serves the comments.html file.
// The comments.html file should have a form that allows users to submit comments.
// When the form is submitted, the comment should be saved to a file called comments.json.
// Each comment should be saved as a separate object in the JSON file.
// Each comment object should have the following properties:
// id: a unique identifier for the comment
// text: the text of the comment
// timestamp: the time the comment was submitted
// The id should be unique for each comment. You can use the uuid module to generate unique identifiers.
// The timestamp should be a string representing the current time. You can use the Date object to get the current time.
// When the comments.html file is loaded, it should display all the comments that have been submitted so far.
// You should read the comments from the comments.json file and display them in the HTML file.
// You can use the fs module to read and write JSON files.
// You can use the express module to create the web server.
// You can use the body-parser module to parse the form data.
// You can use the uuid module to generate unique identifiers.
// You can use the Date object to get the current time.
// You can use the fs module to read and write JSON files.
// You can use the express module to create the web server.
// You can use the body-parser module to parse the form data.
// You can use the uuid module to generate unique identifiers.
// You can use the Date object to get the current time.
// You can use the fs module to read and write JSON files.

const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const uuid = require('uuid');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

const COMMENTS_FILE = 'comments.json';

app.get('/', (req, res) => {
  fs.readFile(COMMENTS_FILE, (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send('An error occurred');
    }
    const comments = JSON.parse(data);
    res.send(`
      <html>
        <body>
          <h1>Comments</h1>
          <ul>
            ${comments.map(comment => `<li>${comment.text}</li>`).join('')}
          </ul>
          <form action="/comments" method="post">
            <textarea name="text"></textarea>
