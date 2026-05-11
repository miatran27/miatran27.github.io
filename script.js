let backToTop = document.querySelector('.back-to-top')
let projectsSection = document.querySelector('main.projects')
window.addEventListener('scroll', () => {
  if (window.scrollY >= projectsSection.offsetTop) {
      backToTop.classList.add('visible')
  } else {
      backToTop.classList.remove('visible')
  }
})