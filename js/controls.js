
export default function({
  buttonPlay,
  buttonStop,
  buttonMusicArray,
}) {
  
function disabledButton(button) {
  button.disabled = true;
  button.classList.add("active");
}
function activeButton(button) {
  button.disabled = false;
  button.classList.remove("active");
}

function play() {
  disabledButton(buttonPlay);
  activeButton(buttonStop);
}
function stop() {
  disabledButton(buttonStop);
  activeButton(buttonPlay);
}

function activeButtonMusic(buttonName) {

  buttonMusicArray.forEach((button) => {
    if(buttonName.className === button.className ) {
      console.log(buttonName.className)
      disabledButton(button);
    }else {
      activeButton(button);
    }
  })

}

return {
  disabledButton,
  activeButton,
  activeButtonMusic,
  play,
  stop
}

}