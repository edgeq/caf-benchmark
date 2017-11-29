import React, { Component } from "react";

import Routes from "../../../app/routes/api-routes"

const SideBar = () => {

	// const Routes.app.get
	return (
		<div id="sidebar">
			<div class="row">
				<div className="sidebarBox">
				<h2>Overview</h2>
					<p>Active Users</p>
					<p className="sidebarNumber">99999</p>
				</div>
				<div className="sidebarGraph"></div>
				<div className="separator"></div>
				<div className="sidebarBox">
					<p>Total Users</p>
					<p className="sidebarNumber">99999</p>
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
	);
};

export default SideBar;
