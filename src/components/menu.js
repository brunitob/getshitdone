import React, { Component } from 'react';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as TodoActions from '../actions';

class HeaderMenu extends Component{
	
	render(){
		
	console.log('estamos',this.props.actions);
		return(

			<nav className="navbar navbar-custom" role="navigation">
			    
			    <div className="navbar-header">
			      
		  			<ul className="nav navbar-nav navbar-left">
				        <li>
				        	 <i className="fa fa-check-circle-o icon-menu fa-2x" aria-hidden="true"></i> <span className="logo-gsd"> GetShitDone </ span>
				        	
				        </li>
			        </ul> 
			    </div>
			    
			    <div className="collapse navbar-collapse" id="navbar-collapse-1">
			      <ul className="nav navbar-nav navbar-right">
			        <li>
			        	<Link to="/new"  className="btn btn-success"> 
			        		Add Task
			        	</Link>
			        </li>
			      </ul>
			    </div>
			</nav>

			);
	}
}


const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(TodoActions, dispatch)
})

export default connect(null,
  mapDispatchToProps)(HeaderMenu);