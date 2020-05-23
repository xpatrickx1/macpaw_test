import { chuckAPI } from "./API";

export async function createCategoriesList( container ) {
  const containerForCategories = document.querySelector(container);
  let categories = await chuckAPI.getAllCategories();
  const categoriesList = document.createElement('ul');
  categoriesList.className = 'categories__list';

  categories.map( item => {
    const category = document.createElement( "li" );
    category.className = "categories__item";
    category.innerHTML = `
            <label>
                <input name="category" type="radio" class="categories__button" value="${item}">
                <span class="checkcategory">${item}</span>
            </label>
          `;

    const input = category.querySelector('.categories__button');
    input.addEventListener('click', () => {
      categoriesList.querySelectorAll('li')
        .forEach( item => {
          item.classList.remove('active')
        })
      category.classList.add('active')
    })
    categoriesList.append(category)
  } );

  containerForCategories.append( categoriesList );
};