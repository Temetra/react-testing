import React, { Component } from 'react'
import Header from './Header'
import Navigation from './Navigation'
import StageContainer from './StageContainer'
import Stage1 from './Stage1'
import Stage2 from './Stage2'
import Stage3 from './Stage3'
import Stage4 from './Stage4'

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

		this.stages = [
			{ name: 'stage1', desc: 'Test 1' },
			{ name: 'stage2', desc: 'Test 2' },
			{ name: 'stage3', desc: 'Test 3' },
			{ name: 'stage4', desc: 'Test 4' },
		]

		this.components = {
			stage1: (props) => <Stage1 appState={props.appState} appInterface={props.appInterface} />,
			stage2: (props) => <Stage2 appState={props.appState} appInterface={props.appInterface} />,
			stage3: (props) => <Stage3 appState={props.appState} appInterface={props.appInterface} />,
			stage4: (props) => <Stage4 appState={props.appState} appInterface={props.appInterface} />,
		}

		this.interface = new ApplicationInterface(this)
	}

	render() {
		this.interface.logTime('Application')

		return (
			<React.Fragment>
				<Header target="header" appState={this.state} appInterface={this.interface} />
				<Navigation target="nav" appState={this.state} appInterface={this.interface} stages={this.stages} />
				<StageContainer target="section" appState={this.state} appInterface={this.interface} components={this.components} />
			</React.Fragment>
		)
	}
}

export default Application