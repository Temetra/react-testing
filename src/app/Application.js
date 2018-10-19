import React from 'react'
import * as Log from '../lib/Logging'
import ApplicationState from './ApplicationState'
import Header from './Header'
import Navigation from './Navigation'
import StageContainer from './StageContainer'
import Stage1 from './Stage1'
import Stage2 from './Stage2'
import Stage3 from './Stage3'
import Stage4 from './Stage4'
import Stage5 from './Stage5'

class Application extends ApplicationState {
	constructor(props) {
		super(props)

		// Stages available for navigation
		this.stages = [
			{ name: 'stage1', desc: 'Test 1' },
			{ name: 'stage2', desc: 'Test 2' },
			{ name: 'stage3', desc: 'Test 3' },
			{ name: 'stage4', desc: 'Test 4' },
			{ name: 'stage5', desc: 'Test 5' },
		]

		// Stage components
		this.components = {
			stage1: () => <Stage1 amount={this.state.amount} onAmountChange={this.handleAmountChange} />,
			stage2: () => <Stage2 words={this.state.words} onWordsChange={this.handleWordsChange} />,
			stage3: () => <Stage3 />,
			stage4: () => <Stage4 />,
			stage5: () => <Stage5 address={this.state.address} onAddressChange={this.handleAddressChange} />,
		}
	}

	render() {
		Log.message('Application')

		return (
			<React.Fragment>
				<Header target="header" words={this.state.words} />
				<Navigation target="nav" stages={this.stages} currentStage={this.state.currentStage} onStageChange={this.handleStageChange} />
				<StageContainer target="section" components={this.components} currentStage={this.state.currentStage} />
			</React.Fragment>
		)
	}
}

export default Application