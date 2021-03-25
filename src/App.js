import React from 'react';
import logo from './logo.svg';
import NavbartItem from './components/contact-item/navbar-item'
import MenuItem from './components/contact-item/menu-item'
import './App.css';
import { Component, Fragment } from 'react';
import RevordList from './lists/revordList-item'
import ActivityList from './lists/activityList-item';
import PersonList from './components/contact-item/personList-item'

class App extends Component{

state = {
  activity:[
    {
      title : "heh?",
      image : "https://mk0fowmedia08h4dr5sf.kinstacdn.com/wp-content/uploads/2014/08/win-1024x1024.jpg"
    },
    {
      title : ";(",
      image : "https://catholicnewstt.com/wp-content/uploads/2018/02/lose.png"
    },
    {
      title : "heh?",
      image : "https://mk0fowmedia08h4dr5sf.kinstacdn.com/wp-content/uploads/2014/08/win-1024x1024.jpg"
    },
    {
      title : "heh?",
      image : "https://mk0fowmedia08h4dr5sf.kinstacdn.com/wp-content/uploads/2014/08/win-1024x1024.jpg"
    }, {
      title : ";(",
      image : "https://catholicnewstt.com/wp-content/uploads/2018/02/lose.png"
    }, {
      title : "heh",
      image : "https://mk0fowmedia08h4dr5sf.kinstacdn.com/wp-content/uploads/2014/08/win-1024x1024.jpg"
    }, {
      title : "heh?",
      image : "https://mk0fowmedia08h4dr5sf.kinstacdn.com/wp-content/uploads/2014/08/win-1024x1024.jpg"
    }
  ],
  personItem:[
    {
      name : "Full name",
      money : "800"
    },
    {
      name : "Full name",
      money : "600"
    },
    {
      name : "Full name",
      money : "450"
    }
  ],
  revords:[
    {
      title : "heh?",
      image : "https://mk0fowmedia08h4dr5sf.kinstacdn.com/wp-content/uploads/2014/08/win-1024x1024.jpg"
    },
    {
      title : ";(",
      image : "https://catholicnewstt.com/wp-content/uploads/2018/02/lose.png"
    },
    {
      title : "heh?",
      image : "https://mk0fowmedia08h4dr5sf.kinstacdn.com/wp-content/uploads/2014/08/win-1024x1024.jpg"
    },
    {
      title : ";(",
      image : "https://catholicnewstt.com/wp-content/uploads/2018/02/lose.png"
    }, {
      title : "heh?",
      image : "https://mk0fowmedia08h4dr5sf.kinstacdn.com/wp-content/uploads/2014/08/win-1024x1024.jpg"
    }, {
      title : "heh?",
      image : "https://mk0fowmedia08h4dr5sf.kinstacdn.com/wp-content/uploads/2014/08/win-1024x1024.jpg"
    }, {
      title : ";(",
      image : "https://catholicnewstt.com/wp-content/uploads/2018/02/lose.png"
    }
  ]
}

render(){
  return (
    <Fragment>
    <NavbartItem/>
          <div className="row">
          <div className="col-2">
          <MenuItem className="col-md-2"/>
          </div>
          <div className="col-3">
          <div className="row">
            <h1>Revoords)</h1>
          <RevordList revords={this.state.revords} className="col-md-5"></RevordList>
          </div>
          </div>

          <div className="col-3">       
              <PersonList personItem={this.state.personItem}className="col-md-5" ></PersonList>
          </div>


          <div className="col-3">                
          <div className="row">
            <h1>Activity)</h1>
          <ActivityList activity={this.state.activity} className="col-md-5"></ActivityList>
          </div>
          </div>
          </div>
    </Fragment>
  );
}
}

export default App;
