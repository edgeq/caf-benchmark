const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require("./routes/apiRoutes");

app.use(express.static("client/build"));



app.use(bodyParser.urlencoded({ extended: true}));



app.use(bodyParser.json({ type: 'application/**json' }));
app.use(bodyParser.raw({ type: 'application/vnd.custom-type'}))
app.use(bodyParser.text({ type: 'text/html' }));


// app.use("/api", apiRoutes);
apiRoutes(app);

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);

});
