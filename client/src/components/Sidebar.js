import React, { Component } from "react";

const SideBar = () => {
	return (
		<div id="sidebar">
			<p>Overview</p>
			<div class="sidebarBox">
				<p>Active Users</p>
				<p class="sidebarNumber">99999</p>
			</div>
			<div class="sidebarBox">
				<p>Total Users</p>
				<p class="sidebarNumber">99999</p>
			</div>
			<div class="sidebarBox">
				<p>Total Submissions</p>
				<p class="sidebarNumber">999</p>
			</div>
			<div class="sidebarBox">
				<p>Submissions Today</p>
				<p class="sidebarNumber">999</p>
			</div>
		</div>
	);
};

export default SideBar;
