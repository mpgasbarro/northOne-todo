import React, { Component } from 'react';
import Calendar from 'react-calendar';

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
	handleChangeDescription = (e) => {
		this.setState({ description: e.target.value });
	};
	handleChangeUrgency = (e) => {
		this.setState({ urgency: e.target.value });
	};
	handleChangeDate = (e) => {
		this.setState({ todo: e.target.value });
	};

	render() {
		console.log(this.state.todo);
		console.log(this.state.description);
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
							<input
								type='text'
								name='description'
								onChange={this.handleChangeDescription}
							/>
						</label>
						<label>
							Urgency:
							<input
								type='text'
								name='urgency'
								onChange={this.handleChangeUrgency}
							/>
						</label>
						<label>
							Date:
							<Calendar />
						</label>
						<button> Submit</button>
					</form>
				</div>
			</div>
		);
	}
}

export default Home;
