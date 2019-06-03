var userSentence = prompt("Enter a sentence to cipher");

var firstLast = function(userSentence){
  var firstLetter = userSentence.charAt(0);
  var lastLetter = userSentence.charAt(userSentence.length-1);
  var firstLetter2 = firstLetter.toUpperCase();
  var lastLetter2 = lastLetter.toUpperCase();

  return(firstLetter2+lastLetter2);
};

alert(firstLast);

/*alert(firstLetter2+lastLetter2);

var firstLast = function(example) {
  var firstLetter = example.charAt(0);
  var lastLetter = example.charAt(userSentence.length-1);
  var firstLetter2 = firstLetter.toUpperCase();
  var lastLetter2 = lastLetter.toUpperCase();

  return firstLetter2+lastLetter2;

}

firstLast(userSentence));


function reverseString()
{
  return firstLast(userSentence).split("").reverse().join("");
}

alert(reverseString());*/
