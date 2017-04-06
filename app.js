const vowels = /[aeiouy]/i //using regex to define vowel set that ignores case

var str = "How are you doing today children?"

var result = str.match(vowels)
console.log(result)

angular.module("piglatinApp", [])
