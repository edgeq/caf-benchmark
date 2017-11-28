import React, { Component } from "react";

const NavBar = () => {
	return (
		<div class="topnav" id="myTopnav">
			<a class="active" href="#home">
				Home
			</a>
			<a href="#news">News</a>
			<a href="#contact">Contact</a>
			<a href="#about">About</a>
		</div>
	);
};

export default NavBar;
