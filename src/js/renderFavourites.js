import { getLocalStorage } from "./storeAPI";
import { Joke } from "./joke";

export const renderFavourites = () => {
  document.querySelector('.favour_jokes').innerHTML = '';
  const jokes = getLocalStorage('jokes');
  jokes.forEach( item => {
    new Joke('.favour_jokes', item, false, "light", true )
  })
}