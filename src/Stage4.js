import React, { Component } from 'react'

// This is sub-component of StageContainer
class Stage4 extends Component {
	constructor(props) {
		super(props)

		// Local state
		this.state = { data: null, error: null }

		// App ref
		this.application = props.appInterface

		// Other data
		this.filename = 'res/data.json'
	}

	render() {
		this.application.logTime('Stage3')

		return (
			<React.Fragment>
				<h2>Test 3</h2>
				<p>This fetches '{this.filename}', parses the text to JSON, and outputs the data as a list.</p>
				<p><button onClick={(event) => this.buttonAction(event)}>Begin action</button></p>
				{this.renderData()}
				{this.renderError()}
			</React.Fragment>
		)
	}

	buttonAction(event) {
		return fetch(this.filename)
			.then(response => response.json())
			.then(json => this.setState({ data: json, error: null }))
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

	renderError() {
		if (this.state.error) return (
			<React.Fragment>
				<p>Error loading {this.filename}:</p>
				<p>{this.state.error.message}</p>
			</React.Fragment>
		)
	}
}

export default Stage4