import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import ErrorBoundary from '../lib/ErrorBoundary'
import * as Log from '../lib/Logging.js'

// This is sub-component of Application
// It is rendered into a different element in index.html
class StageContainer extends Component {
	constructor(props) {
		super(props)

		// Where to render this component
		this.portalTarget = document.querySelector(props.target)

		// Sub-components
		this.components = props.components
	}

	render() {
		Log.message('StageContainer')

		let content = (
			<ErrorBoundary>
				{this.getCurrentStageComponent()}
			</ErrorBoundary>
		)

		return ReactDOM.createPortal(content, this.portalTarget)
	}

	getCurrentStageComponent() {
		let component = this.components[this.props.currentStage]
		if (component) return component()
	}
}

export default StageContainer