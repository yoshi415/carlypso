const apiFactory = ($http, URL, $q) => {
  let allListings = [];

  const getCount = () => {
    return 555
    // return $http.get(`${URL}/count`)
    //   .then(({data}) => {
    //     console.log(data)
    //     count = data;
    //     return count;
    //   });
  }

  const getListings = (index, limit) => {
    return $http.get(`${URL}/listings`)
      .then(({data}) => {
        console.log(data)
        return data;
      });
  }

  return {getCount, getListings}
}

apiFactory.$inject = ['$http', 'URL', '$q'];

export {apiFactory};