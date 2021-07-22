import { Box, Paper, Typography } from '@material-ui/core';
import { Component } from 'react';

class ErrorBoundary extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hasError: false,
		};
	}
	componentDidCatch(error, errorInfo) {
		this.setState({
			hasError: true,
			messageError: `${error.message} ${errorInfo}`,
		});
	}
	componentWillUnmount() {
		this.setState({
			hasError: false,
		});
	}

	render() {
		if (this.state.hasError) {
			return (
				<Box
					display='flex'
					alignItems='center'
					justifyContent='center'
					position='relative'
					style={{ position: 'relative' }}
				>
					<Paper
						elevation={2}
						style={{
							width: '50%',
							padding: 40,
							position: 'absolute',
							top: '5rem',
						}}
					>
						<Typography variant='h3' align='center'>
							Ocurrio un error, por favor vuelva más tarde
						</Typography>
						<Typography variant='body2'>{this.state.messageError}</Typography>
					</Paper>
				</Box>
			);
		}
		return this.props.children;
	}
}

export default ErrorBoundary;
