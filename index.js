function writeCards(names, eventName) {
    const thankYouMessages = [];
  
    for (let i = 0; i < names.length; i++) {
      thankYouMessages.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
    }
  
    return thankYouMessages;
  }
  
  function countDown(num) {
    while (num >= 0) {
      console.log(num);
      num--;
    }
  }
  
  module.exports = {
    writeCards,
    countDown
  };
  