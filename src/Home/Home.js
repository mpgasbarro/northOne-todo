import React, { Component } from 'react';
import Calendar from 'react-calendar';
import Todos from '../Todos/Todos';
import 'react-calendar/dist/Calendar.css';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			allTodos: {
				todo: '',
				description: '',
				urgency: '',
				date: new Date(),
			},
			showList: false,
			arrayOfTodos: [],
		};
	}

	handleChangeTodo = (e) => {
		this.setState({
			allTodos: {
				...this.state.allTodos,
				todo: e.target.value,
			},
		});
	};
	handleChangeDescription = (e) => {
		this.setState({
			allTodos: {
				...this.state.allTodos,
				description: e.target.value,
			},
		});
	};
	handleChangeUrgency = (e) => {
		this.setState({
			allTodos: {
				...this.state.allTodos,
				urgency: e.target.value,
			},
		});
	};
	handleChangeDate = (date) => {
		this.setState({
			allTodos: {
				...this.state.allTodos,
				date: date,
			},
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();

		this.setState((prevState) => ({
			arrayOfTodos: [...prevState.arrayOfTodos, prevState.allTodos],
			allTodos: { todo: '', description: '', urgency: '', date: new Date() },
		}));
		this.setState({ showList: true });
	};

	render() {
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
								onChange={this.handleChangeTodo}
							/>
						</label>
						<label>
							Description:
							<input
								type='text'
								name='description'
								onChange={this.handleChangeDescription}
								value={this.state.allTodos.description}
							/>
						</label>
						<label>
							Urgency:
							<input
								type='text'
								name='urgency'
								onChange={this.handleChangeUrgency}
								value={this.state.allTodos.urgency}
							/>
						</label>
						<label>
							Date:
							<Calendar
								// value={this.state.date}
								onChange={this.handleChangeDate}
								value={this.state.allTodos.date}
							/>
						</label>
						<button onClick={this.handleSubmit}> Submit</button>
					</form>
					{this.state.showList && (
						<div>
							<Todos
								handleChangeTodo={this.handleChangeTodo}
								handleChangeDescription={this.handleChangeDescription}
								handleChangeUrgency={this.handleChangeUrgency}
								handleChangeDate={this.handleChangeDate}
								handleSubmit={this.handleSubmit}
								todo={this.state.arrayOfTodos}
							/>
						</div>
					)}
				</div>
			</div>
		);
	}
}

export default Home;
