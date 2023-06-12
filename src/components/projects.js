import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          
           {/* Project 1 */}
           <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'lightblue'}} >PORTFOLIO</CardTitle>
            <CardText>
              ReactJS based portfolio website built by breaking the Ceevee template by Styleshout and 
              breaking up their template into isolated React components. Data was fed directly from a JSON File. 
            </CardText>
            <CardActions border>
            <a href="https://github.com/Silviaraju/Silviaportfolio">
              <Button colored>GITHUB</Button>
              </a>
            </CardActions>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'lightgreen'}} >USER MANIPULATION FORM</CardTitle>
            <CardText>
              ReactJS based user form to perform some manipulation like adding, editing and deleting the users.
              Backend is written using Java and maven.
              Data is fed through RESTFul APIs', MYSQL and POSTMAN.
            </CardText>
            <CardActions border>
              <a href="https://github.com/Silviaraju/frontend">
              <Button colored>FRONTEND</Button>
              </a>
              <a href="https://github.com/Silviaraju/backend">
              <Button colored>BACKEND</Button>
              </a>
            </CardActions>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'lightblue'}} >REACTIVE SPRING PROGRAMMING</CardTitle>
            <CardText>
            Reactive application that supports asynchronous, non-blocking, and event-driven applications easily scalable for an employee database.  
            The application can retrieve a particular database based on employee id.
            </CardText>
            <CardActions border>
              <a href="https://github.com/Silviaraju/Reactive-Spring-Programming">
              <Button colored>GITHUB</Button>
              </a>
            </CardActions>
          </Card>
        </div>


      )
    } else if(this.state.activeTab === 1) {
      return (
        <div className="projects-grid">

          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'lightgreen'}} >CAROUSEL</CardTitle>
            <CardText>
            This is a simple responsive Carousel loading images page from a third-party site and generates thumbnails automatically. 
            I have used React Responsive Carousel package which needs to be first installed and 
            using Carousel component available in package I have designed the carousel.
            </CardText>
            <CardActions border>
              <a href="https://github.com/Silviaraju/Carousel">
              <Button colored>GITHUB</Button>
              </a>
            </CardActions>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'lightblue'}} >VOTING SYSTEM</CardTitle>
            <CardText>
            This is a simple vote calculator example which increments count on every click. 
            I introduce the Stateful Component, which are defined using a class and make it easier to keep track of the application state provided component. 
            This component example gives an idea how you add onClick event in JSX.
            </CardText>
            <CardActions border>
              <a href="https://github.com/Silviaraju/Voting-System">
              <Button colored>GITHUB</Button>
              </a>
            </CardActions>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'lightgreen'}} >CALCULATOR</CardTitle>
            <CardText>
            This is a simple Calculator example. I introduce the Stateful Component,
            which are defined using a class and make it easier to keep track of the application state provided component. 
            This component example gives an idea how you add onClick event in JSX.
            </CardText>
            <CardActions border>
              <a href="https://github.com/Silviaraju/Calculator"><Button colored>GITHUB</Button></a>
            </CardActions>
          </Card>
        </div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
        {/* Project 1 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
         <CardTitle style={{color: '#fff', height: '176px', background: 'lightblue'}} >SMART MOBILE BASED EMERGENCY MANAGEMENT SYSTEM</CardTitle>
         <CardText>
         Smart mobile-based application to deliver push alerts during an emergency.
         This is a real-time emergency management and notiﬁcation system using mobile applications 
         which is a direct implementation of m-Government services to better the governmental and public facilities offered. 
         Users can also alert the authorities of suspicious behavior or possible emergencies that warrant further investigation.
         </CardText>
         <CardActions border>
           <a href="https://github.com/Silviaraju/Android"><Button colored>GITHUB</Button></a>
         </CardActions>
       </Card>
     </div>
      )
    } else if(this.state.activeTab === 3) {
      return (
        <div>
         {/* Project 1 */}
         <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
         <CardTitle style={{color: '#fff', height: '176px', background: 'lightgreen'}} >VISION GUIDED GRASPING</CardTitle>
         <CardText>
         Computer vision is often required to provide data for the grasping of a target. 
         Here, I present an integrated vision-guided grasping system for service robots. 
         My system integrates computer vision to capture the shape of an object, position and depth of the image from the RGB-D sensor. 
         I've implemented my planner on a real manipulator and was able to grasp the object through the data received by the computer vision technique.
         </CardText>
         <CardActions border>
           <a href="https://github.com/Silviaraju/Robotics"><Button colored>GITHUB</Button></a>
         </CardActions>
       </Card>
     </div>
      )
    }

  }



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>REACTJS,JAVA</Tab>
          <Tab>JAVASCRIPT</Tab>
          <Tab>ANDROID</Tab>
          <Tab>ROBOTICS</Tab>
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;
