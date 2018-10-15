import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
	constructor(props) {
		super(props)
		this.state = { hasError: false }
		this.application = props.appInterface
	}

	componentDidCatch(error, info) {
		this.setState({ hasError: true, error: error, info: info })
	}

	render() {
		if (this.state.hasError) {
			this.application.logTime('ErrorBoundary')

			return (
				<React.Fragment>
					<h2>An error has occurred</h2>
					{this.state.error.toString()}
				</React.Fragment>
			)
		}

		return this.props.children
	}
}