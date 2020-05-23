import { chuckAPI } from "./API";
import { Joke } from "./joke";

export async function renderJoke ( parametr) {
  const {action, value} = parametr;
  const jokesContainer = document.querySelector('.jokes');
  jokesContainer.innerHTML = '';
  switch ( action ) {
    case "random":
      let randomJoke = await chuckAPI.getRandomJoke();
      new Joke('.jokes', randomJoke, true)
      break;
    case "categories":
      let categoryJoke = await chuckAPI.getCategoryJoke( value );
      new Joke('.jokes', categoryJoke, true)
      break;
    case "search":
      const searchJoke = await chuckAPI.getSearchTextJoke( value );
      searchJoke.forEach( item => new Joke('.jokes', item, true))
      break;
    default:
      chuckAPI.getRandomJoke();
  }
}