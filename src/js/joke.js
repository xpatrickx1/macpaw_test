import { postToLocalStore, removeFromLocalstore } from "./storeAPI";
import {renderFavourites} from './renderFavourites'
import heart from '../img/heart.png'

export function Joke( container, obj, category = true, theme = "main", liked = false ) {
  const { id, value, updated_at, url, categories } = obj;

  // const jokeTheme = ( theme === "dark" ) ? "dark" : "light";
  const jokeTheme = ( theme === "main" ) ? "main" : "favourite";
  const likedBtn = ( liked ) ? "active" : "";
  const date = Math.floor( ( Date.now() - Date.parse( updated_at ) ) / ( 1000 * 60 * 60 ) / 24 );

  const jokeCategory = document.createElement( "div" );
  jokeCategory.className = "joke__category";
  jokeCategory.innerHTML = `<span>${categories}</span>`;

  const render = () => {
    const containerForJokes = document.querySelector( container );

    const joke = document.createElement( "div" );
    joke.className = `joke ${jokeTheme}__joke`;


    joke.innerHTML = `
              <div class="joke__like ${likedBtn}"></div>
              <div class="joke__msg-icon">
                  <div class="joke__msg-icon-wrap ${jokeTheme}__msg-icon-wrap"></div>
              </div>
              <div class="joke__link">
                  <p class="joke__id-desc">ID:</p>
                  <a href="${url}">${id}</a>
                  <div class="joke__link-icon"></div>
              </div>
              <div class="joke__text">
                  <p class="${jokeTheme}__text">${value}</p>
              </div>
              <div class="joke__update">
                  <p>Last update: <span class="update-hours">${date}</span> hours ago</p>
              </div>     
    `;

    const likeBtn = joke.querySelector( ".joke__like" );

    likeBtn.addEventListener( "click", ( e ) => {
      e.preventDefault();
      if ( likeBtn.classList.contains('active') ) {
        removeFromLocalstore('jokes', id);
        const joke = [].slice.call(document.querySelector('.jokes').children)
        joke.forEach(item => {
          const linkId = item.querySelector('.joke__link > a').textContent;
          if ( linkId === id ) {
              item.querySelector('.joke__like').classList.remove('active');
          }
        });
        renderFavourites()
      } else {
        postToLocalStore('jokes', obj);
        renderFavourites()
      }
      likeBtn.classList.toggle('active');
    } );

    if ( category ) {
      categories.length ? joke.append( jokeCategory ) : null;
    }

    containerForJokes.prepend( joke );
  };
  render();
};