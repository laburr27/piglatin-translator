//using regex to define vowel set that ignores case
const vowels = /[aeiou]/i

//using regex to define 2-letter blends set that ignores case
const blends2 = /(bl|br|ch|cl|cr|dr|fl|fr|gl|gr|pl|pr|sc|sh|sk|sl|sm|sn|sp|st|sw|th|tr|tw|wh|wr)/i

//using regex to define 3-letter blends set that ignores case
const blends3 = /(sch|scr|shr|sph|spl)/i

//using regex to define 3 letter blends set that ignores case
const punctuation = /[~`!@#$%^&*(){}\[\];:"'<,.>?\/\\|_+=-]/g

angular
  .module("piglatinApp", [])
  .controller("piglatinsCtrl", [ piglatinController ] )

function piglatinController () {
  this.plainWords = "Welcome to the wonderful world of Pig Latin."
  this.wordArray = []
  this.piglatWords = ''

  this.translate = function() {
    this.wordArray = this.plainWords.split(/\s*\b\s*/)
    for (i = 0; i < this.wordArray.length; i++) {
      var lettersArray = this.wordArray[i].split("")
      var ltrs3 = (lettersArray[0] + lettersArray[1] + lettersArray[2])
      var ltrs2 = (lettersArray[0] + lettersArray[1])

      if ( ltrs3.match(blends3) ) {
      ( lettersArray.push(ltrs3 + "ay") && lettersArray.splice(0, 3) )
  //      console.log(lettersArray)
        var newWord = lettersArray.join("")
        this.wordArray.splice(i,1,newWord)
  //                console.log(newWord)
      } else {

        if (ltrs2.match(blends2) ) {
          ( lettersArray.push(ltrs2 + "ay") && lettersArray.splice(0,2) )
  //          console.log(lettersArray)
            var newWord = lettersArray.join("")
            this.wordArray.splice(i,1,newWord)
  //                console.log(newWord)
        } else {

          if ( lettersArray[0].match(vowels) ) {
            ( lettersArray.push("ay") )
  //            console.log(lettersArray)
              var newWord = lettersArray.join("")
              this.wordArray.splice(i,1,newWord)
  //                console.log(newWord)
          } else {

            if ( lettersArray[0].match(punctuation) ) {
              ( lettersArray )
  //              console.log(lettersArray)
            } else {

                (lettersArray.push(lettersArray[0] + "ay") && lettersArray.splice(0, 1))
  //              console.log(lettersArray)
                var newWord = lettersArray.join("")
                this.wordArray.splice(i,1,newWord)
  //                console.log(newWord)
            }
          }
        }
      }
    }
    this.piglatWords = this.wordArray.join(" ")
    console.log(this.piglatWords)
  }
//    console.log(wordArray)

}
