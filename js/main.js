//========== Tableau citations Churchill ==============
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

//========== Tableau citations Einstein ==============
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

// Instanciation des deux classes
let churchillQuote = new Quote(startQuoteChurchill, middleQuoteChurchill, endQuoteChurchill);
let einsteinQuote = new Quote(startQuoteEinstein, middleQuoteEinstein, endQuoteEinstein);
let generate = new Generate(churchillQuote, einsteinQuote);












