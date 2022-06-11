let citas = ['"It is only when they go wrong that machines remind you how powerful they are." \n - Clive James.', 
            '“If only technology could invent some way to get in touch with you during an emergency.” \n - President Bartlett.',
            '"Every aspect of human technology has a dark side, including the bow and arrow." \n - Margaret Atwood.',
            '"One machine can do the work of fifty ordinary men. No machine can do the work of one extraordinary man." \n - Elbert Hubbard.',
            '“Technology is a useful servant but a dangerous master.” \n - Christian Lous Lange.',
            '“The best way to predict the future is to invent it.” \n  - Alan Kay.',
            '“Let’s go invent tomorrow instead of worrying about what happened yesterday.” \n – Steve Jobs.',
            '“The real problem is not whether machines think but whether men do.” \n – B.F. Skinner.',
            '"The development of full artificial intelligence could spell the end of the human race….It would take off on its own, and re-design itself at an ever increasing rate. Humans, who are limited by slow biological evolution, could not compete, and would be superseded." – Stephen Hawkins.',
            '"I visualise a time when we will be to robots what dogs are to humans, and I’m rooting for the machines" - Claude Shannon.',
            '"Programming is not about what you know; it is about what you can figure out.” - Chris Pine.',
            '"The only way to learn a new programming language is by writing programs in it." - Dennis Ritchie.',
            '"Sometimes it is better to leave something alone, to pause, and that is very true of programming." - Joyce Wheeler.',
            '"Testing leads to failure, and failure leads to understanding." - Burt Rutan.',
            '"The best error message is the one that never shows up." - Thomas Fuchs.',
            '“The most damaging phrase in the language is: it has always been done this way” - Grace Hopper.',
            '"Do not write better error messages, write code that does not need them." - Jason C. McDonald.'
            ];




const random = function(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
};

const button = document.getElementById('button');
const quote = document.getElementById('quote');

button.addEventListener("click", function citar(){
    const operacion = citas[random(0,15)];
    quote.textContent = operacion;
});

const hidden = document.getElementById('hidden');

setTimeout(() => hidden.style.display = 'block', 4000);