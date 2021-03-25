import React, {Component} from 'react';
import './menu-item.css';
class MenuItem extends Component{
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
        <div class="container-fluid">
            <ul>
         <li> <img className="widthBett" src="https://img.icons8.com/doodle/48/000000/home--v1.png"/></li>
         <li> <img className="widthBett" src="https://img.icons8.com/doodle/48/000000/good-quality--v1.png"/> </li>
         <li> <img className="widthBett" src="https://img.icons8.com/doodle/48/000000/books.png"/> </li>
         <li> <img className="widthBett" src="https://img.icons8.com/doodle/48/000000/news.png"/> </li>

          </ul>
        </div>
    )
    }
}

export default MenuItem;