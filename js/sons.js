export default function () {
  const musics = [
    {
      name: "florist",
      path: new Audio("../audios/Floresta.wav"),
    },
    {
      name: "rain",
      path: new Audio("../audios/Chuva.wav"),
    },
    {
      name: "shop",
      path: new Audio("../audios/Cafeteria.wav"),
    },
    {
      name: "fire",
      path: new Audio("../audios/Lareira.wav"),
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
