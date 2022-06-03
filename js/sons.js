export default function () {
  const musics = [
    {
      name: "florist",
      path: new Audio("https://github.com/Alexxcamargo1000/focus-timer/blob/main/audios/Floresta.wav?raw=true"),
    },
    {
      name: "rain",
      path: new Audio("https://github.com/Alexxcamargo1000/focus-timer/blob/main/audios/Chuva.wav?raw=true"),
    },
    {
      name: "shop",
      path: new Audio("https://github.com/Alexxcamargo1000/focus-timer/blob/main/audios/Cafeteria.wav?raw=true"),
    },
    {
      name: "fire",
      path: new Audio("https://github.com/Alexxcamargo1000/focus-timer/blob/main/audios/Lareira.wav?raw=true"),
    },
  ];

  function playMusic(buttonMusic) {
    musics.forEach((music) => {
      if (music.name === buttonMusic.className) {
        music.path.loop;
        music.path.play();
      } else {
        music.path.pause();
      }
    });
  }

  return {
    playMusic,
  };
}
