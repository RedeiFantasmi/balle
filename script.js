script.js
Au début de l'année
9 Mai

Vous avez importé un élément
JavaScript
script.js
// Déclaration de la constante de la vitesse (en ms ; - = plus vite)
const BALL_SPEED = 1;

// Déclaration des propriétés de la balle
const balle = document.getElementById("ball");
let BALLE_PROPERTIES;
balle.left;
balle.top;
balle.right;
balle.bottom;

// Déclaration des variables pour la distance entre chaque déplacement (en px ; + = plus vite mais espace entre chaque déplacement plus visible)
const MOUV_X = 1;
const MOUV_Y = 1;

// Déclaration des variables pour le sens de déplacement
let x_axis;
let y_axis;



// fonction du lancement de la balle
function startBall() {

    setInterval(() => {
        // On récupère la position de la balle
        setBallDimensions();

        // On définit la taille de l'écran (pour permettre le changement de taille de l'écran)
        let window_width = document.body.getBoundingClientRect()["width"];
        let window_height = document.body.getBoundingClientRect()["height"];

        // test collision
        if(balle.right >= window_width) { // si on touche le bord droit
            x_axis = -MOUV_X;
            balle.left = window_width - balle.width
        } else if(balle.left <= 0) { // si on touche le bord gauche
            x_axis = MOUV_X;
        }
        if(balle.bottom >= window_height) { // si on touche le bord du bas
            y_axis = -MOUV_Y;
            balle.top = window_height - balle.height
        } else if(balle.top <= 0) { // si on touche le bord du haut
            y_axis = MOUV_Y;
        }

        // on change les coordonnées de la balle
        balle.left += x_axis;
        balle.top += y_axis;        

        // on applique les nouvelles coordonnées
        balle.style.top = `${balle.top}px`;
        balle.style.left = `${balle.left}px`;

        
    }, BALL_SPEED);

}

// Fonction qui met à jour les variables contenant la position de la balle
function setBallDimensions() {
    let BALLE_PROPERTIES = balle.getBoundingClientRect();
    balle.width = BALLE_PROPERTIES["width"];
    balle.height = BALLE_PROPERTIES["height"];
    balle.left = BALLE_PROPERTIES["left"];
    balle.top = BALLE_PROPERTIES["top"];
    balle.right = BALLE_PROPERTIES["right"];
    balle.bottom = BALLE_PROPERTIES["bottom"];
}

// Fonction qui détecte le click sur le bouton de lancement et le cache
document.getElementById("game-starter").addEventListener( "click", function() {
    document.getElementById("game-starter").remove();
    startBall();
});
