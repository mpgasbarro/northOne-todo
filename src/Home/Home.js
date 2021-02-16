import React, { Component } from 'react';
import Calendar from 'react-calendar';
import Todos from '../Todos/Todos';
import Modal from '../Modal/Modal';
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
			showModal: false,
			index: 0,
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

		if (this.state.showModal) {
			this.state.arrayOfTodos.splice(this.state.index, 1);
			this.setState({ showModal: false });
		}
	};

	handleShowModal = (index) => {
		console.log(index);
		this.setState({ index: index });
		this.setState({ showModal: true });
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
								index={this.state.index}
								todo={this.state.arrayOfTodos}
								showModal={this.state.showModal}
								handleShowModal={this.handleShowModal}
							/>
						</div>
					)}
					{this.state.showModal && (
						<div>
							<Modal
								todo={this.state.arrayOfTodos}
								handleChangeTodo={this.handleChangeTodo}
								handleChangeDescription={this.handleChangeDescription}
								handleChangeUrgency={this.handleChangeUrgency}
								handleChangeDate={this.handleChangeDate}
								handleSubmit={this.handleSubmit}
							/>
						</div>
					)}
				</div>
			</div>
		);
	}
}

export default Home;
