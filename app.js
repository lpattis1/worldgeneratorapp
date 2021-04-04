// variables: 
let generateBtn = document.querySelector(".generate-btn");
let resetBtn = document.querySelector(".clear-btn");

// initiate functions: 
function init(){
    generatePlanets1();
    generatePlanets2();
    generatePlanets3();

    changeBg1();
    changeBg2();
    changeBg3();
}

// card 1:

function generatePlanets1(){
    // variables
   let planetArray1 = ["Cal", "Mor", "Win", "Shel", "Port", "Val", "Hala", "Merc", "Sat", "Ur", "Lev", "Air", "Wind", "Fire", "Rock", "Yorn", "Yal", "Hara", "Lor", "Chill", "Sea", "Teth", "Hur", "Fal", "Eur", "Sil"];
    let planetArray2 = ["more", "heart", "fell", "ore", "stead", "land","haven", "depth", "north", "rith", "sen", "onde", "ald", "maer", "tio", "ela", "thil", "falls", "ham", "bury", "wick", "reka", "ury"];

    let planetDescription1 = ["A"]
    
    let assort1;
    let assort2;

    assort1 = planetArray1[Math.floor(Math.random() * planetArray1.length)];

    assort2 = planetArray2[Math.floor(Math.random() * planetArray2.length)];


    let combinePlanets = assort1 + assort2;
    document.querySelector(".planet-name1").innerHTML = combinePlanets;

}

function changeBg1() {
    let img = document.querySelector(".bg-img1");
    let bgChange = 
    [
        {
            img: "img/planet3.jpg",
            bg: "#de3e32"
        },

        {
            img: "img/planet4.jpg",
            bg: "#ee813c"
        },

        {
            img: "img/planet5.jpg",
            bg: "#0c3468"
        },

        {
            img: "img/planet6.jpg",
            bg: "#508bd9"
        },

        {
            img: "img/planet7.jpg",
            bg: "#540d37"
        },

        {
            img: "img/planet8.jpg",
            bg: "#670751"
        },
    ]

    let bgLoop = Math.floor(Math.random() * bgChange.length);
    img.src = bgChange[bgLoop].img;
    document.querySelector(".planet-card1").style.background = bgChange[bgLoop].bg;
}

// card 2:

function generatePlanets2(){
    // variables
   let planetArray1 = ["Cal", "Mor", "Win", "Shel", "Port", "Val", "Hala", "Merc", "Sat", "Ur", "Lev", "Air", "Wind", "Fire", "Rock", "Yorn", "Yal", "Hara", "Lor", "Chill", "Sea", "Teth", "Hur", "Fal", "Eur", "Sil"];
    let planetArray2 = ["more", "heart", "fell", "ore", "stead", "land","haven", "depth", "north", "rith", "sen", "onde", "ald", "maer", "tio", "ela", "thil", "falls", "ham", "bury", "wick", "reka", "ury"];
    
    let assort1;
    let assort2;

    assort1 = planetArray1[Math.floor(Math.random() * planetArray1.length)];

    assort2 = planetArray2[Math.floor(Math.random() * planetArray2.length)];


    let combinePlanets = assort1 + assort2;
    document.querySelector(".planet-name2").innerHTML = combinePlanets;

}

function changeBg2() {
    let img = document.querySelector(".bg-img2");
    let bgChange = 
    [
        {
            img: "img/planet3.jpg",
            bg: "#de3e32"
        },

        {
            img: "img/planet4.jpg",
            bg: "#ee813c"
        },

        {
            img: "img/planet5.jpg",
            bg: "#0c3468"
        },

        {
            img: "img/planet6.jpg",
            bg: "#508bd9"
        },

        {
            img: "img/planet7.jpg",
            bg: "#540d37"
        },

        {
            img: "img/planet8.jpg",
            bg: "#670751"
        },
    ]

    let bgLoop = Math.floor(Math.random() * bgChange.length);
    img.src = bgChange[bgLoop].img;
    document.querySelector(".planet-card2").style.background = bgChange[bgLoop].bg;
}

// card 3:

function generatePlanets3(){
    // variables
   let planetArray1 = ["Cal", "Mor", "Win", "Shel", "Port", "Val", "Hala", "Merc", "Sat", "Ur", "Lev", "Air", "Wind", "Fire", "Rock", "Yorn", "Yal", "Hara", "Lor", "Chill", "Sea", "Teth", "Hur", "Fal", "Eur", "Sil"];
    let planetArray2 = ["more", "heart", "fell", "ore", "stead", "land","haven", "depth", "north", "rith", "sen", "onde", "ald", "maer", "tio", "ela", "thil", "falls", "ham", "bury", "wick", "reka", "ury"];
    
    let assort1;
    let assort2;

    assort1 = planetArray1[Math.floor(Math.random() * planetArray1.length)];

    assort2 = planetArray2[Math.floor(Math.random() * planetArray2.length)];


    let combinePlanets = assort1 + assort2;
    document.querySelector(".planet-name3").innerHTML = combinePlanets;

}

function changeBg3() {
    let img = document.querySelector(".bg-img3");
    let bgChange = 
    [
        {
            img: "img/planet3.jpg",
            bg: "#de3e32"
        },

        {
            img: "img/planet4.jpg",
            bg: "#ee813c"
        },

        {
            img: "img/planet5.jpg",
            bg: "#0c3468"
        },

        {
            img: "img/planet6.jpg",
            bg: "#508bd9"
        },

        {
            img: "img/planet7.jpg",
            bg: "#540d37"
        },

        {
            img: "img/planet8.jpg",
            bg: "#670751"
        },
    ]

    let bgLoop = Math.floor(Math.random() * bgChange.length);
    img.src = bgChange[bgLoop].img;
    document.querySelector(".planet-card3").style.background = bgChange[bgLoop].bg;
}


// event listeners:
generateBtn.addEventListener("click", function(e){
    generatePlanets1();
    changeBg1();

    generatePlanets2();
    changeBg2();

    generatePlanets3();
    changeBg3();

})