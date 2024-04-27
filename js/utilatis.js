function hideElement(element){
    const hide = document.getElementById(element);
    hide.classList.add('hidden');
}
function showElement(element){
    const show = document.getElementById(element);
    show.classList.remove('hidden');
}
function getAlphabets(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabet = alphabetString.split('');
    // console.log(alphabet);
    const randomAlphabet = Math.random()*25;
    const index = Math.round(randomAlphabet);
    const alphabets = alphabetString[index];
    // console.log(index, alphabets);
    return alphabets;
}