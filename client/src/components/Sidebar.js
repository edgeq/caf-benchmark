import React, { Component } from "react";

import API from "../utils/API";

class SideBar extends Component {

	state = {
		users: []
	  };

	componentDidMount() {
		this.loadUsers();
	}

	loadUsers = () => {
		API.getUsers()
			.then(res =>
			this.setState({ users: res.data})
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
						<p className="sidebarNumber">99999</p>
					</div>
					<div className="sidebarGraph"></div>
					<div className="separator"></div>
					<div className="sidebarBox">
						<p>Total Users</p>
						<p className="sidebarNumber">{this.state.users}</p>
					</div>
					<div className="sidebarGraph"></div>
					<div className="separator"></div>
					<div className="sidebarBox">
						<p>Total Submissions</p>
						<p className="sidebarNumber">999</p>
					</div>
					<div className="sidebarGraph"></div>
					<div className="separator"></div>
					<div className="sidebarBox">
						<p>Submissions Today</p>
						<p className="sidebarNumber">999</p>
					</div>
					<div className="sidebarGraph"></div>
				</div>
			</div>
		)
	};
};

export default SideBar;
