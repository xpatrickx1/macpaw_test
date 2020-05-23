import { hamburger } from "./hamburger";
import { accordion } from "./accordion";
import { createCategoriesList } from "./createCategorieList";
import { form } from "./form";
import {renderFavourites} from './renderFavourites'
import { autocomplete } from "./autocomplete";

const app = () => {
  hamburger( ".favourite", ".favour_jokes__tan", ".favourite__toggle-bar", ".favour_jokes", ".favour_jokes__wrapper" );
  accordion( "[data-search]", "[data-panel]" );
  createCategoriesList('.categories')
  form( ".search_form" );
  renderFavourites();
  autocomplete('[data-search-input]', 'jokes');
};

app();





