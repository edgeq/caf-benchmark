import React, { Component } from "react";

import API from "../utils/API";

import LocationBox from "./children/LocationBox";
import DemographicsBox from "./children/DemographicsBox";
import SchoolsBox from "./children/SchoolsBox";

class Content extends Component {

	state = {
	  };


	render () {
		return (
			<div id="content-wrapper" className="animated fadeIn col-sm-9">
				<div className="row contentRow">
					<LocationBox />
				</div>
				<div className="row contentRow">
					<DemographicsBox />
					<SchoolsBox />
				</div>
			</div>
		)
	};
};

export default Content;
