const buttonPlay = document.querySelector(".play");
const buttonStop = document.querySelector(".stop");
const buttonPlus = document.querySelector(".plus");
const buttonMinus = document.querySelector(".minus");
const buttonFlorist = document.querySelector(".florist");
const buttonRain = document.querySelector(".rain"); 
const buttonShop = document.querySelector(".shop");
const buttonFire = document.querySelector(".fire");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
const musics = [
  {
    name: "florist",
    path: new Audio("./audios/Floresta.wav"),
  },
  {
    name: "rain",
    path: new Audio("./audios/Chuva.wav"),
  },
  {
    name: "shop",
    path: new Audio("./audios/Cafeteria.wav"),
  },
  {
    name: "fire",
    path: new Audio("./audios/Lareira.wav"),
  },
];

export {
  buttonPlay,
  buttonStop,
  buttonPlus,
  buttonMinus,
  buttonFlorist,
  buttonRain,
  buttonShop,
  buttonFire,
  minutes,
  seconds,
  musics,
};
