export const hamburger = ( clickEl, closeEl, ...toggleElems ) => {
  const elems = [];
  const clickElement = document.querySelector(clickEl);
  const closeElement = document.querySelector(closeEl);
  const [...toggleElements] = toggleElems;

  toggleElements.forEach( item => {
    elems.push(document.querySelector(item))
  });

  clickElement.addEventListener('click', () => {
    elems.forEach( element => {
      element.classList.toggle('expanded')})
  });

  closeElement.addEventListener('click', () => {
    elems.forEach( element => {
      element.classList.remove('expanded')})
  })
};