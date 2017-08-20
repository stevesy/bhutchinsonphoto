import React from 'react';
import Gallery from '../shared/Gallery';

class Models extends React.Component {
	render() {
		const images = [
			{
				image: 'cory-1.jpg',
				title: 'Cory'
			},
			{
				image: 'cory-3.jpg',
				title: 'Cory'
			},
			{
				image: 'cory-2.jpg',
				title: 'Cory'
			},
			{
				image: 'heidi-1.jpg',
				title: 'Heidi'
			},
			{
				image: 'heidi-2.jpg',
				title: 'Heidi'
			},
			{
				image: 'heidi-3.jpg',
				title: 'Heidi'
			},
			{
				image: 'kerry-2.jpg',
				title: 'Kerry'
			},
			{
				image: 'Julene-3.jpg',
				title: 'Julene'
			},
			{
				image: 'Julene-2.jpg',
				title: 'Julene'
			},
			{
				image: 'hailey-1.jpg',
				title: 'Hailey'
			},
			{
				image: 'hailey-2.jpg',
				title: 'Hailey'
			}
		];
		return (
			<Gallery
				title="Models"
				items={ images }
			/>
		);
	}
};

export default Models;