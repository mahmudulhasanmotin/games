function start(){
    const homePage = document.getElementById('home-screen')
    homePage.style.display='none'

    const playPage = document.getElementById('play-ground')
    playPage.style.display='block'
}

function continueGame(){
    const alphabet = getRandomAlphabet();

    const currentAlphabetElement = document.getElementById('current-alphabet')
    currentAlphabetElement.innerText = alphabet;

    setBackgroundColorById(alphabet);
}

function play(){
    hideElementById ('home-screen');
    hideElementById ('final-score');
    showElementById ('play-ground');

    setTextElementValueById('current-life',5)
    setTextElementValueById('current-score',0)

    continueGame();
    const hideScreen = document.getElementById('final-score');
    hideScreen.style.display = 'none';
}

function handleKeyboardButtonPress(event){
    const playerPressed = event.key;

    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const exceptedAlphabet = currentAlphabet.toLowerCase();

    if(playerPressed === exceptedAlphabet ){
        const currentScoreElement = document.getElementById('current-score');
        const currentScoreText = currentScoreElement.innerText;
        const currentScore = parseInt(currentScoreText);

        const newScore = currentScore+1;
        currentScoreElement.innerText = newScore;

        removeBackgroundColorById(exceptedAlphabet);
        continueGame();
    }
    else{
        const currentLifeElement = document.getElementById('current-life');
        const currentLifeText = currentLifeElement.innerText;
        const currentLife = parseInt(currentLifeText);

        const newLife = currentLife - 1;

        currentLifeElement.innerText= newLife;
        if( newLife === 0){
            gameOver()
            finalScorePage()

        }

    }

}
document.addEventListener('keyup',handleKeyboardButtonPress);



function gameOver(){
    hideElementById ('play-ground');
    showElementById ('final-score');

    const lastScore = getTextElementValueById('current-score')
    setTextElementValueById('last-score',lastScore);

    const currentAlphabet =getElementTextById('current-alphabet')
    removeBackgroundColorById(currentAlphabet);
}
function finalScorePage(){
    const finalScorePageShow = document.getElementById('final-score')
    finalScorePageShow.style.display='block';
}
