import React, { Component } from 'react'

// This is sub-component of StageContainer
class Stage5 extends Component {
	constructor(props) {
		super(props)

		// App ref
		this.application = props.appInterface
		
		// Event binding
		this.handleChange = this.handleChange.bind(this)
	}

	render() {
		this.application.logTime('Stage5')

		return (
			<React.Fragment>
				<h2>Test 5</h2>
				<p>This edits values of an object in the application state.</p>
				<AddressItem label="Line 1" name="line1" value={this.props.address.line1} onChange={this.handleChange} />
				<AddressItem label="Line 2" name="line2" value={this.props.address.line2} onChange={this.handleChange} />
				<AddressItem label="Line 3" name="line3" value={this.props.address.line3} onChange={this.handleChange} />
				<AddressItem label="Line 4" name="line4" value={this.props.address.line4} onChange={this.handleChange} />
				<AddressItem label="Town/city" name="towncity" value={this.props.address.towncity} onChange={this.handleChange} />
				<AddressItem label="County" name="county" value={this.props.address.county} onChange={this.handleChange} />
			</React.Fragment>
		)
	}

	handleChange(event) {
		let name = event.target.name
		let value = event.target.value
		this.application.setAddress(name, value)
	}
}

function AddressItem(props) {
	return (
		<label className="big">
			{props.label}: <input name={props.name} value={props.value} type="text" onChange={props.onChange} />
		</label>
	)
}

export default Stage5