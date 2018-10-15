import React, { Component } from 'react'

// This is sub-component of StageContainer
class Stage2 extends Component {
	constructor(props) {
		super(props)

		// Local state
		this.state = { words: props.appState.words }

		// App ref
		this.application = props.appInterface
	}

	render() {
		this.application.logTime('Stage2')

		return (
			<React.Fragment>
				<h2>Test 2</h2>
				<p>This edits text stored in application state, which is also used by the header component.</p>
				<p><input type="text" className="big" value={this.state.words} onChange={(event) => this.handleChange(event)} /></p>
			</React.Fragment>
		)
	}

	handleChange(event) {
		this.application.setWords(event.target.value)
		this.setState({ words: event.target.value })
	}
}

export default Stage2