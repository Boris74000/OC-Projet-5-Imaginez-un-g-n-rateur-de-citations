class Quote {
    constructor(startQuote, middleQuote, endQuote) {
        this.startQuote= startQuote;
        this.middleQuote = middleQuote;
        this.endQuote = endQuote;
    }

    // Méthode qui génère une citation aléatoire
    randomQuote(generateAuthor, quoteNumber) {

        for (let i = 0; i < quoteNumber; i++) {
            this.quoteGenerate = generateAuthor.startQuote[Math.floor(Math.random()*generateAuthor.startQuote.length)]
                +' '+
                generateAuthor.middleQuote[Math.floor(Math.random()*generateAuthor.middleQuote.length)]
                +' '+
                generateAuthor.endQuote[Math.floor(Math.random()*generateAuthor.endQuote.length)];

            this.paraQuoteGenerate = document.createElement("p");

            this.paraQuoteGenerate.innerHTML = this.quoteGenerate;

            document.getElementById("containerQuoteGenerate").appendChild(this.paraQuoteGenerate);
        }

    }
}