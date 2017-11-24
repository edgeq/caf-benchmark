# Data Components

## Sidebar
* New vs Active Users over time
    - (Graph over time)
    - `users_field_data` 
	    - `uid, created, changed, access, login`
    - `users_roles`
	    - `bundle, entity_id(same as uid?), roles_target_id`
    
 
* Submissions (Projects Starts vs Complete)
    - `DD_2017.node_field_data` = all project data
	    - see below for query syntax	
   	
	`	https://www.discoverdesign.org/projects?`

			node_field_data
			uid=& 				//USER ID
			field_challenge_target_id=& 	//###
			field_school_name_value=& 	//SCHOOL
			field_competition_value=& 	//T,F, or All
			field_name_value=& 		//TEACHER NAME`
	
	Queries
	
    - Total Projects Started overall
    - Total Projects Started today 
    - Completed Projects overall
    - Completed Projects today

## Main Section
* View by location
    - School
    - Number of submissions
    - Average time of completion
    - Number of projects
    - Number of project completions
* View data by projects
    - Start count
    - Complete count
    - Average length of time
* View demographics
    - User Age
    - User Gender
    - Ethnicity

