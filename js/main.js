class Quote {
    constructor(startQuote, middleQuote, endQuote) {
        this.startQuote= startQuote;
        this.middleQuote = middleQuote;
        this.endQuote = endQuote;
        this.events()
    }

    getQuoteAuthor() {
        this.authorValue = document.getElementById("quoteAuthorSelect").value;
        if (this.authorValue === "empty") {
            alert("Vous n'auriez pas oublié de choisir un auteur par hasard ?! ;-)");
        } else if (this.authorValue === "winstonC") {
            churchillQuote.randomQuote();
        } else if (this.authorValue === "albertE") {
            einsteinQuote.randomQuote();
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
        for (let i = 0; i < this.getQuoteNumber(); i++) {
            this.quoteGenerate = this.startQuote[Math.floor(Math.random()*this.startQuote.length)]
                +' '+
                this.middleQuote[Math.floor(Math.random()*this.middleQuote.length)]
                +' '+
                this.endQuote[Math.floor(Math.random()*this.endQuote.length)];

            this.paraQuoteGenerate = document.createElement("p");

            this.paraQuoteGenerate.innerHTML = this.quoteGenerate;

            document.getElementById("containerQuoteGenerate").appendChild(this.paraQuoteGenerate);
        }
    }

    deleteQuote() {
        this.containerParaQuoteGenerate = document.getElementById("containerQuoteGenerate");
        this.containerParaQuoteGenerate.innerHTML = "";
    }


    events() {
        document.getElementById("btnGenerate").addEventListener('click', () => {
            this.getQuoteAuthor();
        });
        document.getElementById("btnDelete").addEventListener('click', () => {
            this.deleteQuote();
        });
    }
}

//========== Quote Array Churchill ==============
//===============================================
let startQuoteChurchill = [
    "La critique peut être désagréable mais elle est nécessaire.",
    "On ne devrait jamais tourner le dos à un danger pour tenter de le fuir.",
    "Les chiens vous regardent tous avec vénération."
];

let middleQuoteChurchill = [
    "Elle est comme la douleur pour le corps humain.",
    "Si vous le faites, vous le multiplierez par deux.",
    "Les chats vous toisent tous avec dédain."
];

let endQuoteChurchill = [
    "Elle attire l'attention sur ce qui ne va pas.",
    "Mais si vous l'affrontez rapidement et sans vous dérober, vous le réduirez de moitié.",
    "Il n'y a que les cochons qui vous considèrent comme leurs égaux."
];

//========== Quote Array Einstein ==============
//===============================================
let startQuoteEinstein = [
    "La théorie, c'est quand on sait tout et que rien ne fonctionne.",
    "Tout est déterminé par des forces sur lesquelles nous n'exerçons aucun contrôle.",
    "Un être humain est une partie limitée dans le temps et l'espace, il fait l'expérience de ses pensées et de ses sentiments comme quelque chose séparé du reste, une sorte d'illusion d'optique de la conscience."
];

let middleQuoteEinstein = [
    "La pratique, c'est quand tout fonctionne et que personne ne sait pourquoi.",
    "Ceci vaut pour l'insecte autant que pour l'étoile.",
    "Cette illusion est pour lui une prison qui le limite à ses désirs personnels et à l'affection pour les quelques personnes de son entourage."
];

let endQuoteEinstein = [
    "Ici, nous avons réuni théorie et pratique : Rien ne fonctionne... et personne ne sait pourquoi !",
    "Les êtres humains, les légumes, la poussière cosmique - nous dansons tous au son d'une musique mystérieuse, jouée à distance par un flûtiste invisible.",
    "Sa tâche est de se libérer par lui-même de cette prison en élargissant son cercle de compassion jusqu'à y inclure toutes les créatures vivantes et la nature entière dans toute sa beauté."
];

let churchillQuote = new Quote(startQuoteChurchill, middleQuoteChurchill, endQuoteChurchill);
let einsteinQuote = new Quote(startQuoteEinstein, middleQuoteEinstein, endQuoteEinstein);












