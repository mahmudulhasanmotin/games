function start(){
    const homePage = document.getElementById('home-screen')
    homePage.style.display='none'

    const playPage = document.getElementById('play-ground')
    playPage.style.display='block'
}

function continueGame(){
    const alphabet = getRandomAlphabet();
    console.log('your alphabet',alphabet);

    const currentAlphabetElement = document.getElementById('current-alphabet')
    currentAlphabetElement.innerText = alphabet;

    setBackgroundColorById(alphabet);
    // removeBackgroundColorById(alphabet);
}


function play(){
    start()
    continueGame()
}