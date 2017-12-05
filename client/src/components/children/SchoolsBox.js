import React, { Component } from "react";
import API from "../../utils/API";




class SchoolsBox extends Component {
    
    state = {
		schools: [],
        subCount: []
    };

    componentDidMount() {
        this.loadSchools();
        
    }

    loadSchools = () => {
        API.getActschools()
            .then(res => {
            console.log(res)
            this.setState({ schools: res.data  || []  })
            })
            .catch(err => console.log(err));
    };

    renderSchools(){
        return (
            this.state.schools.map(function(school){
                return (
                    <li>{school.field_school_name_value} <a>{school['subCount']}</a></li>
                )
            })
        )
    }

    render () {
        return (
            <div id="schoolsBox" className="animated fadeInUp col-sm-6">
                <div className="boxContent">
                    <h3>SCHOOLS</h3>
                    <div id="schoolsContent" className="container-fluid">
                        <div className="row">
                            <ol>
                                <h3>School</h3><h4>Student Count</h4>
                                {this.renderSchools()}
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
};

export default SchoolsBox;