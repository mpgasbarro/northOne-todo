import React, { useState } from 'react';
import Calendar from 'react-calendar';

const Todos = (props) => {
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
							<button onClick={props.handleShowModal}>Update</button>
							<button> Delete</button>
						</li>
					</div>
				);
			})}
		</div>
	);
};

export default Todos;
