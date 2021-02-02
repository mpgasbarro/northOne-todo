import React from 'react';

const Todos = (props) => {
	console.log(props.todo[0].todo);
	return (
		<div>
			{props.todo.map((x) => {
				return (
					<div>
						<li>
							<button>
								{' '}
								{x.todo} {x.description} {x.urgency} {x.date.toString()}{' '}
							</button>
						</li>
					</div>
				);
			})}
		</div>
	);
};

export default Todos;
