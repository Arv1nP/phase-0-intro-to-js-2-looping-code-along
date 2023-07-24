// for (let age = 30; age<=40; age+=2){
//     console.log(`I'm ${age} years old, happy birthday to me!`);
//     debugger;
// }

// const gifts = ['teddy bear','drone','doll' ]
// function giftWrap(gifts){
//     for (let i = 0; i<gifts.length; i++){
//         console.log(`Wrapped ${gifts[i]}, and added a bow!`);
//         debugger;
//     }
//     return gifts;
// }
// giftWrap(gifts)
const event = "birthday";
const names = ["charlie", "samip","ali"];
function writeCards(names,event){
    const thankYouMessage = []
    for (let i=0; i<names.length; i++){
        const message = `"Thank you ${names[i]}, for this wonderful ${event} gift!"`;
        thankYouMessage.push(message);
        debugger;
    }
    return thankYouMessage
}
console.log(writeCards(names, event));