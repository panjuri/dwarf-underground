import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import Ad from './Ad'
import Avatar from './Avatar'
import Footer from './Footer'
import Oa from './Oa'
import AB from './AB'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <main className="expanded row">
          <div className="large-8 medium-12 columns article">
            <h2 className="article-title">Gold Madness - Fact or Fiction?</h2>
            <Avatar /> 
            <AB /> 
            <div className="article-links">
              <a className="article-link" href="#">
                <i className="fa fa-comments-o"></i>
                <span className="article-link-text">Comments</span>
              </a>
              <a className="article-link" href="#">
                <i className="fa fa-share"></i>
                <span className="article-link-text">Share Post</span>
              </a>
            </div>
          </div>
          <Ad />
          <Oa /> 
        </main>
        <Footer /> 
      </div>
    );
  }
}
export default App;