const apiFactory = ($http, URL, $q) => {
  let allListings = [];
  $http.defaults.useXDomain = true;

  const getCount = () => {
    return $http.get(`${URL}/count`)
      .then(({data}) => {
        return data;
      });
  }

  const getListings = (index=0, limit=10000) => {
    return $http.get(`${URL}/listings?offset=${index}&limit=${limit}`)

      .then(({data}) => {
        return data;
      });
  }

  return { getCount, getListings }
}

apiFactory.$inject = ['$http', 'URL', '$q'];

export {apiFactory};