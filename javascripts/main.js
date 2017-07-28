console.log("main.js");

let rOut = document.getElementById("reverseOutput");
let aOut = document.getElementById("AlphaOutput");
let pOut = document.getElementById("PalinOutput");
let subBtn = document.getElementById("submitBtn");
let AlphaOrd;
let reverseWord;
var testString = "";

    function reversal(testString){
        reverseWord = testString.split("").reverse().join("");
        rOut.innerHTML = reverseWord;
    };

    function alphabits(testString){
        alphaOrd = testString.split("").sort().join("");
        aOut.innerHTML = alphaOrd;
    };

    function palindrome(testString){
        if (reverseWord === testString){
            pOut.innerHTML = `Your string is a Palindrome`;
        } else
            pOut.innerHTML = `Your string is not a Palindrome`;
    };


function getInfo(){
    testString = document.getElementById("textInput").value;
    reversal(testString);
    alphabits(testString);
    palindrome(testString);
};

subBtn.addEventListener("click", function(){
     var regexp1 = new RegExp(/[0-9]/);
     var textString = document.getElementById("textInput").value;
     console.log("textString",textString)
     if (regexp1.test(textString)){
        alert("You must enter letters only. No numbers.");
    } else {
         getInfo();
    };

});

document.addEventListener("keyup", function(event){
  if (event.which === 13){
         var regexp1 = new RegExp(/[0-9]/);
         var textString = document.getElementById("textInput").value;
         console.log("textString",textString)
     if (regexp1.test(textString)){
        alert("You must enter letters only. No numbers.");
    } else {
         getInfo();
    };
  }
});