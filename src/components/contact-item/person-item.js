import React, {Component} from 'react';
import './menu-item.css';

class PersonItem extends Component{
    state = {
        name : this.props.name,
        money : this.props.money,
    }
    render(){
        const {name, money} = this.state;
        return(
            <div>
                    <h2>{name}</h2>
                    <h5>{money}</h5>
            </div>
        )

    }
}
export default PersonItem;