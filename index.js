var fs = require('fs');
var readline = require('readline');

function getDictionary(callback){
  var rd = readline.createInterface({
      input: fs.createReadStream(__dirname+'/dictionary.txt'),
      output: process.stdout,
      terminal: false
  });

  words = []
  rd.on('line', function(line) {
      words.push(JSON.parse(line));
  });
  rd.on('close', function() {
    wordsObj = {}
    for(var i = 0; i < words.length; i++){
      wordsObj[words[i].name] = words[i]
    }
    callback(null, wordsObj)
  });
}

module.exports = getDictionary 

