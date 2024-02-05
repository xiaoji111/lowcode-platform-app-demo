import { error, type Load } from '@sveltejs/kit';
import data from '../data.json';

/** @type {import('./$types').PageLoad} */
export const load: Load<{ id: string }> = async ({ params }) => {
	if (params.id === 'hello-world') {
		const pageConfig = await new Promise((resolve) => {
			setTimeout(() => {
				resolve(data);
			}, 1000);
		});
		console.log(pageConfig);
		return {
			pageConfig
		};
	}

	throw error(404, 'Not found id');
};
