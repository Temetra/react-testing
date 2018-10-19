import React, { Component } from 'react'
import Header from './Header'
import Navigation from './Navigation'
import StageContainer from './StageContainer'
import Stage1 from './Stage1'
import Stage2 from './Stage2'
import Stage3 from './Stage3'
import Stage4 from './Stage4'
import Stage5 from './Stage5'

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

	setAmount(value) {
		this.app.setState({ amount: value })
	}

	setStage(stage) {
		this.app.setState({ currentStage: stage })
	}

	updateAddress(newAddress) {
		let address = Object.assign({}, this.app.state.address, newAddress)
		this.app.setState({ address: address })
	}
}

class Application extends Component {
	constructor(props) {
		super(props)

		/* This avoids binding every parent event to itself 
		   and passing them to child components individually */
		this.interface = new ApplicationInterface(this)

		this.state = {
			words: 'Testing things in React',
			amount: 0,
			currentStage: 'stage5',
			address: { 
				line1: '', 
				line2: '', 
				line3: '', 
				line4: '',
				locality: '',
				towncity: '',
				county: ''
				}
		}

		this.stages = [
			{ name: 'stage1', desc: 'Test 1' },
			{ name: 'stage2', desc: 'Test 2' },
			{ name: 'stage3', desc: 'Test 3' },
			{ name: 'stage4', desc: 'Test 4' },
			{ name: 'stage5', desc: 'Test 5' },
		]

		this.components = {
			stage1: () => <Stage1 amount={this.state.amount} appInterface={this.interface} />,
			stage2: () => <Stage2 words={this.state.words} appInterface={this.interface} />,
			stage3: () => <Stage3 appInterface={this.interface} />,
			stage4: () => <Stage4 appInterface={this.interface} />,
			stage5: () => <Stage5 address={this.state.address} appInterface={this.interface} />,
		}
	}

	render() {
		this.interface.logTime('Application')

		return (
			<React.Fragment>
				<Header target="header" words={this.state.words} appInterface={this.interface} />
				<Navigation target="nav" currentStage={this.state.currentStage} appInterface={this.interface} stages={this.stages} />
				<StageContainer target="section" currentStage={this.state.currentStage} appInterface={this.interface} components={this.components} />
			</React.Fragment>
		)
	}
}

export default Application