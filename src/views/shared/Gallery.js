import React from 'react';
import GalleryItem from './GalleryItem';

class Gallery extends React.Component {
	render() {
		return (
			<div>
				<h1 className="sr-only">{ this.props.title }</h1>
				<div className="gallery">
					<ul>
						{
							this.props.items.map(function({ image, title }, index) {
								return (
									<GalleryItem
										image={ image }
										title={ title }
										key={ index }
									/>
								);
							})
						}
					</ul>
				</div>
			</div>
		);
	}
};

export default Gallery;