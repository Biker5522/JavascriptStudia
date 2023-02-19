//Sounds
let audios = {
  a: document.querySelector("#kick"),
  w: document.querySelector("#kick2"),
  s: document.querySelector("#kick3"),
  e: document.querySelector("#kick4"),
  d: document.querySelector("#kick5"),
  f: document.querySelector("#kick6"),
};

//Event on click
document.body.addEventListener("keypress", playSound);
let recordbutton = document.querySelector("#recordButton");
let playbutton = document.querySelector("#playButton");

//Play sound
function playSound(key) {
  let audio;
  if (key.key == undefined) {
    audio = audios[key];
    audio.play();
  } else {
    audio = audios[key.key];
    audio.currentTime = 0;
    audio.play();

    switch (key.key) {
      case "a":
        console.log("a");
        var key = document.querySelector(".c");
        console.log(key);
        key.style.border = "2px solid #A9A9A9";
        setTimeout(function () {
          key.style.border = "0px solid #696969";
        }, 100);
        break;
      case "w":
        console.log("w");
        var key = document.querySelector(".cs");
        console.log(key);
        key.style.border = "2px solid #A9A9A9";
        setTimeout(function () {
          key.style.border = "0px solid #696969";
        }, 100);
        break;
      case "s":
        console.log("s");
        var key = document.querySelector(".d");
        console.log(key);
        key.style.border = "2px solid #A9A9A9";
        setTimeout(function () {
          key.style.border = "0px solid #696969";
        }, 100);
        break;
      case "d":
        console.log("e");
        var key = document.querySelector(".ds");
        console.log(key);
        key.style.border = "2px solid #A9A9A9";
        setTimeout(function () {
          key.style.border = "0px solid #696969";
        }, 100);
        break;
      case "e":
        console.log("e");
        var key = document.querySelector(".e");
        console.log(key);
        key.style.border = "2px solid #A9A9A9";
        setTimeout(function () {
          key.style.border = "0px solid #696969";
        }, 100);
        break;
      default:
        console.log("default");
        break;
    }
  }
}

recordbutton.addEventListener("click", record);
playbutton.addEventListener("click", playRecord);

let recordedSounds = [];

function record() {
  recordedSounds = []; // clear any previously recorded sounds
  let startTime = new Date().getTime();
  let endTime = startTime + 5000; // set the end time to 5 seconds after the start time

  function recordSound(event) {
    let key = event.key;
    let currentTime = new Date().getTime() - startTime;
    recordedSounds.push({ key: key, time: currentTime });
    console.log(recordedSounds);
  }

  document.body.addEventListener("keypress", recordSound); // add the event listener

  // remove the event listener after 10 seconds
  setTimeout(function () {
    document.body.removeEventListener("keypress", recordSound);
  }, 5000);
}
async function playRecord() {
  console.log(recordedSounds);
  for (let i = 0; i < recordedSounds.length; i++) {
    let sound = recordedSounds[i];
    console.log("Playing sound:", sound.key, sound.time);
    await new Promise((resolve) =>
      setTimeout(function () {
        console.log("Playing sound after delay:", sound.key, sound.time);
        playSound(sound);
        resolve();
      }, sound.time)
    );
  }
}
