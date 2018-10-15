import React, { Component } from 'react'
import ReactDOM from 'react-dom'

// This is sub-component of Application
// It is rendered into a different element in index.html
class Header extends Component {
	constructor(props) {
		super(props)

		// Where to render this component
		this.portalTarget = document.querySelector(props.target)

		// App ref
		this.application = props.appInterface
	}

	shouldComponentUpdate(nextProps) {
		return (this.props.appState.words !== nextProps.appState.words)
	}

	render() {
		this.application.logTime('Header')

		let content = (
			<React.Fragment>
				<h1>{this.props.appState.words}</h1>
			</React.Fragment>
		)

		return ReactDOM.createPortal(content, this.portalTarget)
	}
}

export default Header