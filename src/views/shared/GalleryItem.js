import React from 'react';

class ImageListItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = { imageStatus: 'loading' };
	}

	handleImageLoaded() {
		this.setState({ imageStatus: 'loaded' });
	}

	render() {
		return (
			<li>
				<img
					src={ require(`../../images/${this.props.image}`) }
					alt={ this.props.title }
					onLoad={ e => this.handleImageLoaded(e) }
					className={ this.state.imageStatus }
				/>
			</li>
		);
	}
}

export default ImageListItem;