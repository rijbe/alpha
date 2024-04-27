// function playGames(){
//     const ground = document.getElementById('play-hide');
//     ground.classList.add('hidden');

//     const show = document.getElementById('play-ground');
//     show.classList.remove('hidden');
// }
function coninueGames(){
    const alphabet = getAlphabets();
    console.log('get to alphabet:', alphabet);
    const currentAlphabet = document.getElementById('cuttent');
    currentAlphabet.innerText = alphabet;
}

function playGames(){
    hideElement('play-hide');
    showElement('play-ground');
    coninueGames();
}