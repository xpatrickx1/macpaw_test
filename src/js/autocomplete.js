import { getLocalStorage } from "./storeAPI";

export const autocomplete = (inp, selector) => {
  const jokes = [];
  function updateJokesArray () {
    getLocalStorage(selector)
      .forEach( item => {
        jokes.push(item.value)
      });
  };
  updateJokesArray();
  const input = document.querySelector(inp);
  let currentFocus;
  input.addEventListener("input", (e) => {
    let items, b, val = input.value;
    closeAllLists();
    if (!val) { return false;}
    currentFocus = -1;
    items = document.createElement("DIV");
    items.setAttribute("id", "autocomplete-list");
    items.setAttribute("class", "autocomplete-items");
    input.parentNode.appendChild(items);

    jokes.forEach( item => {
      const wordsArr = item.split(' ')
      wordsArr.forEach( word => {
      if (word.substr(0, val.length).toUpperCase() == val.toUpperCase()) {
        b = document.createElement("DIV");
        b.innerHTML = `
            <span>${item}</span>
            <input type='hidden' value='${item}'>
        `;
        b.addEventListener("click", (e) => {
          input.value = items.getElementsByTagName("input")[0].value;
          closeAllLists();
        });
        items.appendChild(b);
      }
      })
    })
  });

  input.addEventListener("keydown", function(e) {
    let x = document.getElementById("autocomplete-list");
    if (x) x = [].slice.call(x.getElementsByTagName("div"));
    if (e.keyCode == 40) {
      currentFocus++;
      addActive(x);
    } else if (e.keyCode == 38) {
      currentFocus--;
      addActive(x);
    } else if (e.keyCode == 13) {
      e.preventDefault();
      if (currentFocus > -1) {
        if (x) x[currentFocus].click();
      }
    }
  });
  function addActive(x) {
    if (!x) return false;
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    x.forEach( item => {
      item.classList.remove("autocomplete-active");
    })
  }
  function closeAllLists(elmnt) {
    let x = [].slice.call(document.getElementsByClassName("autocomplete-items"));
    x.forEach( item => {
      if (elmnt != item && elmnt != input) {
        item.parentNode.removeChild(item);
      }
    })
  }
  document.addEventListener("click", function (e) {
    closeAllLists(e.target);
  });
}