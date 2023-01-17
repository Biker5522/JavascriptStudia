/* let audios = {
  a: document.querySelector('#kick'),
  s: document.querySelector('#kick2'),
  d: document.querySelector('#kick3'),
  f: document.querySelector('#kick4'),
}

document.body.addEventListener('keypress', playSound)
let button = document.querySelector('#recordButton')

function playSound(key) {
  array = ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a']
  if (key.key == 'p') {
    playRecord(array)
  } else if (key.key == undefined) {
    let audio = audios[key]
    audio.currentTime = 0
    audio.play()
  } else {
    let audio = audios[key.key]
    console.log(audio)
    audio.currentTime = 0
    audio.play()
  }
}

button.addEventListener('click', record)
function record() {}

function playRecord(array) {
  console.log(array)
  for (let i = 0; i < array.length; i++) {
    console.log(array[i])
    if (isNan(array[i])) playSound(array[i])
  }
}
 */
//Sounds
let audios = {
  a: document.querySelector('#kick'),
  s: document.querySelector('#kick2'),
  d: document.querySelector('#kick3'),
  f: document.querySelector('#kick4'),
}

//Event on click
document.body.addEventListener('keypress', playSound)
let button = document.querySelector('#recordButton')

//Play sound
function playSound(key) {
  array = ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a']
  if (key.key == 'p') {
    playRecord(array)
  } else if (key.key == undefined) {
    let audio = audios[key]
    audio.currentTime = 0
    audio.play()
  } else {
    let audio = audios[key.key]
    console.log(audio)
    audio.currentTime = 0
    audio.play()
  }
}

button.addEventListener('click', record)
function record() {}

function playRecord(array) {
  console.log(array)
  for (let i = 0; i < array.length; i++) {
    console.log(array[i])
    if (isNan(array[i])) playSound(array[i])
  }
}

let piano = document.querySelectorAll('.pianoKey')
for (let i = 0; i < piano.length; i++) {
  piano[i].addEventListener('click', clickedPiano)
}
function clickedPiano() {
  console.log(this)
  this.style.borderBottom = '1px solid black'
  this.style.height = '9.4rem'
}
