import { PUBLIC_API_URL } from '$env/static/public';
import { storefront } from '../api';

export const load = async () => {
const query = `{
			  shop {
			    name
			  }
			  products(first: 1) {
			    edges {
			      node {
			        title
			      }
			    }
			  }
			}`;

const response = await fetch('https://devhomecoffee.myshopify.com/api/2023-04/graphql.json', {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json',
		'X-Shopify-Storefront-Access-Token': '61ca7e9d1c83722d5418022af4b33ad3'
	},
	body: JSON.stringify({
		query
	})
});
console.log('teste', await response.json());
// return response.json();

return {
	name: 'Basic Template'
};
};

const productsQuery = `{
  shop {
    name
  }
  products(first: 1) {
    edges {
      node {
        title
      }
    }
  }
}`;