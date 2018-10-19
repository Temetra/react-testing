import { Component } from 'react'

export default class ApplicationState extends Component {
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