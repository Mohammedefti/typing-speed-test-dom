// console.log('link');
document.addEventListener('DOMContentLoaded',()=>{
    // console.log('loaded')
    const quotes= [
        "A journey of a thousand miles begins with a single step.",
        "To be or not to be, that is the question.",
        "All that glitters is not gold",
        "The quick brown fox jumps over the lazy dog.",
        "The only thing we have to fear is fear itself.",
        "Practice makes a man Perfect."
    ];

    const quoteDisplay = document.getElementById('quote');
    const inputBox = document.getElementById('input-box');
    const startButton = document.getElementById('start-button');
    const resultDisplay = document.getElementById('result-div');

    let startTime;
    let currentQuote;
    
    startButton.addEventListener('click', startTest);
    inputBox.addEventListener('input', checkInput);
    function startTest(){
        // console.log('clicked')
       const randomIndex = Math.floor(Math.random()*quotes.length);
        currentQuote= quotes[randomIndex];
        quoteDisplay.innerText = currentQuote;
        inputBox.value='';
        inputBox.removeAttribute('disabled');
        inputBox.focus();
        resultDisplay.textContent = '';
         startTime  = new Date().getTime();
        //  console.log(startTime);
    }

    function checkInput(){
        // console.log('input');
      const typedText  =   inputBox.value;

    //  quote ar jodi input likha same hoi taile result show krobe.
      if (typedText === currentQuote) {
        const endTime = new Date().getTime();
       const timeTaken=  (endTime-startTime)/1000;
      const wordsPerMinute=  typedText.split(' ').length/timeTaken*60;
      inputBox.setAttribute('disabled');
      resultDisplay.textContent=`You typed at ${wordsPerMinute.toFixed(2)} words per minute.`

      }
    }
});


