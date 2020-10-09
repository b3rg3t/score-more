// LocalStorage functions
function SET_STORAGE(items: any, key: string) {
  const now = new Date();

  // time to last
  // 50 sec atm
  const ttl = 50000000;

  const item = {
    ...items,
    expiry: now.getTime() + ttl,
  };
  localStorage.setItem(key, JSON.stringify(item));
}

function GET_STORAGE(key: string) {
  const FilterItems = localStorage.getItem(key);
  if (!FilterItems) {
    return null;
  }

  const item = JSON.parse(FilterItems);
  const now = new Date();

  // compare the expiry time of the item with the current time
  if (now.getTime() > item.expiry) {
    // If the item is expired, delete the item from storage
    // and return null
    localStorage.removeItem(key);
    return null;
  }
  return item;
}

function REMOVE_STORAGE() {
  localStorage.removeItem("az-search-filter");
}

export { SET_STORAGE, GET_STORAGE, REMOVE_STORAGE };
