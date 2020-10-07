// LocalStorage functions

function SET_STORAGE(
    state: any,
    search: any,
    cardID: string,
    count: number,
    orderBy: string
  ) {
    const now = new Date();
  
    // time to last
    // 50 sec atm
    const ttl = 50000;
  
    const item = {
      search: search,
      cardID: cardID,
      count: count,
      filters: state,
      orderBy: orderBy,
      expiry: now.getTime() + ttl,
    };
    localStorage.setItem("az-search-filter", JSON.stringify(item));
  }
  
  function GET_STORAGE() {
    const FilterItems = localStorage.getItem("az-search-filter");
    if (!FilterItems) {
      return null;
    }
  
    const item = JSON.parse(FilterItems);
    const now = new Date();
  
    // compare the expiry time of the item with the current time
    if (now.getTime() > item.expiry) {
      // If the item is expired, delete the item from storage
      // and return null
      localStorage.removeItem("az-search-filter");
      return null;
    }
    return item;
  }
  
  function REMOVE_STORAGE() {
    localStorage.removeItem("az-search-filter");
  }
  
  export { SET_STORAGE, GET_STORAGE, REMOVE_STORAGE };