const openMenuButton = document.getElementById('btn-mobile')

const handleClick = (event: PointerEvent) => {
  const navBar = document.getElementById('nav')
  navBar?.classList.toggle('active')
  const active = navBar?.classList.contains('active')
  if (event.target instanceof HTMLElement && active) {
    event.target.setAttribute('aria-expanded', 'true')
    event.target.setAttribute('aria-label', 'Fechar Menu')
  } else if (event.target instanceof HTMLElement && !active) {
    event.target.setAttribute('aria-expanded', 'false')
    event.target.setAttribute('aria-label', 'Abrir Menu')
  }
}

openMenuButton?.addEventListener('pointerdown', handleClick)
