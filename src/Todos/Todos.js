import React, { useState } from 'react';
import Calendar from 'react-calendar';

const Todos = (props) => {
	const update = (index) => {
		setShowModal(true);
		console.log(index);
		return (
			<div>
				<form>
					<label>
						To-Do:
						<input
							type='text'
							name='todo'
							value={props.todo.todo}
							placeholder={props.todo[index].todo}
						/>
					</label>
					<label>
						Description:
						<input
							type='text'
							name='description'
							// onChange={this.handleChangeDescription}
							value={props.todo.description}
						/>
					</label>
					<label>
						Urgency:
						<input
							type='text'
							name='urgency'
							// onChange={this.handleChangeUrgency}
							value={props.todo.urgency}
						/>
					</label>
					<label>
						Date:
						<Calendar
							// value={this.state.date}
							// onChange={this.handleChangeDate}
							value={props.todo.date}
						/>
					</label>
					<button> Submit</button>
				</form>
			</div>
		);
	};

	const [showModal, setShowModal] = useState(false);

	return (
		<div>
			{props.todo.map((x, index) => {
				return (
					<div>
						<li key={index}>
							{' '}
							{index}
							{x.todo} {x.description} {x.urgency} {x.date.toString()}{' '}
							<button onClick={this.update.bind(this, index)}>Update</button>
							<button> Delete</button>
						</li>
					</div>
				);
			})}
			{showModal && (
				<div>
					{' '}
					<update />{' '}
				</div>
			)}
		</div>
	);
};

export default Todos;
