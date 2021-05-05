class Generate {
    constructor(generateChurchill, generateEinstein) {
        this.generateChurchill = generateChurchill;
        this.generateEinstein = generateEinstein;
        this.events()
    }

    getQuoteAuthor() {
        this.authorValue = document.getElementById("quoteAuthorSelect").value;

        if (this.authorValue === "empty") {
            alert("Vous n'auriez pas oublié de choisir un auteur par hasard ?! ;-)");
        } else {
            return this.authorValue;
        }
    }


    getQuoteNumber() {
        this.quoteNumber = document.getElementById("quoteNumberSelect").value;
        if (this.quoteNumber === "empty") {
            alert("Vous n'auriez pas oublié de choisir un nombre de citation par hasard ?! ;-)");
        } else {
            return this.quoteNumber;
        }
    }

    randomQuote() {
        this.deleteQuote();
        this.getQuoteAuthor();
        this.getQuoteNumber();
        // console.log(this.getQuoteAuthor());

        if (this.authorValue === "winstonC") {
            for (let i = 0; i < this.quoteNumber; i++) {
                this.quoteGenerate = this.generateChurchill.startQuote[Math.floor(Math.random()*this.generateChurchill.startQuote.length)]
                    +' '+
                    this.generateChurchill.middleQuote[Math.floor(Math.random()*this.generateChurchill.middleQuote.length)]
                    +' '+
                    this.generateChurchill.endQuote[Math.floor(Math.random()*this.generateChurchill.endQuote.length)];

                this.paraQuoteGenerate = document.createElement("p");

                this.paraQuoteGenerate.innerHTML = this.quoteGenerate;

                document.getElementById("containerQuoteGenerate").appendChild(this.paraQuoteGenerate);
            }
        } else if (this.authorValue === "albertE") {
            for (let i = 0; i < this.quoteNumber; i++) {
                this.quoteGenerate = this.generateEinstein.startQuote[Math.floor(Math.random()*this.generateEinstein.startQuote.length)]
                    +' '+
                    this.generateEinstein.middleQuote[Math.floor(Math.random()*this.generateEinstein.middleQuote.length)]
                    +' '+
                    this.generateEinstein.endQuote[Math.floor(Math.random()*this.generateEinstein.endQuote.length)];

                this.paraQuoteGenerate = document.createElement("p");

                this.paraQuoteGenerate.innerHTML = this.quoteGenerate;

                document.getElementById("containerQuoteGenerate").appendChild(this.paraQuoteGenerate);
            }
        }
    }

    deleteQuote() {
        this.containerParaQuoteGenerate = document.getElementById("containerQuoteGenerate");
        this.containerParaQuoteGenerate.innerHTML = "";
    }


    events() {
        // console.log(this.generateEinstein.startQuote);
        // console.log(this.generateChurchill);

        document.getElementById("btnGenerate").addEventListener('click', () => {
            this.randomQuote();
        });
        document.getElementById("btnDelete").addEventListener('click', () => {
            this.deleteQuote();
        });
    }
}