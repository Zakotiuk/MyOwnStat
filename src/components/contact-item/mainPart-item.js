import React, {Component} from 'react';
import './menu-item.css';
class MainItem extends Component{
    state ={
        money : "324",
        name : "Andriyy",
        group : "Shoto tam",
    }
    render(){
        const {name, group, money} = this.state;
        return(
            <ul>
            <li> <span class="navbar-brand mb-0 h1">{name}</span></li>
            <li> <span class="navbar-brand mb-0 h1">{group}</span></li>
            <li> <span class="navbar-brand mb-0 h1">{money}</span></li>
             </ul>
        )
    }
}

export default MainItem;