// Code your solutions in this file
function writeCards(names) {
  const cards = [];
        for (let i = 0; i < names.length; i++) {
             cards.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
        }
        return cards;
         }
function countDown () {
    let countDown = 10;
    while (countDown > -1) {
      console.log(countDown--);
    } 
}