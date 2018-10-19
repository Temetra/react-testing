import { Component } from 'react'

export default class ApplicationState extends Component {
	constructor(props) {
		super(props)

		// Initial state
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

	handleStageChange(currentStage) {
		this.setState({ currentStage })
	}

	handleWordsChange(words) {
		this.setState({ words })
	}

	handleAmountChange(amount) {
		this.setState({ amount })
	}

	handleAddressChange(newAddress) {
		let address = Object.assign({}, this.state.address, newAddress)
		this.setState({ address: address })
	}
}