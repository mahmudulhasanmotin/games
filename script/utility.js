function getRandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    // console.log(alphabets);

    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);
    // console.log(index);

    const alphabet = alphabets[index];
    // console.log(index,alphabet)
    return alphabet;
}


function setBackgroundColorById (elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-500')
}
function removeBackgroundColorById (elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-500')
}