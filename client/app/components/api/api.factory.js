const apiFactory = ($http, URL, $q) => {
  let allListings = [];
  $http.defaults.useXDomain = true;

  const getCount = () => {
    return $http.get(`${URL}/count`)
      .then(({data}) => {
        return data;
      });
  }

  const getListings = (index, limit) => {
    return $http.get(`${URL}/listings`)
      .then(({data}) => {
        console.table(data.value)
        return data;
      });
  }

  return {getCount, getListings}
}

apiFactory.$inject = ['$http', 'URL', '$q'];

export {apiFactory};