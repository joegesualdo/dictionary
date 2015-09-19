var fs = require('fs');
var readline = require('readline');

function getWordJSONS(callback){
  var rd = readline.createInterface({
      input: fs.createReadStream('./dictionary.txt'),
      output: process.stdout,
      terminal: false
  });

  words = []
  rd.on('line', function(line) {
      words.push(JSON.parse(line));
  });
  rd.on('close', function() {
    callback(null, words)
  });
}

getWordJSONS(function(err, words){
  wordsObj = {}
  for(var i = 0; i < words.length; i++){
    wordsObj[words[i].name] = words[i]
  }
  console.log(wordsObj.hello)
})
