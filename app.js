const vowels = /[aeiou]/i //using regex to define vowel set that ignores case

var str = "How are you doing today children?"

//var result = str.match(vowels)
//console.log(result)

var wrd = str.split(/\s*\b\s*/)
//wrd is the variable assigned the array of the words from the string
console.log(wrd)






angular
  .module("piglatinApp", [])
  .controller("piglatinsCtrl", [ piglatinController ] )

function piglatinController () {
  this.plainWords = str
  this.wrd = str.split(/\s*\b\s*/)
    console.log(wrd)

}
