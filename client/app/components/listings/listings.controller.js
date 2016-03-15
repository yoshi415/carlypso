import autoPic from '../../../images/suv.png';

export class ListingsController {
  constructor(API) {
    this.pic = autoPic;
    this.API = API;
    this.getCount();
    this.getListings();
  }

  getCount() {
    this.API.getCount()
      .then((data) => {
        this.count = data.value;
      });
  }

  getListings() {
    this.API.getListings()
      .then((data) => {
        this.listings = data.value;
      });
  }
}