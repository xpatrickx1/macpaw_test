export const accordion = ( clickEl, panels ) => {
  const clickElements = document.querySelectorAll( clickEl );
  const panelsElements = document.querySelectorAll( panels );

  const hideElements = () => {
    panelsElements.forEach( item => {
      item.classList.remove( "active" );
    });
  };

  clickElements.forEach( item => {
    item.addEventListener( "click", () => {
      hideElements();
      const nextEl = item.nextElementSibling;
      if ( nextEl.hasAttribute( "data-panel" ) ) {
        nextEl.classList.add( "active" );
      }
    });
  });
};