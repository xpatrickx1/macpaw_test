export const chuckAPI = {
  async getRandomJoke() {
    let joke = await fetch( "https://api.chucknorris.io/jokes/random" );
    let res = await joke.json();
    return res
  },

  async getAllCategories () {
    let categories = await fetch( `https://api.chucknorris.io/jokes/categories` );
    let res = await categories.json();
    return res
  },
  async getCategoryJoke( category ) {
    let queryCategory = await fetch( `https://api.chucknorris.io/jokes/random?category=${category}` )
    let res = await queryCategory.json();
    return res
  },
  async getSearchTextJoke( query ) {
    let joke = await fetch( `https://api.chucknorris.io/jokes/search?query=${query}` )
    let res = await joke.json();
    return res.result
    ;
  }
};