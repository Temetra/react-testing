import React, { Component } from 'react'
import * as Log from './LogTime.js'
import Header from './Header'
import Navigation from './Navigation'
import StageContainer from './StageContainer'
import Stage1 from './Stage1'
import Stage2 from './Stage2'
import Stage3 from './Stage3'
import Stage4 from './Stage4'
import Stage5 from './Stage5'

class ApplicationState extends Component {
	constructor(props) {
		super(props)

		this.state = {
			currentStage: 'stage1',
			words: 'Testing things in React',
			amount: 0,
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
	}
	
	setWords(words) {
		this.setState({ words })
	}

	setAmount(value) {
		this.setState({ amount: value })
	}

	setStage(stage) {
		this.setState({ currentStage: stage })
	}

	setAddress(newAddress) {
		let address = Object.assign({}, this.state.address, newAddress)
		this.setState({ address: address })
	}
}

class Application extends ApplicationState {
	constructor(props) {
		super(props)

		this.stages = [
			{ name: 'stage1', desc: 'Test 1' },
			{ name: 'stage2', desc: 'Test 2' },
			{ name: 'stage3', desc: 'Test 3' },
			{ name: 'stage4', desc: 'Test 4' },
			{ name: 'stage5', desc: 'Test 5' },
		]

		this.components = {
			stage1: () => <Stage1 amount={this.state.amount} onAmountChange={(value) => this.setAmount(value)} />,
			stage2: () => <Stage2 words={this.state.words} onWordsChange={(value) => this.setWords(value)} />,
			stage3: () => <Stage3 />,
			stage4: () => <Stage4 />,
			stage5: () => <Stage5 address={this.state.address} onAddressChange={(value) => this.setAddress(value)} />,
		}
	}

	render() {
		Log.message('Application')

		return (
			<React.Fragment>
				<Header target="header" words={this.state.words} />
				<Navigation target="nav" stages={this.stages} currentStage={this.state.currentStage} onStageChange={(value) => this.setStage(value)} />
				<StageContainer target="section" components={this.components} currentStage={this.state.currentStage} />
			</React.Fragment>
		)
	}
}

export default Application