const vowels = /[aeiouy]/i //using regex to define vowel set that ignores case
const blends = /(bl|br|ch|cl|cr|dr|fl|fr|gl|gr|pl|pr|sc|sh|sk|sl|sm|sn|sp|st|sw|th|tr|tw|wh|wr|sch|scr|shr|sph|spl)/i
var str = "How are you doing today children?";

var result = str.match(blends)
console.log(result)

//splits the string into an array of words and punctuation; regex identifies word breaks and removes whitespaces
var wrd = str.split(/\s*\b\s*/);

//logs array
console.log(wrd)

//logs 1st word in array (index 0)
console.log(wrd[5])

//splits the string (the 1st word in the array) into an array of letters
var ltr = wrd[5].split("")

//logs the array of letters
console.log(ltr)

//tests if first letter (index 0) is a vowel
if ( ltr[0].match(vowels) ) {

//if first letter (index 0) is a vowel then "ay" is added to end of the array
	ltr.push("ay")

//if first letter (index 0) is not a vowel then the first letter + "ay" is moved to the end of the array, then the first letter is deleted
} else {
	( ltr.push(ltr[0] + "ay") && ltr.splice(0, 1) )
}

//logs the new array
console.log(ltr)

//converts word array into string (new word)
var newWrd = ltr.join("")

//logs the new word (in Pig Latin)
console.log(newWrd)


/* Get content of textarea and send to array
var area = document.getElementById("area");
var lines = area.value.replace(/\r\n/g,"\n").split("\n");
*/
