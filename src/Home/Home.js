import React, { Component } from 'react';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div>
				<header> Task Buddy</header>
				<div>
					<form>
						<label>
							<input type='text' name='task' />
						</label>
					</form>
				</div>
			</div>
		);
	}
}

export default Home;
