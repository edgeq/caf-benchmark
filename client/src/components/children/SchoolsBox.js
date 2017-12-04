import React, { Component } from "react";
import API from "../../utils/API";


const schoolsArr = [
    {name: 'IIT', count: '999'},
    {name: 'University of Chicago', count: '777'}, 
    {name: 'UIC', count: '888'}, 
    {name: 'School', count: '888'}, 
    {name: 'School', count: '888'}, 
    {name: 'School', count: '888'}, 
    {name: 'School', count: '888'}, 
    {name: 'School', count: '888'}, 
    {name: 'School', count: '888'}, 
    {name: 'School', count: '888'}, 
]

class SchoolsBox extends Component {
    
    state = {
		schools: schoolsArr
    };


    render () {
        return (
            <div id="schoolsBox" className="animated fadeInUp col-sm-6">
                <div className="boxContent">
                    <h3>SCHOOLS</h3>
                    <div id="schoolsContent" className="container-fluid">
                        <div className="row">
                            <ol>
                                <h3>School</h3><h4>Student Count</h4>
                                <li>{this.state.schools[0].name} <a>{this.state.schools[0].count}</a></li>
                                <li>{this.state.schools[1].name} <a>{this.state.schools[1].count}</a></li>
                                <li>{this.state.schools[2].name} <a>{this.state.schools[2].count}</a></li>
                                <li>{this.state.schools[3].name} <a>{this.state.schools[3].count}</a></li>
                                <li>{this.state.schools[4].name} <a>{this.state.schools[4].count}</a></li>
                                <li>{this.state.schools[5].name} <a>{this.state.schools[5].count}</a></li>
                                <li>{this.state.schools[6].name} <a>{this.state.schools[6].count}</a></li>
                                <li>{this.state.schools[7].name} <a>{this.state.schools[7].count}</a></li>
                                <li>{this.state.schools[8].name} <a>{this.state.schools[8].count}</a></li>
                                <li>{this.state.schools[9].name} <a>{this.state.schools[9].count}</a></li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
};

export default SchoolsBox;