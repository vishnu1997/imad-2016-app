var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleOne = {
    title: 'Maggi ONe',
    content: `<body>
           <div class = "c1">
            <div>
                <a href="/">Home</a>
               </div>
            <hr/>
            <div>
                <h1>I forgot to read</h1>
                </div>
            <div>
                Oh god Plz help me.
            </div>
           </div>    
       </body>`
    
};

function call(obj){
title = obj.title;
content = obj.content;
var htmltemplate = `<html>
 <head>
      <meta name="viewport" content = "width=deviceiwidth,initial-scale=1"/>
       <link href="/ui/style.css" rel="stylesheet" />
       <title>${title}</title>    
       ${content}
 
</html>
`;
return htmltemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '', 'contacts.html'));
});

app.get('/article-one',function (req,res){
    res.send(call(articleOne));
});
app.get('/article-two',function (req,res){
    res.send("Article two will be sent ");
});
app.get('/article-three',function (req,res){
    res.send("Article three will be sent ");
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
