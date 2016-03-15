export class ListingsController {
  constructor(API) {
    this.API = API;
    this.getCount();
    this.getListings();
  }

  getCount() {
    this.API.getCount()
      .then((data) => {
        this.count = data;
      });
  }

  getListings() {
    this.API.getListings()
      .then((data) => {
        this.listings = data;
      });
  }
}