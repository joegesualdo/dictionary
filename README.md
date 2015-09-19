## Dictionary
> My Dictionary

## Install
Create the dictionary.txt file by running this command from the project's root directory:

```
$ ./bin/create-dictionary-file
```
## Usage
```javascript
var getDictionary = require("index")

getDictionary(function(err, dictionary){
  console.log(dictionary.abate)
});
```

## Project Structure
### ./dictionary
> Contains text files that make up the dictionary. DO NOT MODIFY.

### ./examples
> Contains an example program

### ./bin
> Contains executables 

### ./words-list.txt
> A list of all english words that I've aggregated (...so far)

##API

### getDictionary(callback)
```javascript
var getDictionary = require("index")

getDictionary(function(err, dictionary){
  console.log(dictionary.abate)
});
```


