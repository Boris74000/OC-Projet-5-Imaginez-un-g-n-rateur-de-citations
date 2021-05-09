class Generate {
    constructor(generateChurchill, generateEinstein) {
        this.generateChurchill = generateChurchill;
        this.generateEinstein = generateEinstein;
        this.events()
    }

    // Méthode pour récupérer la valeur de l'auteur
    getQuoteAuthor() {
        this.authorValue = document.getElementById("quoteAuthorSelect").value;

        if (this.authorValue === "empty") {
            alert("Vous n'auriez pas oublié de choisir un auteur par hasard ?! ;-)");
        } else {
            return this.authorValue;
        }
    }

    // Méthode pour récupérer le nombre de citations choisi
    getQuoteNumber() {
        this.quoteNumber = document.getElementById("quoteNumberSelect").value;
        if (this.quoteNumber === "empty") {
            alert("Vous n'auriez pas oublié de choisir un nombre de citation par hasard ?! ;-)");
        } else {
            return this.quoteNumber;
        }
    }

    //Méthode pour supprimer les citations affichées
    deleteQuote() {
        this.containerParaQuoteGenerate = document.getElementById("containerQuoteGenerate");
        this.containerParaQuoteGenerate.innerHTML = "";
    }

    // Méthode qui intègre tous les événements
    events() {
        document.getElementById("btnGenerate").addEventListener('click', () => {

            this.deleteQuote()
            this.getQuoteAuthor();
            this.getQuoteNumber();

            if (this.authorValue === "winstonC") {
                console.log(this.authorValue);
                churchillQuote.randomQuote(this.generateChurchill, this.quoteNumber);
            } else if (this.authorValue === "albertE") {
                einsteinQuote.randomQuote(this.generateEinstein, this.quoteNumber);
            }
        });

        document.getElementById("btnDelete").addEventListener('click', () => {
            this.deleteQuote();
        });

        // Modifie le style de l'image en fonction du choix de l'auteur
        let authorName = document.getElementById("quoteAuthorSelect");
        const einsteinImg = document.getElementById("einsteinImg");
        const churchillImg = document.getElementById("churchillImg");

        authorName.addEventListener('change', () => {

            switch (authorName.value) {
                case "empty":
                    einsteinImg.style.filter = "blur(10px)";
                    churchillImg.style.filter = "blur(10px)";
                    break;
                case "winstonC":
                    einsteinImg.style.filter = "blur(10px)";
                    churchillImg.style.filter = "blur(0)";
                    break;
                case "albertE":
                    einsteinImg.style.filter = "blur(0)";
                    churchillImg.style.filter = "blur(10px)";
                    break;
            }

        });
    }
}