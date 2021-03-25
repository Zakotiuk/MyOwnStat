import React, {Component, Fragment} from 'react';
import RevordItem from '../components/contact-item/revords-item';


export default class RevordList extends Component{
    state = {
        revords : this.props.revords
    }
     render(){
       var revorsTemplate;
     if(this.state.revords !== null){
        revorsTemplate = this.state.revords.map(item=> {
            return (
                 <RevordItem
                  title = {item.title}
                  image = {item.image}
               ></RevordItem>

            )
        })
    }
        
     

    return(
        <Fragment>
            {revorsTemplate}
        </Fragment>
    )
    }
}

