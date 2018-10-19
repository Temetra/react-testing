import React, { PureComponent } from 'react'
import * as Log from './LogTime.js'

// This is sub-component of StageContainer
class Stage4 extends PureComponent {
	constructor(props) {
		super(props)

		// Local state
		this.state = { data: null, error: null }

		// Other data
		this.filename = 'res/data.json'
	}

	render() {
		Log.message('Stage3')

		// https://reactjs.org/docs/error-boundaries.html
		// Async/events not covered by error boundary, so error is captured and thrown during render
		if (this.state.error) throw this.state.error

		return (
			<React.Fragment>
				<h2>Test 3</h2>
				<p>This fetches '{this.filename}', parses the text to JSON, and outputs the data as a list.</p>
				<p><button onClick={(event) => this.buttonAction(event)}>Begin action</button></p>
				{this.renderData()}
			</React.Fragment>
		)
	}

	buttonAction(event) {
		return fetch(this.filename)
			.then(response => response.json())
			.then(json => this.setState({ data: json }))
			.catch(error => this.setState({ data: null, error: error }))
	}

	renderData() {
			if (this.state.data) return (
				<React.Fragment>
					<ul className="stage4">
						{this.state.data.map(item => <li key={item.id} className={item.badChoice ? 'strike' : ''}>{item.value} {item.title}</li>)}
					</ul>
				</React.Fragment>
			)
	}
}

export default Stage4