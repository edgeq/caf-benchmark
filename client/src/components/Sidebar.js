import React, { Component } from "react";

import API from "../utils/API";

class SideBar extends Component {

	state = {
		activeUsers: ['activeUsers'],
		totalUsers: ['totalUsers'],
		submissions: ['submissions'],
		dailySubmissions: ['dailySubmissions']
	  };

	componentDidMount() {
		this.loadUsers();
	}

	loadUsers = () => {
		API.getUsers()
			.then(res =>
			this.setState({ activeUsers: res.data})
			)
			.catch(err => console.log(err));
	};

	// const Routes.app.get
	render () {
		return (
			<div id="sidebar">
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
