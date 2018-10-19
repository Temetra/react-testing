import React, { PureComponent } from 'react'
import * as Log from './LogTime.js'

// This is sub-component of StageContainer
class Stage3 extends PureComponent {
	constructor(props) {
		super(props)

		// Local state
		this.state = { start: 0, finish: 0, delay: 1000 }
	}

	render() {
		Log.message('Stage3')

		return (
			<React.Fragment>
				<h2>Test 3</h2>
				<p>This calls a promise chain with a delay of {this.state.delay} ms.</p>
				<p><button onClick={(event) => this.buttonAction(event)}>Begin action</button></p>
				<p>Start: {this.state.start}</p>
				<p>Finish: {this.state.finish}</p>
				<p>Duration: {this.state.finish > 0 ? this.state.finish - this.state.start : 0}</p>
			</React.Fragment>
		)
	}

	buttonAction(event) {
		// Simulating a proper async function call, e.g. fetch
		return Promise.resolve()
			.then(() => this.setState({ start: 0, finish: 0 }))
			.then(() => this.buttonActionStarted())
			.then(() => new Promise(resolve => setTimeout(resolve, this.state.delay)))
			.then(() => this.buttonActionFinished())
	}

	buttonActionStarted() {
		this.setState({ start: Date.now() })
	}

	buttonActionFinished() {
		this.setState({ finish: Date.now() })
	}
}

export default Stage3