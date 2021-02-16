import React, { Component } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

class Modal extends Component {
	render(props) {
		return (
			<div>
				<form>
					<label>
						To-Do:
						<input
							type='text'
							name='todo'
							value={this.props.todo.todo}
							onChange={this.props.handleChangeTodo}
							placeholder={this.props.todo.todo}
						/>
					</label>
					<label>
						Description:
						<input
							type='text'
							name='description'
							onChange={this.props.handleChangeDescription}
							value={this.props.todo.description}
						/>
					</label>
					<label>
						Urgency:
						<input
							type='text'
							name='urgency'
							onChange={this.props.handleChangeUrgency}
							value={this.props.todo.urgency}
						/>
					</label>
					<label>
						Date:
						<Calendar
							// value={this.state.date}
							onChange={this.props.handleChangeDate}
							value={this.props.todo.date}
						/>
					</label>
					<button onClick={this.props.handleSubmit}> Submit</button>
				</form>
			</div>
		);
	}
}

export default Modal;
