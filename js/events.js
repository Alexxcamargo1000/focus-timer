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
} from "./elements.js";

export default function({
  timer,
  control,
  sons
}) {
  let newMinutes = Number(minutes.textContent);
  let newSeconds = Number(seconds.textContent);

  control.disabledButton(buttonStop);

  buttonPlay.addEventListener("click", () => {
    control.play();
    timer.countdown();
  });
  
  buttonStop.addEventListener("click", () => {
    control.stop();
    timer.updateTimer(newMinutes, newSeconds);
    timer.hold();
  });
  
  buttonPlus.addEventListener("click", () => {
    newMinutes = newMinutes + 5;
    timer.updateTimer(newMinutes, newSeconds);
    control.activeButton(buttonMinus);
  });
  
  buttonMinus.addEventListener("click", () => {
    if (newMinutes >= 5) {
      newMinutes = newMinutes - 5;
      control.activeButton(buttonPlus);
      timer.updateTimer(newMinutes, newSeconds);
    } else {
      control.disabledButton(buttonMinus);

    }
  });
  
  // ===================Button Sons =========================== //
  buttonFlorist.addEventListener("click", () => {
    sons.playMusic(buttonFlorist);
    control.activeButtonMusic(buttonFlorist)
  });
  
  buttonRain.addEventListener("click", () => {
    sons.playMusic(buttonRain);
    control.activeButtonMusic(buttonRain)
  });
  
  buttonShop.addEventListener("click", () => {
    sons.playMusic(buttonShop);
    control.activeButtonMusic(buttonShop)
  });
  
  buttonFire.addEventListener("click", () => {
    sons.playMusic(buttonFire);
    control.activeButtonMusic(buttonFire)
  });
}