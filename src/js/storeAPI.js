const emptyArr = [];

export const getLocalStorage = (itemName) => {
    if ( localStorage[itemName] == null) {
        localStorage.setItem(itemName, JSON.stringify(emptyArr))
    }
    const items = localStorage.getItem(itemName);
    const itemsArr = JSON.parse(items);
    return itemsArr
};

export function postToLocalStore( itemName, obj ) {
    const itemsArr = getLocalStorage(itemName);
    itemsArr.push(obj);
    localStorage.setItem(itemName, JSON.stringify(itemsArr));
    return localStorage
};

export function removeFromLocalstore( itemName, id ) {
  const items = getLocalStorage( itemName )
        .filter( item => item.id !== id );
  localStorage.removeItem( itemName )
  localStorage.setItem( itemName, JSON.stringify( items ) )
  return localStorage
}