import autoPic from '../../../images/suv.png';

export class ListingsController {
  constructor(API) {
    this.pic = autoPic;
    this.API = API;
    this.getCount();
    this.getListings();
    this.index = 0;
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
    this.getListings(index)
  }
}