import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">HOME</Link>} scroll>
            <Navigation>
                <Link to="/resume">RESUME</Link>
                <Link to="/aboutme">ABOUT ME</Link>
                <Link to="/projects">PROJECTS</Link>
                <Link to="/contact">CONTACT</Link>
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">HOME</Link>}>
            <Navigation>
              <Link to="/resume">RESUME</Link>
              <Link to="/aboutme">ABOUT ME</Link>
              <Link to="/projects">PROJECTS</Link>
              <Link to="/contact">CONTACT</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>

    );
  }
}

export default App;
