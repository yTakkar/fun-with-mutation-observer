export const UL = document.querySelector('ul')

let CURRENT_LIST_NO = 3
let ulType = true

export const addAThing = () => {
  document.querySelector('#add').addEventListener('click', () => {
    CURRENT_LIST_NO++;
    const thing = document.createElement('li')
    thing.innerText = `Something ${CURRENT_LIST_NO}`
    UL.append(thing)
  })
}

export const removeLastThing = () => {
  document.querySelector('#remove').addEventListener('click', () => {
    UL.removeChild(UL.lastChild);
    CURRENT_LIST_NO--;
  })
}

export const toggleType = () => {
  document.querySelector('#toggle').addEventListener('click', () => {
    const container = document.querySelector('.ul-c')
    container.innerHTML = container.innerHTML.replace(
      ulType ? 'ul' : 'ol',
      ulType ? 'ol' : 'ul'
    )
    ulType = !ulType
  })
}