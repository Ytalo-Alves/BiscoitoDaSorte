// Variáveis
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const btnCookie = document.querySelector('#btnCookie')
const labelCookie = document.querySelector('#labelCookie')

const messageCookieLuck = [
  "A vida trará coisas boas se tiveres paciência.",
  "Demonstre amor e alegria em todas as oportunidades e verás que a paz nasce dentro de você.",
  "Não compense na ira o que lhe falta na razão.",
  "Defeitos e virtudes são apenas dois lados da mesma moeda.",
  "Não há que ser forte. Há que ser flexível.",
  "Gente todo dia arruma os cabelos, por que não o coração?",
];

// Events
btnCookie.addEventListener('click', handleTryClick)
btnResetCookie.addEventListener('click', toggleScreen)

// Functions
function handleTryClick(e) {
  e.preventDefault()
  toggleScreen()
  messageCookieLuckAction()
}

function toggleScreen() {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}

function messageCookieLuckAction() {
  const indexAleatory = Math.floor(Math.random() * messageCookieLuck.length)
  const messageAleatory = messageCookieLuck[indexAleatory];

  labelCookie.textContent = `${messageAleatory}`
  
}

