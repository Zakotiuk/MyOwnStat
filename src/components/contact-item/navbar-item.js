import React, {Component} from 'react';
import './navbar-item.css';

class NavbartItem extends Component{
    state ={
        coints : "315",
        crystal : "138",
        money : "324",
        badge : "7",
        name : "Andriyy",
        group : "Shoto tam",
        logOf : "Lof out"
    }
    render(){
        const {name} = this.state;
        const {coints} = this.state;
        const {money} = this.state;
        const {badge} = this.state;
        const {crystal} = this.state;
        const {logOf} = this.state;
        const {group} = this.state;

        return(
        <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
            <span className="titleStyle">MyOwnStat</span>
          <span class="navbar-brand mb-0 h1">{coints}</span>
          <img src="https://img.icons8.com/doodle/48/000000/facebook-like.png"/>
          <span class="navbar-brand mb-0 h1">{crystal}</span>   
          <img src="https://img.icons8.com/doodle/48/000000/call-me.png"/>       
          <span class="navbar-brand mb-0 h1">{money}</span>
          <img src="https://img.icons8.com/doodle/48/000000/handshake--v1.png"/>
          <span class="navbar-brand mb-0 h1">{badge}</span>
          <div className="nameStyle">
              <ul>
         <li> <span class="navbar-brand mb-0 h1">{name}</span></li>
         <li> <span class="navbar-brand mb-0 h1">{group}</span></li>
         <li> <span class="navbar-brand mb-0 h1">{logOf}</span></li>
          </ul>
          </div>
        </div>
      </nav>)

    }

}

export default NavbartItem;