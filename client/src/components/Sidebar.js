import React, { Component } from "react";
import ActiveUsersGraph from "./Sidebar/ActiveUsersGraph";
import TotalUsersGraph from "./Sidebar/TotalUsersGraph";
import FinalizedProjectsGraph from "./Sidebar/FinalizedProjectsGraph";
import ActiveProjectsGraph from "./Sidebar/ActiveProjectsGraph";


import API from "../utils/API";

class SideBar extends Component {

	state = {

		totalUsers: ['totalUsers'],
		activeUsers: ['activeUsers'],
		submissions: ['submissions'],
		dailySubmissions: ['dailySubmissions'],

	  };

	componentDidMount() {
		this.loadUsers();
		this.loadActusers();
		this.loadTotsubs();
		this.loadActprojects();
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


	};

	loadActprojects = () => {
		API.getActprojects()
			.then(res => {
			console.log(res)
			this.setState({ dailySubmissions: res.data[0].subCount})
			})
			.catch(err => console.log(err));
	};



	render () {
		return (
			<div id="sidebar-wrapper" className="animated fadeInLeftBig col-sm-3">
				<div className="container-fluid">
					<h2>Overview</h2>

					<div className="sidebarBox animated slideInLeft" id="activeUsersBox">
						<p className="sidebarTitle">Active Users</p>
						<p className="sidebarNumber">{this.state.activeUsers}</p>
						<ActiveUsersGraph />
					</div>

					<div className="separator"></div>

					<div className="sidebarBox animated slideInLeft" id="totalUsersBox">
						<p className="sidebarTitle">Total Users</p>
						<p className="sidebarNumber">{this.state.totalUsers}</p>
						<TotalUsersGraph />
					</div>

					<div className="separator"></div>

					<div className="sidebarBox animated slideInLeft" id="finalizedProjectsBox">
						<p className="sidebarTitle">Finalized Projects</p>
						<p className="sidebarNumber">{this.state.submissions}</p>
						<FinalizedProjectsGraph />
					</div>

					<div className="separator"></div>

					<div className="sidebarBox animated slideInLeft" id="activeProjectsBox">
						<p className="sidebarTitle">Active Projects</p>
						<p className="sidebarNumber">{this.state.dailySubmissions}</p>
						<ActiveProjectsGraph />
					</div>

				</div>
			</div>
		)
	};
};

export default SideBar;
