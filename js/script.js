// este lo necesito para agregarle el clic
const botonMenu = document.querySelector('.hamb')
// este lo necesito para agregarle la clase
const menu = document.querySelector('#menu-principal')
// const icono = botonMenu.querySelector('i')

// console.log(icono)

botonMenu.addEventListener('click', () => {
  menu.classList.toggle('open')
})

// Alternativa más compleja

// function establecerMenu(abierto) {
//   menu.classList.toggle('open', abierto)
//   botonMenu.setAttribute('aria-expanded', String(abierto))
//   botonMenu.setAttribute('aria-label', abierto ? 'Cerrar menú' : 'Abrir menú')
//   icono.classList.toggle('fa-bars', !abierto)
//   icono.classList.toggle('fa-xmark', abierto)
// }

// botonMenu.addEventListener('click', () => {
//   establecerMenu(!menu.classList.contains('open'))
// })

// document.addEventListener('keydown', evento => {
//   if (evento.key === 'Escape' && menu.classList.contains('open')) {
//     establecerMenu(false)
//     botonMenu.focus()
//   }
// })

// menu.querySelectorAll('a').forEach(enlace => {
//   enlace.addEventListener('click', () => establecerMenu(false))
// })

// const escritorio = window.matchMedia('(min-width: 761px)')
// escritorio.addEventListener('change', () => establecerMenu(false))
