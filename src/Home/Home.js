import React, { Component } from 'react';
import Calendar from 'react-calendar';
import Todos from '../Todos/Todos';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todo: '',
			description: '',
			urgency: '',
			date: '',
			showList: false,
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
	handleChangeDate = (date) => {
		this.setState({ date });
	};

	onSubmit = (e) => {
		e.preventDefault();
		this.setState({ showList: true });
	};

	render() {
		console.log(this.state.todo);
		console.log(this.state.showList);
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
							{/* <Calendar
								// value={this.state.date}
								onChange={this.handleChangeDate}
							/> */}
						</label>
						<button onClick={this.onSubmit}> Submit</button>
					</form>
					{this.state.showList && (
						<div>
							<Todos todo={this.state.todo} />
						</div>
					)}
				</div>
			</div>
		);
	}
}

export default Home;
