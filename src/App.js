import React, { Component } from 'react';
import Header from './components/header/header';
import About from './components/about/about';
import Resume from './components/resume/resume';
import Portfolio from './components/portfolio/portfolio';
import ContactUs from './components/contactus/contactus';
import Footer from './components/footer/footer';
//import logo from './logo.svg';
import './App.css';


class App extends Component {
  state = {
    data: [],
    loading: true
  }
  componentDidMount() {
    fetch('https://gitconnected.com/v1/portfolio/fabiovalentino')
    .then(res => res.json())
    .then((data) => {
      this.setState({ data, loading: false })
    })
    .catch(console.log)
  }

  render() {
    if(this.state.loading) {
      return 'Loading...'
    }
    return (
      <div className="App">
        <Header resume={this.state.data} />
        <About resume={this.state.data} />
        <Resume resume={this.state.data} />
        <Portfolio resume={this.state.data} />
        <ContactUs resume={this.state.data} />
        <Footer resume={this.state.data} />
      </div>
    );
  }
}export default App;
