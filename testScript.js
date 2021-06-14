let word = prompt('Enter word');
let test = word.slice(word.length - 6, word.length);
if ((word.length >= 6) && (test === 'script')){
        alert('ends with script');
    } else {
        alert('error');
    }