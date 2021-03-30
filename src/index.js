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
    img.src = muyahoImg
    img.style.width = '100px'
    img.style.height = 'auto'
    img.style.transition = 'transform 1.5s ease-out, opacity 300ms ease'
    img.style.position = 'fixed'
    img.style.zIndex = '9999999999'
    img.style.left = x + 'px'
    img.style.top = y + 'px'
    img.style.transform = 'translateX(-50%) translateY(-50%)'
    img.style.userSelect = 'none'
    img.style.pointerEvents = 'none'
    img.style.willChange = 'transform'

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
  ;['mousedown', 'touchstart'].forEach((event) => {
    window.addEventListener(event, (e) => {
      new Muyaho({ x: e.pageX, y: e.pageY })
    })
  })
})
