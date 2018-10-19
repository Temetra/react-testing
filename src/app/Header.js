import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'
import * as Log from '../lib/Logging.js'

// This is sub-component of Application
// It is rendered into a different element in index.html
class Header extends PureComponent {
	constructor(props) {
		super(props)

		// Where to render this component
		this.portalTarget = document.querySelector(props.target)
	}

	render() {
		Log.message('Header')

		let content = (
			<React.Fragment>
				<h1>{this.props.words}</h1>
			</React.Fragment>
		)

		return ReactDOM.createPortal(content, this.portalTarget)
	}
}

export default Header