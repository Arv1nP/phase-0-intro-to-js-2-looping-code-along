const event = "surprise";
const names = ["Guadalupe", "Ollie","Aki"];
function writeCards(names,event){
    const thankYouMessage = []
    for (let i=0; i<names.length; i++){
        const message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
        thankYouMessage.push(message);
        debugger;
    }
    return thankYouMessage
}
console.log(writeCards(names, event));


function countDown(number) {
    while (number >= 0) {
      console.log(number);
      number--;
    }
  }