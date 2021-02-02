import React from 'react';

const Todos = (props) => {
	console.log(props.todo[0].todo);
	return (
		<div>
			{props.todo.map((x) => {
				return (
					<div>
						<h1>
							{' '}
							{x.todo} {x.description}{' '}
						</h1>
					</div>
				);
			})}
		</div>
	);
};

export default Todos;
