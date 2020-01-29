var axios = require('axios')

module.exports = {
  getProductWeight: async function (productId) {
    return axios
      .get('https://product.service:8899/products/' + productId)
      .then(response => {
        return response.data.weightLB
      })
  }
}
