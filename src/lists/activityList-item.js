import React, {Component, Fragment} from 'react';
import ActivityItem from '../components/contact-item/activity-item';

export default class ActivityList extends Component{
    state = {
        activity : this.props.activity
    }
     render(){
       var activityTemplate;
     if(this.state.activity !== null){
        activityTemplate = this.state.activity.map(item=> {
            return (
                 <ActivityItem
                  title = {item.title}
                  image = {item.image}
               ></ActivityItem>
            )
        })
    }
        
     

    return(
        <Fragment>
            {activityTemplate}
        </Fragment>
    )
    }
}

