var subject = ['monkeys', 'computer', 'puppy', 'coronavirus', 'internet','javascript', 'car', 'bunny']
var preposition =['about', 'between','besides','since','towards','inside','into','underneath']
var modifier =['several','quick','red','happy','wet', 'many','romantic','careful']
var object = ['trees', 'roots','garden', 'dogs', 'television', 'banana', 'strawberry', 'field' ]
var punctuation =['!', '.', '!!!', '...','?', '!!', '!?', '?!']

function generateWord (wordArray){
    var word = wordArray[Math.floor(Math.random() * wordArray.length)];
    document.getElementById("word").innerHTML = word;
    return word
}
 var sentence = generateWord(subject) + 'space' + generateWord(preposition) + 'space' + generateWord(modifier) + 'space' + generateWord(object) + 'space' + generateWord(punctuation);
 


(function() {
    generateWord();
}, 4000);
window.setInterval(function() {
    generateWord();
}, 4000);


