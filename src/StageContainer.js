import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Stage1 from './Stage1'
import Stage2 from './Stage2'
import Stage3 from './Stage3'

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
		this.components = {
			stage1: (props) => <Stage1 appState={props.appState} appInterface={props.appInterface} />,
			stage2: (props) => <Stage2 appState={props.appState} appInterface={props.appInterface} />,
			stage3: (props) => <Stage3 appState={props.appState} appInterface={props.appInterface} />,
		}
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
		return component(this.props)
	}
}

export default StageContainer