import './App.css';

import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default class App extends Component {
  apikey = 'ceab6c35fd424be5970b42782ec1b721'
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<News key="general" apikey={this.apikey} pageSize={8} country={"in"} category={"General"} />} />
            <Route exact path="/business" element={<News key="business" apikey={this.apikey} pageSize={8} country={"in"} category={"Business"} />} />
            <Route exact path="/science" element={<News key="science" apikey={this.apikey} pageSize={8} country={"in"} category={"Science"} />} />
            <Route exact path="/technology" element={<News key="technology" apikey={this.apikey} pageSize={8} country={"in"} category={"Technology"} />} />
            <Route exact path="/sports" element={<News key="sports" apikey={this.apikey} pageSize={8} country={"in"} category={"Sports"} />} />
            <Route exact path="/entertainment" element={<News key="entertainment" apikey={this.apikey} pageSize={8} country={"in"} category={"Entertainment"} />} />
            <Route exact path="/general" element={<News key="general" apikey={this.apikey} pageSize={8} country={"in"} category={"General"} />} />
            <Route exact path="/health" element={<News key="health" apikey={this.apikey} pageSize={8} country={"in"} category={"Health"} />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}