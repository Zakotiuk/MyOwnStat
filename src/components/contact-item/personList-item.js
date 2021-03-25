import React, {Component, Fragment} from 'react';
import PersonItem from './person-item';

export default class PersonList extends Component{
    state = {
        personItem : this.props.personItem
    }
     render(){
       var personTemplate;
     if(this.state.personItem !== null){
        personTemplate = this.state.personItem.map(item=> {
            return (
                 <PersonItem
                  name = {item.name}
                  money = {item.money}
               ></PersonItem>
            )
        })
    }
        
     

    return(
        <Fragment>
            {personTemplate}
        </Fragment>
    )
    }
}

