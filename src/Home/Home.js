import React, { Component } from 'react';
import Calendar from 'react-calendar';
import Todos from '../Todos/Todos';
import Modal from '../Modal/Modal';
// import 'react-calendar/dist/Calendar.css';
import './Home.css';

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

	// Handles the change of the To-do task
	handleChangeTodo = (e) => {
		this.setState({
			allTodos: {
				...this.state.allTodos,
				todo: e.target.value,
			},
		});
	};

	// Handles the change of the Description
	handleChangeDescription = (e) => {
		this.setState({
			allTodos: {
				...this.state.allTodos,
				description: e.target.value,
			},
		});
	};

	// Handles the change of the Urgency
	handleChangeUrgency = (e) => {
		this.setState({
			allTodos: {
				...this.state.allTodos,
				urgency: e.target.value,
			},
		});
	};

	// Handles the change of the Date
	handleChangeDate = (date) => {
		this.setState({
			allTodos: {
				...this.state.allTodos,
				date: date,
			},
		});
	};

	// Used on all Submit buttons throughout App
	handleSubmit = (e) => {
		e.preventDefault();

		// Sets the state of arrayOfTodos, which we will then pass down to our child component
		this.setState((prevState) => ({
			arrayOfTodos: [...prevState.arrayOfTodos, prevState.allTodos],
			// Resetting the values of allTodos, for additional user input
			allTodos: { todo: '', description: '', urgency: '', date: new Date() },
		}));
		// Setting the showList state to true, to show our todo list
		this.setState({ showList: true });

		// If showModal is true, we will then splice out the old value at that index and replace with the new. Also resets Modal value to false
		if (this.state.showModal) {
			this.state.arrayOfTodos.splice(this.state.index, 1);
			this.setState({ showModal: false });
		}
	};

	// Handles setting the state of Index from the Todos component and sets the state of showing the modal
	handleShowModal = (index) => {
		this.setState({ index: index });
		this.setState({ showModal: true });
	};

	// Handles deleting an item
	handleDelete = (index) => {
		this.state.arrayOfTodos.splice(this.state.index, 1);
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
								value={this.state.date}
								onChange={this.handleChangeDate}
								value={this.state.allTodos.date}
							/>
						</label>
						<button onClick={this.handleSubmit}> Submit</button>
					</form>
					{/* Conditionally rendering the list of to-do items */}
					{this.state.showList && (
						<div>
							<Todos
								index={this.state.index}
								todo={this.state.arrayOfTodos}
								showModal={this.state.showModal}
								handleShowModal={this.handleShowModal}
								handleDelete={this.handleDelete}
							/>
						</div>
					)}
					{/* Conditionally shows the modal while updating the task */}
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
