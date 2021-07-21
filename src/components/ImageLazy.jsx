function ImageLazy({ image, alt, ...rest }) {
	return <img src={image} {...rest} alt={alt} />;
}

export default ImageLazy;
