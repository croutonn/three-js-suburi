import config from '../config.json'

const renderMenu = (
  targetElement: HTMLElement,
  pages: string[] = config.pages
): void => {
  const ulElement = document.createElement('ul')
  pages.forEach((page) => {
    const liElement = document.createElement('li')
    const anchorElement = document.createElement('a')
    anchorElement.innerText = page
    anchorElement.href = `${page}.html`
    liElement.appendChild(anchorElement)
    ulElement.appendChild(liElement)
  })
  targetElement.appendChild(ulElement)
}

export default renderMenu
