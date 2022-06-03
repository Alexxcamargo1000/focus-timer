import {
  buttonPlay,
  buttonStop,
  buttonMusicArray,
  minutes,
  seconds,
} from "./elements.js";

import Timer from "./timer.js";
import Controls from "./controls.js";
import Sons from "./sons.js";
import Events from "./events.js";

const control = Controls({
  buttonPlay,
  buttonStop,
  buttonMusicArray,
});
const timer = Timer({minutes, seconds, control});
const sons = Sons();
Events({
  timer,
  control,
  sons,
});
