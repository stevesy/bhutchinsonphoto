import React from 'react';
import Gallery from '../shared/Gallery';

class Business extends React.Component {
	render() {
		const images = [
			{
				image: 'leigh.jpg',
				title: 'Leigh'
			},
			{
				image: 'marshall.jpg',
				title: 'Marshall'
			},
			{
				image: 'lea.jpg',
				title: 'Lea'
			},
			{
				image: 'chelsea.jpg',
				title: 'Chelsea'
			},
			{
				image: 'david.jpg',
				title: 'David'
			},
			{
				image: 'dave-miller.jpg',
				title: 'Dave Miller'
			},
			{
				image: 'jodie.jpg',
				title: 'Jodie'
			}
		];
		return (
			<Gallery
				title="Business"
				items={ images }
			/>
		);
	}
};

export default Business;