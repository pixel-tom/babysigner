const axios = require('axios');

const options = {
  method: 'POST',
  url: 'https://rest-api.hellomoon.io/v0/nft/collection/ownership/for-pubkey',
  headers: {
    accept: 'application/json',
    'content-type': 'application/json',
    authorization: 'Bearer 151c15b0-d21d-40b2-9786-49678176b715'
  },
  data: {
    helloMoonCollectionId: '4acddd72d49586b411e100cef35eb061',
    owner: '9s96jF3D2uXaCjmphDXDmwXna2rxGDS3Wi8vARaQbErS'
  }
};

axios
  .request(options)
  .then(function (response: { data: any; }) {
    console.log(response.data);
  })
  .catch(function (error: any) {
    console.error(error);
  });