export const listingsFactory = () => {
  const filterList = (query, cache) => {
    let search = query.split(' ');
     search = [];
    let filteredList = [];
    search.forEach((field) => {
      if (!filteredList.length) {
        filteredList = filterByField(field, cache);
      } else {
        filteredList = filterByField(field, filteredList)
      }
    });

    return filteredList;    
  }

  const filterByField = (searchField, collection) => {
    let filtered = collection.filter((listing) => {
      for (let key in listing) {
        let field = String(listing[key]).toLowerCase();
        if (field.indexOf(searchField) > -1) {
          return listing;
        }
      }
    });
    
    return filtered;
  }

  return { filterList };
}