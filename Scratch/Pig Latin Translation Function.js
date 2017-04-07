const vowels = /[aeiou]/i //using regex to define vowel set that ignores case
const blends2 = /(bl|br|ch|cl|cr|dr|fl|fr|gl|gr|pl|pr|sc|sh|sk|sl|sm|sn|sp|st|sw|th|tr|tw|wh|wr)/i
const blends3 = /(sch|scr|shr|sph|spl)/i
const punctuation = /[~`!@#$%^&*(){}\[\];:"'<,.>?\/\\|_+=-]/g

var plainWords = "How are you doing today school children?"
var wordArray = plainWords.split(/\s*\b\s*/)

for (i = 0; i < wordArray.length; i++) {
  var lettersArray = wordArray[i].split("")
  var ltrs3 = (lettersArray[0] + lettersArray[1] + lettersArray[2])
  var ltrs2 = (lettersArray[0] + lettersArray[1])
    console.log(lettersArray)
  if ( ltrs3.match(blends3) ) {
  ( lettersArray.push(ltrs3 + "ay") && lettersArray.splice(0, 3) )
    console.log(lettersArray)
	} else {
    if (ltrs2.match(blends2) ) {
      ( lettersArray.push(ltrs2 + "ay") && lettersArray.splice(0,2) )
        console.log(lettersArray)
    } else {
      if ( lettersArray[0].match(vowels) ) {
        ( lettersArray.push("ay") )
          console.log(lettersArray)
      } else {
        if ( lettersArray[0].match(punctuation) ) {
          ( lettersArray )
            console.log(lettersArray);
        } else {
          ( lettersArray.push(lettersArray[0] + "ay") && lettersArray.splice(0, 1) )
            console.log(lettersArray)
        }
      }
    }
  }
}
