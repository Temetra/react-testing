import React, { Component } from 'react'
import Header from './Header'
import Navigation from './Navigation'
import StageContainer from './StageContainer'

class ApplicationInterface {
	constructor(app) {
		this.app = app
	}

	logTime(name) {
		console.log(`${name} ${Date.now()}`)
	}

	setWords(words) {
		this.app.setState({ words })
	}

	incrementAmount() {
		let value = this.app.state.amount + 1
		this.app.setState({ amount: value })
		return value
	}

	setStage(stage) {
		this.app.setState({ currentStage: stage })
	}
}

class Application extends Component {
	constructor(props) {
		super(props)

		this.state = {
			words: 'Testing things in React',
			amount: 0,
			currentStage: 'stage1',
		}

		this.interface = new ApplicationInterface(this)
	}

	render() {
		this.interface.logTime('Application')

		return (
			<React.Fragment>
				<Header target="header" appState={this.state} appInterface={this.interface} />
				<Navigation target="nav" appState={this.state} appInterface={this.interface} />
				<StageContainer target="section" appState={this.state} appInterface={this.interface} />
			</React.Fragment>
		)
	}
}

export default Application