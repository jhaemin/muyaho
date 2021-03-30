/**
 * In this project, muyaho means anything.
 * For example, "muyaho~" means "Hello world" or "Good morning" or whatever.
 */

const audios = []
const audiosCount = 10

for (let i = 0; i < audiosCount; i += 1) {
  const audio = new Audio('https://raw.githubusercontent.com/jhaemin/muyaho/main/src/muyaho.mp3')
  audio.volume = 0
  audio.play()
  audios.push(audio)
}

let nextAudioIndex = 0

class Muyaho {
  constructor({ x, y }) {
    const img = document.createElement('img')
    img.classList.add('muyaho-img')
    img.src = 'https://raw.githubusercontent.com/jhaemin/muyaho/main/src/muyaho.png'
    img.style.left = x + 'px'
    img.style.top = y + 'px'

    document.body.appendChild(img)
    audios[nextAudioIndex].currentTime = 0
    audios[nextAudioIndex].volume = 1
    audios[nextAudioIndex].play()
    nextAudioIndex = (nextAudioIndex + 1) % audiosCount

    img.getBoundingClientRect()
    img.style.transform = 'translateX(-50%) translateY(-50%) scale(5)'

    setTimeout(() => {
      img.style.opacity = '0'

      setTimeout(() => {
        img.remove()
      }, 300)
    }, 700)
  }
}

const muyahoStyle = document.createElement('style')
muyahoStyle.innerHTML = /* css */ `
    .muyaho-img {
      width: 100px;
      height: auto;
      transition: transform 1.5s ease-out, opacity 300ms ease;
      position: fixed;
      z-index: 9999999999;
      transform: translateX(-50%) translateY(-50%);
      user-select: none;
      pointer-events: none;
      will-change: transform opacity;
    }
  `

document.head.appendChild(muyahoStyle)

window.addEventListener('pointerdown', (e) => {
  new Muyaho({ x: e.pageX, y: e.pageY })
})
