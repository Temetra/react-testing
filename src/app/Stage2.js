import React, { PureComponent } from 'react'
import * as Log from '../lib/LogTime.js'

// This is sub-component of StageContainer
class Stage2 extends PureComponent {
	render() {
		Log.message('Stage2')

		return (
			<React.Fragment>
				<h2>Test 2</h2>
				<p>This edits text stored in application state, which is also used by the header component.</p>
				<p><input type="text" className="big" value={this.props.words} onChange={(event) => this.handleChange(event)} /></p>
			</React.Fragment>
		)
	}

	handleChange(event) {
		let value = event.target.value
		this.props.onWordsChange(value)
	}
}

export default Stage2