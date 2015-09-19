var getDictionary = require(__dirname+"/../index")

getDictionary(function(err, dictionary){
  // wordsObj = {}
  // for(var i = 0; i < words.length; i++){
  //   wordsObj[words[i].name] = words[i]
  // }
  console.log(dictionary.unhappy)
})
