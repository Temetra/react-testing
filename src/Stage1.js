import React, { Component } from 'react'

// This is sub-component of StageContainer
class Stage1 extends Component {
	constructor(props) {
		super(props)

		// Local state
		this.state = { localValue: 0, appValue: props.appState.amount }

		// App ref
		this.application = props.appInterface
	}

	render() {
		this.application.logTime('Stage1')

		return (
			<React.Fragment>
				<h2>Test 1</h2>
				<p>This edits a local state number, which is lost when the stage changes.</p>
				<p><button onClick={(event) => this.incrementLocalValue(event)}>Increment local value</button> {this.state.localValue}</p>
				<p>This edits an app state number, which is retained when the stage changes.</p>
				<p><button onClick={(event) => this.incrementAppValue(event)}>Increment app value</button> {this.state.appValue}</p>
			</React.Fragment>
		)
	}

	incrementLocalValue(event) {
		let value = this.state.localValue + 1
		this.setState({ localValue: value })
	}

	incrementAppValue(event) {
		let value = this.state.appValue + 1
		this.setState({ appValue: value })
		this.application.setAmount(value)
	}
}

export default Stage1