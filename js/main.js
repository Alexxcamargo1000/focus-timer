import {
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
} from "./elements.js";

let newMinutes = Number(minutes.textContent);
let newSeconds = Number(seconds.textContent);
let timerOut = 0;



function playMusic(musicName) {
  console.log(musicName);
  musics.forEach((music) => {
    if (music.name === musicName) {
      music.path.loop;
      music.path.play();
    } else {
      music.path.pause();
    }
  });
}

disabledButton(buttonStop);

function resetTimer() {
  updateTimer(newMinutes, newSeconds);
}

function updateTimer(newMinutes, newSeconds) {
  minutes.textContent = newMinutes.toString().padStart(2, "0");
  seconds.textContent = newSeconds.toString().padStart(2, "0");
}

function countdown() {
  timerOut = setTimeout(() => {
    let newMinutes = Number(minutes.textContent);
    let newSeconds = Number(seconds.textContent);

    if (newMinutes <= 0 && newSeconds <= 0) {
      disabledButton(buttonStop);
      activeButton(buttonPlay);
      resetTimer();
    } else {
      if (newSeconds <= 0) {
        newSeconds = 60;
        newMinutes--;
      }
      newSeconds--;

      updateTimer(newMinutes, newSeconds);

      countdown();
    }
  }, 1000);
}

function disabledButton(button) {
  button.disabled = true;
  button.classList.add("active");
}
function activeButton(button) {
  button.disabled = false;
  button.classList.remove("active");
}

buttonPlay.addEventListener("click", () => {
  disabledButton(buttonPlay);
  activeButton(buttonStop);

  countdown();
});

buttonStop.addEventListener("click", () => {
  disabledButton(buttonStop);
  activeButton(buttonPlay);
  resetTimer();
  clearTimeout(timerOut);
});

buttonPlus.addEventListener("click", () => {
  newMinutes = newMinutes + 5;
  updateTimer(newMinutes, newSeconds);
  activeButton(buttonMinus);
});

buttonMinus.addEventListener("click", () => {
  if (newMinutes >= 5) {
    newMinutes = newMinutes - 5;
    activeButton(buttonPlus);
    updateTimer(newMinutes, newSeconds);
  } else {
    disabledButton(buttonMinus);
  }
});

// ===================Button Sons =========================== //
buttonFlorist.addEventListener("click", () => {
  disabledButton(buttonFlorist);
  activeButton(buttonRain);
  activeButton(buttonShop);
  activeButton(buttonFire);
  playMusic(musics[0].name);
});

buttonRain.addEventListener("click", () => {
  disabledButton(buttonRain);
  activeButton(buttonFlorist);
  activeButton(buttonShop);
  activeButton(buttonFire);
  playMusic(musics[1].name);
});

buttonShop.addEventListener("click", () => {
  disabledButton(buttonShop);
  activeButton(buttonFlorist);
  activeButton(buttonRain);
  activeButton(buttonFire);
  playMusic(musics[2].name);
});

buttonFire.addEventListener("click", () => {
  disabledButton(buttonFire);
  activeButton(buttonFlorist);
  activeButton(buttonRain);
  activeButton(buttonShop);
  playMusic(musics[3].name);
});
