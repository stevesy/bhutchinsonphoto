import React from 'react';
import Gallery from '../shared/Gallery';

class Portraits2 extends React.Component {
	render() {
		const images = [
			{
				title: 'Chloe',
				image: 'chloe-1.jpg'
			},
			{
				title: '',
				image: 'IMG_1116.jpg'
			},
			{
				title: 'Juliana',
				image: 'juliana.jpg'
			},
			{
				title: 'Sharlyn',
				image: 'sharlyn.jpg'
			},
			{
				title: 'JD',
				image: 'diltsy.jpg'
			},
			{
				title: 'Monica',
				image: 'Monica.jpg'
			},
			{
				title: '',
				image: 'IMG_0245.jpg'
			},
			{
				title: 'Kristin',
				image: 'kristin.jpg'
			},
			{
				title: 'Mary',
				image: 'mary-2.jpg'
			}
		];
		return (
			<Gallery
				title="Portraits"
				items={ images }
			/>
		);
	}
};

export default Portraits2;