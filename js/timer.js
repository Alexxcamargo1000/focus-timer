export default function({minutes, seconds, control}) {

  let timerOut = 0;

  function updateTimer(newMinutes, newSeconds) {
    minutes.textContent = newMinutes.toString().padStart(2, "0");
    seconds.textContent = newSeconds.toString().padStart(2, "0");
  }
  
  function countdown() {
    timerOut = setTimeout(() => {
      let newMinutes = Number(minutes.textContent);
      let newSeconds = Number(seconds.textContent);
  
      if (newMinutes <= 0 && newSeconds <= 0) {
        updateTimer(newMinutes, newSeconds);
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

  function hold () {
    clearTimeout(timerOut);
  }

  return {
    countdown,
    hold,
    updateTimer,
  }
  
}