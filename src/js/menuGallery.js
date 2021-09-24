import data from '../menu.json'
import refs from './refs'
import template from '../templates/myCard.hbs'

const { body, menu, checkbox } = refs
const galletyCards = template(data)

menu.insertAdjacentHTML('afterbegin', galletyCards)

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const { LIGHT, DARK } = Theme

let currentTheme = localStorage.getItem('theme') || LIGHT

localStorage.setItem('theme', currentTheme)
checkbox.checked = currentTheme === DARK
body.classList.add(currentTheme)

checkbox.addEventListener('change', (e) => {
    body.classList.toggle(LIGHT)
    body.classList.toggle(DARK)
    localStorage.setItem('theme', checkbox.checked ? DARK: LIGHT)
    }
)


