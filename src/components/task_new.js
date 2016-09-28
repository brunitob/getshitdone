import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { addTodo } from '../actions/index';
import { Link } from 'react-router';


class TaskNew extends Component{
	static contextTypes = {
		//para tener acceso a router 
		router: PropTypes.object
	}

	onSubmit(props){
		this.props.addTodo(props)
		//navigate to index
		this.context.router.push('/')
	}

	render(){
		const { fields: {title, complete}, handleSubmit} = this.props;
		return(
			<div className="task-new">
				<form onSubmit={handleSubmit(this.onSubmit.bind(this))} className="form-inline">
				  <div className="form-group">
				    <input type="text" className="form-control input-task" placeholder="Accomplish more, every day. Start with your daily tasks" {...title} />
				  </div>
				  <button type="submit" className="btn btn-success hidden">Crear task</button>
				</form>
			</div>

			);
	}
}



export default reduxForm({
	form: 'TaskNewForm',
	fields: ['title', 'complete']}, null, { addTodo }
)(TaskNew);