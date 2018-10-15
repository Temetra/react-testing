import React, { Component } from 'react'
import ReactDOM from 'react-dom'

// This is sub-component of Application
// It is rendered into a different element in index.html
class StageContainer extends Component {
	constructor(props) {
		super(props)

		// Where to render this component
		this.portalTarget = document.querySelector(props.target)

		// App ref
		this.application = props.appInterface

		// Sub-components
		this.components = props.components
	}

	/* 	Only update if currentStage changes
		This means sub-components should maintain own state in order 
		to re-render on interaction, getting data from appInterface */
	shouldComponentUpdate(nextProps) {
		return (this.props.appState.currentStage !== nextProps.appState.currentStage)
	}

	render() {
		this.application.logTime('StageContainer')

		let content = (
			<React.Fragment>
				{this.getStageComponent(this.props.appState.currentStage)}
			</React.Fragment>
		)

		return ReactDOM.createPortal(content, this.portalTarget)
	}

	getStageComponent(name) {
		let component = this.components[name]
		if (component) return component(this.props)
	}
}

export default StageContainer