import autoPic from '../../../images/suv.png';

export class ListingsController {
  constructor(API) {
    this.pic = autoPic;
    this.API = API;
    this.index = 0;
    this.listings = [];
    this.listingsCache = [];
    this.getCount();
    this.getListings();
  }

  getCount() {
    this.API.getCount()
      .then((data) => {
        this.count = data.value;
      });
  }

  getListings(index, offset) {
    this.API.getListings(index, offset)
      .then((data) => {
        this.listings = data.value;
        this.listingsCache = data.value;
      });
  }

  nextPage() {
    this.index += 8;
    this.query = '';
    this.getListings(this.index, 1000);
  }

  previousPage() {
    this.index -= 8;
    this.query = '';
    this.getListings(this.index, 1000);
  }

  filters(query) {
    const search = query.split(' ');
    let filteredList = [];
    search.forEach((field) => {
      field = field.toLowerCase();
      if (!filteredList.length) {
        filteredList = filterByField(field, this.listingsCache);
      } else {
        filteredList = filterByField(field, filteredList)
      }
    });

    this.listings = filteredList;

    function filterByField(searchField, collection) {
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
  }
}