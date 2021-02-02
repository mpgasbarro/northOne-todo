import React, { useState } from 'react';
import Calendar from 'react-calendar';

const Todos = (props) => {
	const update = (index) => {
		setShowModal(true);

		return (
			<div>
				<form>
					<label>
						To-Do:
						<input
							type='text'
							name='todo'
							value={props.todo[index].todo}
							placeholder={props.todo[index].todo}
						/>
					</label>
					<label>
						Description:
						<input
							type='text'
							name='description'
							placeholder={props.todo[index].description}
							value={props.todo[index].description}
						/>
					</label>
					<label>
						Urgency:
						<input
							type='text'
							name='urgency'
							placeholder={props.todo[index].urgency}
							value={props.todo[index].urgency}
						/>
					</label>
					{/* <label>
						Date:
						<Calendar
							// value={this.state.date}
							// onChange={this.handleChangeDate}
							value={props.todo.date}
						/>
					</label>
					<button> Submit</button> */}
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
							<button onClick={update.bind(this, index)}>Update</button>
							<button> Delete</button>
						</li>
					</div>
				);
			})}
			{showModal && (
				<div>
					{' '}
					return (
					<div>
						<form>
							<label>
								To-Do:
								<input
									type='text'
									name='todo'
									value={props.todo[index].todo}
									placeholder={props.todo[index].todo}
								/>
							</label>
							<label>
								Description:
								<input
									type='text'
									name='description'
									placeholder={props.todo[index].description}
									value={props.todo[index].description}
								/>
							</label>
							<label>
								Urgency:
								<input
									type='text'
									name='urgency'
									placeholder={props.todo[index].urgency}
									value={props.todo[index].urgency}
								/>
							</label>
							{/* <label>
						Date:
						<Calendar
							// value={this.state.date}
							// onChange={this.handleChangeDate}
							value={props.todo.date}
						/>
					</label>
					<button> Submit</button> */}
						</form>
					</div>
					);{' '}
				</div>
			)}
		</div>
	);
};

export default Todos;
