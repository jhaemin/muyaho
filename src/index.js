/**
 * In this project, muyaho means anything.
 * For example, "muyaho~" means "Hello world" or "Good morning" or whatever.
 */

import muyahoAudio from './muyaho.mp3'
import muyahoImg from './muyaho.png'

class Muyaho {
  constructor({ x, y }) {
    const audio = new Audio(muyahoAudio)

    const img = document.createElement('img')
    img.classList.add('muyaho-img')
    img.src = muyahoImg
    img.style.left = x + 'px'
    img.style.top = y + 'px'

    document.body.appendChild(img)
    audio.play()

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

window.addEventListener('DOMContentLoaded', () => {
  const muyahoStyle = document.createElement('style')
  muyahoStyle.innerHTML = /* css */`
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
})
