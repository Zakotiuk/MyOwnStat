import React, {Component} from 'react';
import './menu-item.css';

class RevordItem extends Component{
    state = {
        title : this.props.title,
        image : this.props.image,
    }
    render(){
        const {title, image} = this.state;
        return(
            <div className="col-3">
                    <img width="60px" src={image} className="imageStyle"></img>
                    <h7>{title}</h7>
            </div>
        )

    }
}
export default RevordItem;