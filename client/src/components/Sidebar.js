import React, { Component } from "react";

import API from "../utils/API";

class SideBar extends Component {

	state = {
		
		totalUsers: ['totalUsers'],
		activeUsers: ['activeUsers'],
		submissions: ['submissions']

		
		
	  };

	componentDidMount() {
		this.loadUsers();
		this.loadActusers();
		this.loadTotsubs();
	}

	loadUsers = () => {
		API.getUsers()
			.then(res => {
			console.log(res)
			this.setState({ totalUsers: res.data[0].userCount})
			})
			.catch(err => console.log(err));
	};


	loadActusers = () => {
		API.getActusers()
			.then(res => {
			console.log(res)
			this.setState({ activeUsers: res.data[0].actCount})
			})
			.catch(err => console.log(err));
	};

	loadTotsubs = () => {
		API.getTotsubs()
			.then(res => {
			console.log(res)
			this.setState({ submissions: res.data[0].subCount})
			})
			.catch(err => console.log(err));
	}
	


	render () {
		return (
			<div id="sidebar-wrapper" className="animated slideInLeft col-sm-3">
				<div className="row">
					<div className="sidebarBox">
						<h2>Overview</h2>
						<p>Active Users</p>
						<p className="sidebarNumber">{this.state.activeUsers}</p>
					</div>
					<div className="sidebarGraph"></div>
					<div className="separator"></div>
					<div className="sidebarBox">
						<p>Total Users</p>
						<p className="sidebarNumber">{this.state.totalUsers}</p>
					</div>
					<div className="sidebarGraph"></div>
					<div className="separator"></div>
					<div className="sidebarBox">
						<p>Total Submissions</p>
						<p className="sidebarNumber">{this.state.submissions}</p>
					</div>
					<div className="sidebarGraph"></div>
					<div className="separator"></div>
					<div className="sidebarBox">
						<p>Submissions Today</p>
						<p className="sidebarNumber">{this.state.dailySubmissions}</p>
					</div>
					<div className="sidebarGraph"></div>
				</div>
			</div>
		)
	};
};

export default SideBar;
