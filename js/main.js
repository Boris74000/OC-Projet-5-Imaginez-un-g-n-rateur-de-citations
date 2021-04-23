class Quote {
    constructor(startQuote, middleQuote, endQuote) {
        this.startQuote= startQuote;
        this.middleQuote = middleQuote;
        this.endQuote = endQuote;
        // this.events()
        // this.randomQuote();
    }

    randomQuote(){
        console.log(this.startQuote[Math.floor(Math.random()*this.startQuote.length)]
            +' '+
            this.middleQuote[Math.floor(Math.random()*this.middleQuote.length)]
            +' '+
            this.endQuote[Math.floor(Math.random()*this.endQuote.length)]);
    }

    // events(){
    //     btn.addEventListener()
    // }
}

let startQuote = [
    "La critique peut être désagréable mais elle est nécessaire.",
    "On ne devrait jamais tourner le dos à un danger pour tenter de le fuir.",
    "Les chiens vous regardent tous avec vénération."
];

let middleQuote = [
    "Elle est comme la douleur pour le corps humain.",
    "Si vous le faites, vous le multiplierez par deux.",
    "Les chats vous toisent tous avec dédain."
];

let endQuote = [
    "Elle attire l'attention sur ce qui ne va pas.",
    "Mais si vous l'affrontez rapidement et sans vous dérober, vous le réduirez de moitié.",
    "Il n'y a que les cochons qui vous considèrent comme leurs égaux."
];

let churchillQuote = new Quote(startQuote, middleQuote, endQuote);
// console.log(churchillQuote.randomQuote());









