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

	handleChangeTodo = (e) => {
		this.setState({ todo: e.target.value });
	};

	render() {
		console.log(this.state.todo);
		return (
			<div>
				<header> Task Buddy</header>
				<div>
					<form>
						<label>
							To-Do:
							<input type='text' name='todo' onChange={this.handleChangeTodo} />
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
