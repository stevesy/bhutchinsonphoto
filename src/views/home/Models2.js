import React from 'react';
import Gallery from '../shared/Gallery';

class Models extends React.Component {
	render() {
		const images = [
			{
				image: 'Baylie-2.jpg',
				title: 'Baylie-2'
			},
			{
				image: 'Baylie.jpg',
				title: 'Baylie'
			},
			{
				image: 'Rhiannon.jpg',
				title: 'Rhiannon'
			},
			{
				image: 'Rhiannon-2.jpg',
				title: 'Rhiannon'
			},
			{
				image: 'Heidi.jpg',
				title: 'Heidi'
			},
			{
				image: 'Heid-2.jpg',
				title: 'Heid'
			},
			{
				image: 'Hailey.jpg',
				title: 'Hailey'
			},
			{
				image: 'Devi.jpg',
				title: 'Devi'
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