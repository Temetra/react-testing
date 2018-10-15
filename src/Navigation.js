import React, { Component } from 'react'
import ReactDOM from 'react-dom'

// This is sub-component of Application
// It is rendered into a different element in index.html
class Navigation extends Component {
	constructor(props) {
    	super(props)

		// Where to render this component
		this.portalTarget = document.querySelector(props.target)

		// Local state
		this.state = { selectedStage: props.appState.currentStage }

		// App ref
		this.application = props.appInterface

		// Other data
		this.stages = [
			{ name:'stage1', desc: 'Test 1' },
			{ name:'stage2', desc: 'Test 2' },
			{ name:'stage3', desc: 'Test 3' },
		]
	}
	
	shouldComponentUpdate(nextProps) {
		return (this.props.appState.currentStage !== nextProps.appState.currentStage)
	}

	render() {
		this.application.logTime('Navigation')

		let content = (
			<React.Fragment>
				{this.stages.map((stage) => { return (
					<label key={stage.name}>
						<input type="radio" name="navi" value={stage.name}
							checked={this.state.selectedStage === stage.name} 
							onChange={(event) => this.navChanged(event)} />
						{stage.desc}
					</label>
				)})}
			</React.Fragment>
		)

		return ReactDOM.createPortal(content, this.portalTarget)
	}
	
	navChanged(event) {
		this.application.setStage(event.target.value)
		this.setState({selectedStage: event.target.value})
	}
}

export default Navigation