import { PUBLIC_API_URL, PUBLIC_API_TOKEN } from '$env/static/public';

export const storefront = async (query: any, variables = {}) => {
	// debugger;
	const response = await fetch('https://devhomecoffee.myshopify.com/api/2023-04/graphql.json', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'X-Shopify-Storefront-Access-Token': '61ca7e9d1c83722d5418022af4b33ad3'
		},
		body: JSON.stringify({
			query
			// variables
		})
	});
	return response.json();
};
