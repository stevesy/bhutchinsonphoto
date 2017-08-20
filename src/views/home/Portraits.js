import React from 'react';
import Gallery from '../shared/Gallery';

class Portraits extends React.Component {
	render() {
		const images = [
			{
				title: '',
				image: 'IMG_2390.jpg'
			},
			{
				title: '',
				image: 'IMG_1103.jpg'
			},
			{
				title: '',
				image: 'IMG_0852.jpg'
			},
			{
				title: '',
				image: 'IMG_2725.jpg'
			},
			{
				title: 'Pen',
				image: 'pen-1.jpg'
			},
			{
				title: 'Noah',
				image: 'noah.jpg'
			},
			{
				title: '',
				image: 'IMG_9132.jpg'
			},
			{
				title: '',
				image: 'IMG_9202.jpg'
			},
			{
				title: 'Jessica',
				image: 'jessica.jpg'
			},
			{
				title: 'Monica',
				image: 'monica-1.jpg'
			},
			{
				title: 'Monica',
				image: 'monica-2.jpg'
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

export default Portraits;