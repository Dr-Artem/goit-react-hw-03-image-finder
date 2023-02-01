import axios from 'axios';

export const Api = (name, page) => {
	const searchParams = new URLSearchParams({
	q: name,
	page: page,
	key: '32589447-ffbdd7a8f0a573b29764024b7',
	image_type: 'photo',
	orientation: 'horizontal',
	per_page: 12,
	});
	try {
		const response = axios.get(`https://pixabay.com/api/?${searchParams}`);
		return response;
	}
	catch (error)
	{ console.warn(error); }
}; 