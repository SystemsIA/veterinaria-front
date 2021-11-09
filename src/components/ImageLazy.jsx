function ImageLazy({ image, alt, ...restProps }) {
	return <img src={image} {...restProps} alt={alt} />;
}

export default ImageLazy;
