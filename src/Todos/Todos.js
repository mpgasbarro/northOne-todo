import React, { useState } from 'react';
import Calendar from 'react-calendar';

const Todos = (props) => {
	return (
		<div>
			{props.todo.map((x, index) => {
				return (
					<div>
						<li key={index}>
							{index}
							{x.todo} {x.description} {x.urgency} {x.date.toString()}{' '}
							<button
								index={index}
								onClick={() => props.handleShowModal(index)}>
								Update
							</button>
							<button> Delete</button>
						</li>
					</div>
				);
			})}
		</div>
	);
};

export default Todos;
