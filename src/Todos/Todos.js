import React, { useState } from 'react';
import Calendar from 'react-calendar';

const Todos = (props) => {
	console.log(props.handleSubmit);

	const update = (index) => {
		setShowModal(true);
	};

	const [showModal, setShowModal] = useState(false);

	return (
		<div>
			{props.todo.map((x, index) => {
				return (
					<div>
						<li key={index}>
							{index}
							{x.todo} {x.description} {x.urgency} {x.date.toString()}{' '}
							<button onClick={update.bind(this, index)}>Update</button>
							<button> Delete</button>
						</li>
					</div>
				);
			})}
			{showModal && (
				<div>
					<form>
						<label>
							To-Do:
							<input
								type='text'
								name='todo'
								value={props.todo.todo}
								onChange={props.handleChangeTodo}
								placeholder={props.todo.todo}
							/>
						</label>
						<label>
							Description:
							<input
								type='text'
								name='description'
								onChange={props.handleChangeDescription}
								value={props.todo.description}
							/>
						</label>
						<label>
							Urgency:
							<input
								type='text'
								name='urgency'
								onChange={props.handleChangeUrgency}
								value={props.todo.urgency}
							/>
						</label>
						<label>
							Date:
							<Calendar
								// value={this.state.date}
								onChange={props.handleChangeDate}
								value={props.todo.date}
							/>
						</label>
						<button onClick={props.handleSubmit}> Submit</button>
					</form>
				</div>
			)}
		</div>
	);
};

export default Todos;
