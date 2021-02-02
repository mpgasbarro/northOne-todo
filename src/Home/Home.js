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
			allTodos: {
				todo: '',
				description: '',
				urgency: '',
			},
			arrayOfTodos: [],
		};
	}

	handleChange = (e) => {
		const { todo, value } = e.target;

		this.setState((prevState) => ({
			todos: { ...prevState.allTodos, [todo]: value },
		}));
	};

	handleSubmit = (e) => {
		e.preventDefault();

		this.setState((prevState) => ({
			arrayOfTodos: [...prevState.arrayOfTodos, prevState.allTodos],
			allTodos: { todo: '', description: '', urgency: '' },
		}));
	};

	// handleChangeTodo = (e) => {
	//     this.setState({ todo: e.target.value })
	//     this.setState({allTodos[todo]: e.target.value});
	// };
	// handleChangeDescription = (e) => {
	// 	this.setState({ description: e.target.value });
	// };
	// handleChangeUrgency = (e) => {
	// 	this.setState({ urgency: e.target.value });
	// };
	// handleChangeDate = (date) => {
	// 	this.setState({ date });
	// };

	// onSubmit = (e) => {
	// 	e.preventDefault();
	// 	this.setState({ showList: true });
	// };

	render() {
		console.log(this.state.allTodos);
		console.log(this.state.arrayOfTodos);
		return (
			<div>
				<header> Task Buddy</header>
				<div>
					<form>
						<label>
							To-Do:
							<input
								type='text'
								name='todo'
								value={this.state.allTodos.todo}
								onChange={this.handleChange}
							/>
						</label>
						<label>
							Description:
							<input
								type='text'
								name='description'
								onChange={this.handleChange}
								value={this.state.allTodos.description}
							/>
						</label>
						<label>
							Urgency:
							<input
								type='text'
								name='urgency'
								onChange={this.handleChange}
								value={this.state.allTodos.urgency}
							/>
						</label>
						<label>
							Date:
							{/* <Calendar
								// value={this.state.date}
								onChange={this.handleChangeDate}
							/> */}
						</label>
						<button onClick={this.handleSubmit}> Submit</button>
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
