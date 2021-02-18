import React, { useState } from 'react';
import Calendar from 'react-calendar';

const Todos = (props) => {
	return (
		<div>
			{props.todo.map((x, index) => {
				return (
					<div>
						<li key={index}>
							To-Do: {x.todo} Description: {x.description} How Urgent:{' '}
							{x.urgency} Due on: {x.date.toString()}{' '}
							<button
								index={index}
								onClick={() => props.handleShowModal(index)}>
								Update
							</button>
							<button onClick={() => props.handleDelete(index)}> Delete</button>
						</li>
					</div>
				);
			})}
		</div>
	);
};

export default Todos;
