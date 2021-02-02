import React, { Component } from 'react';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todo: '',
			description: '',
			urgency: '',
			date: '',
		};
	}
	render() {
		return (
			<div>
				<header> Task Buddy</header>
				<div>
					<form>
						<label>
							To-Do:
							<input type='text' name='task' />
						</label>
						<label>
							Description:
							<input type='text' name='description' />
						</label>
						<label>
							Urgency:
							<input type='text' name='urgency' />
						</label>
						<label>
							Date:
							<input type='text' name='date' />
						</label>
					</form>
				</div>
			</div>
		);
	}
}

export default Home;
