import logo from '../images/carlypso_logo.png';

export class AppController {
  constructor(API) {
    this.API = API;
    this.getCount();
    this.logo = logo;
  }

  getCount() {
    this.API.getCount()
      .then((data) => {
        this.count = data;
      })
  }
}