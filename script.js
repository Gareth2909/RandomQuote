const QUOTE = [
    "The purpose of a storyteller is not to tell you how to think, but to give you questions to think upon.",
    "Life before Death. Strength before Weakness. Journey before Destination.",
    "Sometimes the prize is not worth the costs. The means by which we achieve victory are as important as the victory itself.",
    "To lack feeling is to be dead, but to act on every feeling is to be a child.",
    "Expectations were like fine pottery. The harder you held them, the more likely they were to crack.",
    "Somebody has to start. Somebody has to step forward and do what is right, because it is right.",
    "In the end, all men die. How you lived will be far more important to the Almighty than what you accomplished.",
    "Ah, the outdoors,' Shallan said. 'I visited that mythical place once.",
    "Strength does not make one capable of rule; it makes one capable of service.",
    "We follow the codes not because they bring gain, but because we loathe the people we would otherwise become.",
    "This world, it is a tempest sometimes. But remember, the sun always rises again."
];

let button = document.getElementById("generate");

button.onclick = function generate(){
    let changeQuote = document.getElementById("quote");
    let nr = Math.floor(Math.random()* QUOTE.length);
    changeQuote.innerHTML = QUOTE[nr];
}