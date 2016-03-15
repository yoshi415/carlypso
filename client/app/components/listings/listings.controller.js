import autoPic from '../../../images/suv.png';

export class ListingsController {
  constructor(API) {
    this.pic = autoPic;
    this.API = API;
    this.index = 0;
    this.listings = [];
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
      });
  }

  nextPage() {
    this.index += 8;
    this.getListings(this.index, 8);
  }

  previousPage() {
    this.index -= 8;
    this.getListings(this.index, 8);
  }
}