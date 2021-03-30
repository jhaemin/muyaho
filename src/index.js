/**
 * In this project, muyaho means anything.
 * For example, "muyaho~" means "Hello world" or "Good morning" or whatever.
 */

import muyahoImage from './muyaho.png'
import muyahoAudio from './muyaho.mp3'

const AudioContext = window.AudioContext || window.webkitAudioContext
const audioCtx = new AudioContext()

const audios = []
const audiosCount = 10

for (let i = 0; i < audiosCount; i += 1) {
  const audio = new Audio(muyahoAudio)
  audios.push(audio)
}

let nextAudioIndex = 0
const imageWidth = 300
const imageHeight = 222
const halfOfImageWidth = imageWidth / 2
const halfOfImageHeight = imageHeight / 2

const muyahoStyle = document.createElement('style')
muyahoStyle.innerHTML = /* css */ `
    .muyaho-img {
      width: ${imageWidth}px;
      height: auto;
      transition: transform 1.5s ease-out, opacity 300ms ease;
      position: fixed;
      z-index: 9999999999;
      transform-origin: center center;
      transform: scale(0.5);
      user-select: none;
      pointer-events: none;
      will-change: transform opacity;
    }
  `

document.head.appendChild(muyahoStyle)

window.addEventListener('pointerdown', (e) => {
  const img = document.createElement('img')
  img.classList.add('muyaho-img')
  img.src = muyahoImage
  img.style.left = e.pageX - halfOfImageWidth + 'px'
  img.style.top = e.pageY - halfOfImageHeight + 'px'

  img.getBoundingClientRect()

  document.body.appendChild(img)

  audios[nextAudioIndex].currentTime = 0
  audios[nextAudioIndex].play()
  nextAudioIndex = (nextAudioIndex + 1) % audiosCount

  img.getBoundingClientRect()
  img.style.transform = 'scale(1.5)'

  setTimeout(() => {
    img.style.opacity = '0'

    setTimeout(() => {
      img.remove()
    }, 300)
  }, 700)
})
