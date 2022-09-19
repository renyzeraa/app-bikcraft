const links = document.querySelectorAll('.header-menu a')

function linkAtivado(link) {
  const url = location.href
  const links = link.href
  if (url.includes(links)) {
    link.classList.add('ativo')
  }
}

links.forEach(linkAtivado)

// PARAMETROS PARA ORCAMENTO

const parametros = new URLSearchParams(location.search)

function ativarProduto(parametro) {
  if (parametro) {
    const selecionado = document.getElementById(parametro)
    selecionado.checked = true
  }
}

parametros.forEach(ativarProduto)

//perguntas frequentes

function initTitleList() {
  const titleList = document.querySelectorAll('.perguntas dt')
  const classActive = 'ativa'
  if (titleList.length) {
    titleList[0].classList.add(classActive)
    titleList[0].nextElementSibling.classList.add(classActive)

    function activeList() {
      this.classList.toggle(classActive)
      this.nextElementSibling.classList.toggle(classActive)
    }

    titleList.forEach(item => {
      item.addEventListener('click', activeList)
    })
  }
}
initTitleList()

// galeria de fotos

const galeria = document.querySelectorAll('.bike-images img')
const galeriaContainer = document.querySelector('.bike-images')

function galeriaTrocar(event) {
  const img = event.currentTarget
  const media = matchMedia('(min-width:470px)').matches
  if (media) {
    galeriaContainer.prepend(img)
  }
}

function eventoGaleria(img) {
  img.addEventListener('click', galeriaTrocar)
}

galeria.forEach(eventoGaleria)

// plugins

if (window.SimpleAnime) {
  new SimpleAnime()
}
