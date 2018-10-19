import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'
import * as Log from '../lib/LogTime.js'

// This is sub-component of Application
// It is rendered into a different element in index.html
class Navigation extends PureComponent {
	constructor(props) {
		super(props)

		// Where to render this component
		this.portalTarget = document.querySelector(props.target)

		// Other data
		this.stages = props.stages
	}

	render() {
		Log.message('Navigation')

		let content = (
			<React.Fragment>
				{this.stages.map((stage) => {
					return (
						<label key={stage.name}>
							<input type="radio" name="navi" value={stage.name}
								checked={this.props.currentStage === stage.name}
								onChange={(event) => this.navChanged(event)} />
							{stage.desc}
						</label>
					)
				})}
			</React.Fragment>
		)

		return ReactDOM.createPortal(content, this.portalTarget)
	}

	navChanged(event) {
		this.props.onStageChange(event.target.value)
	}
}

export default Navigation