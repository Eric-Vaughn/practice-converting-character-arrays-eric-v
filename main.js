/** Instructions
 * You are working as a software engineer for a secret agency that needs a way to
 * encrypt and decrypt messages. The agency communicates using character
 * arrays instead of plain text to ensure the messages are secure.
 */
// TASKS
// TASK 1: Decode the Following Reversed Messages
let message1 = "!yako eb ll'uoy dna ,gniog peeK !sgnittes fo yteirav a ni slliks gnidoc esu osla nac uoY !ti teg ll'uoy ,tsisrep uoy fi tub ,tsrif ta drah mees yam gnidoC";
let message2 = "!ecitcarp htiw retteb teg ll‘uoy ,emit ekaT .tsrif ta drah leef lliw gnitirw edoc tuB";
let message3 = "!elpoep rehto morf tnereffid on era uoy ,elbuort evah uoy fI .lanoisseforp a ekil leef ot evah t'nod uoY";
let message4 =  ".rettam llits yeht ,smargorp llams etirw ylno nac uoy fI .tnemom tcefrep eht rof tiaw t'noD .yadot trats tsuJ";

let decodedMessage1 = message1.split("").reverse().join("");
let decodedMessage2 = message2.split("").reverse().join("");
let decodedMessage3 = message3.split("").reverse().join("");
let decodedMessage4 = message4.split("").reverse().join("");

console.log("Decoded message 1:\n", decodedMessage1, "\n");
console.log("Decoded message 2:\n", decodedMessage2, "\n");
console.log("Decoded message 3:\n", decodedMessage3, "\n");
console.log("Decoded message 4:\n", decodedMessage4, "\n");

// TASK 2: Write your own reverse messages
let myMessage1 = "If it's hard, then it's worth doing. You got this!";
let myMessage2 = "Live, laugh, and love to code!";
let myMessage3 = "Nothing better than a hot cup of joe... or a Redbull. Whatever you're into.";
let myMessage4 = "Substance abuse is no joke! Say 'NO' to drugs!";

let myEncodedMessage1 = myMessage1.split("").reverse().join("");
let myEncodedMessage2 = myMessage2.split("").reverse().join("");
let myEncodedMessage3 = myMessage3.split("").reverse().join("");
let myEncodedMessage4 = myMessage4.split("").reverse().join("");

console.log("My encoded message 1:\n", myEncodedMessage1, "\n");
console.log("My encoded message 2:\n", myEncodedMessage2, "\n");
console.log("My encoded message 3:\n", myEncodedMessage3, "\n");
console.log("My encoded message 4:\n", myEncodedMessage4, "\n");