import React, { Component } from 'react';
import _ from "lodash";

function colorAvatar(){
		const color = _.sample(['#CC2A41', '#2E112D', '#7C0032', '#000', '#EE4136', '#7C0032', '#FB8147' ]);
		return color;
	}

export default (props) => {	
	const color = colorAvatar();  
	const { todo, actions } = props

  	return (
		<div className="task-section">
	    	 <div className="row ">
	     		<div className="col-md-1">
			      	<div className="avatar-circle" style={{backgroundColor: todo.complete ? '#3B99FC' : color}}>
					  <span className="initials">{todo.avatar}</span> 
					</div>      
				</div>
				<div className="col-md-9 task-row">
				    <span className={todo.complete ? 'task-title-complete' : 'task-title' } style={{color: todo.complete ? '#3B99FC' : color}}>{todo.title} </span>   
				</div>
				<div className="col-md-2 text-right">
			      <input
			        type="checkbox"
			        className="check-task"
			        onChange={() => actions.completeTodo(todo.id)}
			        defaultChecked={todo.complete}
			      />     
				</div>
			</div>
		</div>
	)
}

