import { renderJoke } from "./renderJoke";
import { autocomplete } from "./autocomplete";

export const form = ( form ) => {
  const searchForm = document.querySelector( form );

  const getFormData = () => {
    const radios = document.querySelectorAll( '[type="radio"]' );
    let param = {};
    radios.forEach( item => {
      if ( item.checked ) {

        if ( item.value === "random" ) {
          param = { action: item.value };
        }

        if ( item.value === "categories" ) {
          const categories = searchForm.querySelectorAll( "input[name='category']" );
          categories.forEach( item => {

            if ( item.checked ) {
              param = {
                action: "categories",
                value: item.value
              };
            }
          } );
        }
        if ( item.value === "search" ) {
          const searchInput = searchForm.querySelector( "[data-search-input]" );
          param = {
            action: "search",
            value: searchInput.value
          };
        }
      }
    } );

    return param;
  };

  const bindEvent = () => {
    const search = searchForm.querySelector("[data-search-label]")
    search.addEventListener( 'click', () => autocomplete('[data-search-input]', 'jokes'))
  };

  const getJoke = () => {
    searchForm.addEventListener( "submit", ( e ) => {
      e.preventDefault();
      const formData = getFormData();
      renderJoke(formData)
    } );
  };
  bindEvent()
  getJoke();
};