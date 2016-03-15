const apiFactory = ($http, URL, $q) => {
  let allListings = [];
  $http.defaults.useXDomain = true;

  const getCount = () => {
    return $http.get(`${URL}/count`)
      .then(({data}) => {
        console.log(data.value)
        return data.value;
      });
  }

  const getListings = (index, limit) => {
    return $http.get(`${URL}/listings`)
      .then(({data}) => {
        console.log('test', data)
        return data;
      });
  }

  return {getCount, getListings}
}

apiFactory.$inject = ['$http', 'URL', '$q'];

export {apiFactory};